import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createBom = createAction({
  auth: dolibarrAuth,
  name: 'create_bom',
  displayName: 'Créer une nomenclature (BOM)',
  description: 'Crée une nouvelle nomenclature.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID Produit', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: false }),
  },
  async run(context) {
    const { label, fk_product, qty } = context.propsValue;
    const body: Record<string, unknown> = { label, fk_product };
    if (qty !== undefined && qty !== null) body['qty'] = qty;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/boms', body });
  },
});
