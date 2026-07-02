import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addReceptionLine = createAction({
  auth: dolibarrAuth,
  name: 'add_reception_line',
  displayName: "Ajouter une ligne à une réception",
  description: "Ajoute une ligne à une réception existante.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID Produit', required: false }),
    fk_warehouse: Property.ShortText({ displayName: 'ID Entrepôt', required: false }),
  },
  async run(context) {
    const { id, qty, fk_product, fk_warehouse } = context.propsValue;
    const body: Record<string, unknown> = { qty };
    if (fk_product) body['fk_product'] = fk_product;
    if (fk_warehouse) body['fk_warehouse'] = fk_warehouse;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/receptions/${id}/lines`, body });
  },
});
