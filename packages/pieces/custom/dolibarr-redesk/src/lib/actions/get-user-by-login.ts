import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getUserByLogin = createAction({
  auth: dolibarrAuth,
  name: 'get_user_by_login',
  displayName: 'Utilisateur — Obtenir par login',
  description: 'Récupère un utilisateur par son login.',
  props: {
    login: Property.ShortText({ displayName: 'Login', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/users/login/${context.propsValue.login}`,
    });
  },
});
