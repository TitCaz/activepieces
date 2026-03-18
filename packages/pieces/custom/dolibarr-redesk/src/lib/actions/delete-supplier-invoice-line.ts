import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteSupplierInvoiceLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_supplier_invoice_line',
  displayName: 'Facture fournisseur — Supprimer une ligne',
  description: 'Supprime une ligne d\'une facture fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID facture', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/supplierinvoices/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
