import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getSupplierInvoicePayments = createAction({
  auth: dolibarrAuth,
  name: 'get_supplier_invoice_payments',
  displayName: 'Facture fournisseur — Obtenir les paiements',
  description: 'Récupère les paiements d\'une facture fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/supplierinvoices/${context.propsValue.id}/payments`,
    });
  },
});
