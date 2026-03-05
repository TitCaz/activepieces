import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createThirdParty = createAction({
  auth: dolibarrAuth,
  name: 'create_third_party',
  displayName: 'Créer un tiers',
  description: 'Crée un nouveau client ou fournisseur dans Dolibarr.',
  props: {
    name: Property.ShortText({
      displayName: 'Nom',
      required: true,
    }),
    client: Property.StaticDropdown({
      displayName: 'Type client',
      required: true,
      defaultValue: '1',
      options: {
        options: [
          { label: 'Client', value: '1' },
          { label: 'Prospect', value: '2' },
          { label: 'Non-client', value: '0' },
        ],
      },
    }),
    supplier: Property.StaticDropdown({
      displayName: 'Type fournisseur',
      required: true,
      defaultValue: '0',
      options: {
        options: [
          { label: 'Oui', value: '1' },
          { label: 'Non', value: '0' },
        ],
      },
    }),
    email: Property.ShortText({
      displayName: 'Email',
      required: false,
    }),
    phone: Property.ShortText({
      displayName: 'Téléphone',
      required: false,
    }),
    address: Property.LongText({
      displayName: 'Adresse',
      required: false,
    }),
    zip: Property.ShortText({
      displayName: 'Code postal',
      required: false,
    }),
    town: Property.ShortText({
      displayName: 'Ville',
      required: false,
    }),
    siret: Property.ShortText({
      displayName: 'SIRET',
      required: false,
    }),
  },
  async run(context) {
    const { name, client, supplier, email, phone, address, zip, town, siret } = context.propsValue;

    const body: Record<string, unknown> = {
      name,
      client: Number(client),
      fournisseur: Number(supplier),
    };

    if (email) body['email'] = email;
    if (phone) body['phone'] = phone;
    if (address) body['address'] = address;
    if (zip) body['zip'] = zip;
    if (town) body['town'] = town;
    if (siret) body['idprof2'] = siret;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: '/thirdparties',
      body,
    });
  },
});
