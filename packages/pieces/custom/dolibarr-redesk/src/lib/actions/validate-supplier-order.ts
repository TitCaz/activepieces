import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateSupplierOrder = createAction({
  auth: dolibarrAuth,
  name: 'validate_supplier_order',
  displayName: 'Valider une commande fournisseur',
  description: 'Valide une commande fournisseur dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/supplierorders/${context.propsValue.id}/validate` });
  },
});
