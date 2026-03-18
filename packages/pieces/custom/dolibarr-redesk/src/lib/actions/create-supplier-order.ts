import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createSupplierOrder = createAction({
  auth: dolibarrAuth,
  name: 'create_supplier_order',
  displayName: 'Créer une commande fournisseur',
  description: 'Crée une nouvelle commande fournisseur dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du fournisseur', required: true }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', description: 'Tableau de lignes de la commande.', required: false }),
  },
  async run(context) {
    const { socid, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/supplierorders', body });
  },
});
