import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateSupplierInvoice = createAction({
  auth: dolibarrAuth,
  name: 'validate_supplier_invoice',
  displayName: 'Valider une facture fournisseur',
  description: 'Valide une facture fournisseur dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/supplierinvoices/${context.propsValue.id}/validate` });
  },
});
