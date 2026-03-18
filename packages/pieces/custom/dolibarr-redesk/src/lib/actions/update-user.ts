import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateUser = createAction({
  auth: dolibarrAuth,
  name: 'update_user',
  displayName: 'Utilisateur — Modifier',
  description: 'Modifie un utilisateur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Données', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/users/${context.propsValue.id}`,
      body: context.propsValue.body as Record<string, unknown>,
    });
  },
});
