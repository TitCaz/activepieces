import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createUser = createAction({
  auth: dolibarrAuth,
  name: 'create_user',
  displayName: 'Créer un utilisateur',
  description: 'Crée un nouvel utilisateur dans Dolibarr.',
  props: {
    login: Property.ShortText({ displayName: 'Identifiant', required: true }),
    lastname: Property.ShortText({ displayName: 'Nom', required: true }),
    firstname: Property.ShortText({ displayName: 'Prénom', required: false }),
    email: Property.ShortText({ displayName: 'Email', required: false }),
    password: Property.ShortText({ displayName: 'Mot de passe', required: false }),
  },
  async run(context) {
    const { login, lastname, firstname, email, password } = context.propsValue;
    const body: Record<string, unknown> = { login, lastname };
    if (firstname) body['firstname'] = firstname;
    if (email) body['email'] = email;
    if (password) body['pass'] = password;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/users', body });
  },
});
