import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteSupplierOrder = createAction({
  auth: dolibarrAuth,
  name: 'delete_supplier_order',
  displayName: 'Supprimer une commande fournisseur',
  description: 'Supprime une commande fournisseur dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/supplierorders/${context.propsValue.id}` });
  },
});
