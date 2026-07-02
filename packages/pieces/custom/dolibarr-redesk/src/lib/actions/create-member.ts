import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createMember = createAction({
  auth: dolibarrAuth,
  name: 'create_member',
  displayName: 'Créer un adhérent',
  description: 'Crée un nouvel adhérent.',
  props: {
    lastname: Property.ShortText({ displayName: 'Nom', required: true }),
    firstname: Property.ShortText({ displayName: 'Prénom', required: false }),
    email: Property.ShortText({ displayName: 'Email', required: false }),
    fk_adherent_type: Property.ShortText({ displayName: 'ID Type adhérent', required: true }),
  },
  async run(context) {
    const { lastname, firstname, email, fk_adherent_type } = context.propsValue;
    const body: Record<string, unknown> = { lastname, fk_adherent_type };
    if (firstname) body['firstname'] = firstname;
    if (email) body['email'] = email;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/members', body });
  },
});
