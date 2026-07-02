import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createMo = createAction({
  auth: dolibarrAuth,
  name: 'create_mo',
  displayName: "Créer un ordre de fabrication",
  description: "Crée un nouvel ordre de fabrication.",
  props: {
    fk_product: Property.ShortText({ displayName: 'ID Produit', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
    fk_bom: Property.ShortText({ displayName: 'ID Nomenclature (BOM)', required: false }),
    fk_warehouse: Property.ShortText({ displayName: 'ID Entrepôt', required: false }),
  },
  async run(context) {
    const { fk_product, qty, fk_bom, fk_warehouse } = context.propsValue;
    const body: Record<string, unknown> = { fk_product, qty };
    if (fk_bom) body['fk_bom'] = fk_bom;
    if (fk_warehouse) body['fk_warehouse'] = fk_warehouse;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/mos', body });
  },
});
