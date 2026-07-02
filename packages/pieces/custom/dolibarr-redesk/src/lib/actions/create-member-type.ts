import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createMemberType = createAction({
  auth: dolibarrAuth,
  name: 'create_member_type',
  displayName: "Créer un type d'adhérent",
  description: "Crée un nouveau type d'adhérent.",
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    description: Property.LongText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { label, description } = context.propsValue;
    const body: Record<string, unknown> = { label };
    if (description) body['description'] = description;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/memberstypes', body });
  },
});
