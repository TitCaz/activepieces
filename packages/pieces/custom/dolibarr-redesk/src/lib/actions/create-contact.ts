import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createContact = createAction({
  auth: dolibarrAuth,
  name: 'create_contact',
  displayName: 'Créer un contact',
  description: 'Crée un nouveau contact/adresse dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers', required: true }),
    lastname: Property.ShortText({ displayName: 'Nom', required: true }),
    firstname: Property.ShortText({ displayName: 'Prénom', required: false }),
    email: Property.ShortText({ displayName: 'Email', required: false }),
    phone_pro: Property.ShortText({ displayName: 'Téléphone pro', required: false }),
    phone_mobile: Property.ShortText({ displayName: 'Téléphone mobile', required: false }),
    poste: Property.ShortText({ displayName: 'Poste/Fonction', required: false }),
  },
  async run(context) {
    const { socid, lastname, firstname, email, phone_pro, phone_mobile, poste } = context.propsValue;
    const body: Record<string, unknown> = { socid: Number(socid), lastname };
    if (firstname) body['firstname'] = firstname;
    if (email) body['email'] = email;
    if (phone_pro) body['phone_pro'] = phone_pro;
    if (phone_mobile) body['phone_mobile'] = phone_mobile;
    if (poste) body['poste'] = poste;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/contacts', body });
  },
});
