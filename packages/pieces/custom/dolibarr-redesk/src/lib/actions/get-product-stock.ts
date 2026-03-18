import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getProductStock = createAction({
  auth: dolibarrAuth,
  name: 'get_product_stock',
  displayName: 'Produit — Obtenir le stock',
  description: 'Récupère le stock d\'un produit.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/products/${context.propsValue.id}/stock`,
    });
  },
});
