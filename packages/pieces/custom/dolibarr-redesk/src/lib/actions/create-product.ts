import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createProduct = createAction({
  auth: dolibarrAuth,
  name: 'create_product',
  displayName: 'Créer un produit',
  description: 'Crée un nouveau produit ou service dans Dolibarr.',
  props: {
    ref: Property.ShortText({
      displayName: 'Référence',
      required: true,
    }),
    label: Property.ShortText({
      displayName: 'Libellé',
      required: true,
    }),
    type: Property.StaticDropdown({
      displayName: 'Type',
      required: true,
      defaultValue: '0',
      options: {
        options: [
          { label: 'Produit', value: '0' },
          { label: 'Service', value: '1' },
        ],
      },
    }),
    price: Property.Number({
      displayName: 'Prix HT',
      required: false,
    }),
    tva_tx: Property.Number({
      displayName: 'Taux TVA (%)',
      required: false,
      defaultValue: 20,
    }),
    description: Property.LongText({
      displayName: 'Description',
      required: false,
    }),
    status: Property.StaticDropdown({
      displayName: 'Statut vente',
      required: false,
      defaultValue: '1',
      options: {
        options: [
          { label: 'Actif', value: '1' },
          { label: 'Inactif', value: '0' },
        ],
      },
    }),
  },
  async run(context) {
    const { ref, label, type, price, tva_tx, description, status } = context.propsValue;
    const body: Record<string, unknown> = {
      ref,
      label,
      type: Number(type),
      status: Number(status ?? '1'),
    };

    if (price !== undefined && price !== null) body['price'] = price;
    if (tva_tx !== undefined && tva_tx !== null) body['tva_tx'] = tva_tx;
    if (description) body['description'] = description;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: '/products',
      body,
    });
  },
});
