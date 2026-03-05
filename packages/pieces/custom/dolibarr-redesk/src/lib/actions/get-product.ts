import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getProduct = createAction({
  auth: dolibarrAuth,
  name: 'get_product',
  displayName: 'Obtenir un produit',
  description: 'Récupère les détails d\'un produit ou service par son ID.',
  props: {
    id: Property.ShortText({
      displayName: 'ID du produit',
      required: true,
    }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/products/${context.propsValue.id}`,
    });
  },
});
