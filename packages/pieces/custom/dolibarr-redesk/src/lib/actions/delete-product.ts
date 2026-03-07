import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteProduct = createAction({
  auth: dolibarrAuth,
  name: 'delete_product',
  displayName: 'Supprimer un produit/service',
  description: 'Supprime un produit ou service dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du produit', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/products/${context.propsValue.id}` });
  },
});
