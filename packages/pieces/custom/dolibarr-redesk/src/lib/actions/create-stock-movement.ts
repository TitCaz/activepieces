import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createStockMovement = createAction({
  auth: dolibarrAuth,
  name: 'create_stock_movement',
  displayName: 'Créer un mouvement de stock',
  description: 'Crée un nouveau mouvement de stock.',
  props: {
    product_id: Property.ShortText({ displayName: 'ID Produit', required: true }),
    warehouse_id: Property.ShortText({ displayName: 'ID Entrepôt', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
    type: Property.Number({ displayName: 'Type (0=entrée, 1=sortie, 2=correction)', required: false, defaultValue: 2 }),
    movementlabel: Property.ShortText({ displayName: 'Libellé du mouvement', required: false }),
    movementcode: Property.ShortText({ displayName: 'Code du mouvement', required: false }),
    price: Property.Number({ displayName: 'Prix', required: false }),
  },
  async run(context) {
    const { product_id, warehouse_id, qty, type, movementlabel, movementcode, price } = context.propsValue;
    const body: Record<string, unknown> = { product_id, warehouse_id, qty, type: type ?? 2 };
    if (movementlabel) body['movementlabel'] = movementlabel;
    if (movementcode) body['movementcode'] = movementcode;
    if (price !== undefined && price !== null) body['price'] = price;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/stockmovements', body });
  },
});
