import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateProduct = createAction({
  auth: dolibarrAuth,
  name: 'update_product',
  displayName: 'Mettre à jour un produit/service',
  description: 'Met à jour un produit ou service existant dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du produit', required: true }),
    label: Property.ShortText({ displayName: 'Libellé', required: false }),
    price: Property.ShortText({ displayName: 'Prix HT', required: false }),
    description: Property.LongText({ displayName: 'Description', required: false }),
    note: Property.LongText({ displayName: 'Note', required: false }),
  },
  async run(context) {
    const { id, label, price, description, note } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (label) body['label'] = label;
    if (price) body['price'] = Number(price);
    if (description) body['description'] = description;
    if (note) body['note'] = note;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/products/${id}`, body });
  },
});
