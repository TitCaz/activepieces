import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateThirdParty = createAction({
  auth: dolibarrAuth,
  name: 'update_third_party',
  displayName: 'Mettre à jour un tiers',
  description: 'Met à jour les informations d\'un tiers existant.',
  props: {
    id: Property.ShortText({
      displayName: 'ID du tiers',
      required: true,
    }),
    name: Property.ShortText({
      displayName: 'Nom',
      required: false,
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
  },
  async run(context) {
    const { id, name, email, phone, address, zip, town } = context.propsValue;
    const body: Record<string, unknown> = {};

    if (name) body['name'] = name;
    if (email) body['email'] = email;
    if (phone) body['phone'] = phone;
    if (address) body['address'] = address;
    if (zip) body['zip'] = zip;
    if (town) body['town'] = town;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/thirdparties/${id}`,
      body,
    });
  },
});
