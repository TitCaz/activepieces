import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getSupplierInvoiceLines = createAction({
  auth: dolibarrAuth,
  name: 'get_supplier_invoice_lines',
  displayName: 'Facture fournisseur — Obtenir les lignes',
  description: 'Récupère les lignes d\'une facture fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/supplierinvoices/${context.propsValue.id}/lines`,
    });
  },
});
