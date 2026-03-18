import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteSupplierInvoice = createAction({
  auth: dolibarrAuth,
  name: 'delete_supplier_invoice',
  displayName: 'Supprimer une facture fournisseur',
  description: 'Supprime une facture fournisseur dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/supplierinvoices/${context.propsValue.id}` });
  },
});
