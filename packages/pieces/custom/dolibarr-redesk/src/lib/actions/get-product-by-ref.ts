import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getProductByRef = createAction({
  auth: dolibarrAuth,
  name: 'get_product_by_ref',
  displayName: 'Produit — Obtenir par référence',
  description: 'Récupère un produit par sa référence.',
  props: {
    ref: Property.ShortText({ displayName: 'Référence', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/products/ref/${context.propsValue.ref}`,
    });
  },
});
