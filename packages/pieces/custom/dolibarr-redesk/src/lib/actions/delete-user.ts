import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteUser = createAction({
  auth: dolibarrAuth,
  name: 'delete_user',
  displayName: 'Utilisateur — Supprimer',
  description: 'Supprime un utilisateur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/users/${context.propsValue.id}`,
    });
  },
});
