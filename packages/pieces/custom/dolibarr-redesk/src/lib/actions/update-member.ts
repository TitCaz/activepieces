import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateMember = createAction({
  auth: dolibarrAuth,
  name: 'update_member',
  displayName: 'Mettre à jour un adhérent',
  description: 'Met à jour un adhérent existant.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/members/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
