import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getUser = createAction({
  auth: dolibarrAuth,
  name: 'get_user',
  displayName: 'Récupérer un utilisateur',
  description: "Récupère les détails d'un utilisateur par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/users/${context.propsValue.id}` });
  },
});
