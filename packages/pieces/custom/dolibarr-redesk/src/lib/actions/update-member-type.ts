import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateMemberType = createAction({
  auth: dolibarrAuth,
  name: 'update_member_type',
  displayName: "Mettre à jour un type d'adhérent",
  description: "Met à jour un type d'adhérent existant.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/memberstypes/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
