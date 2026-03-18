import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createSupplierInvoice = createAction({
  auth: dolibarrAuth,
  name: 'create_supplier_invoice',
  displayName: 'Créer une facture fournisseur',
  description: 'Crée une nouvelle facture fournisseur dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du fournisseur', required: true }),
    ref_supplier: Property.ShortText({ displayName: 'Référence fournisseur', required: false }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', description: 'Tableau de lignes de la facture.', required: false }),
  },
  async run(context) {
    const { socid, ref_supplier, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (ref_supplier) body['ref_supplier'] = ref_supplier;
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/supplierinvoices', body });
  },
});
