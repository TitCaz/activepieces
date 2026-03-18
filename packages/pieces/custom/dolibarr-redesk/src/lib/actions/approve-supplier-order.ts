import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const approveSupplierOrder = createAction({
  auth: dolibarrAuth,
  name: 'approve_supplier_order',
  displayName: 'Commande fournisseur — Approuver',
  description: 'Approuve une commande fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/supplierorders/${context.propsValue.id}/approve`,
    });
  },
});
