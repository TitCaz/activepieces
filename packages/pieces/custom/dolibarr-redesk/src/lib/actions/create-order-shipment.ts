import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createOrderShipment = createAction({
  auth: dolibarrAuth,
  name: 'create_order_shipment',
  displayName: 'Commande — Créer une expédition',
  description: 'Crée une expédition pour une commande depuis un entrepôt.',
  props: {
    id: Property.ShortText({ displayName: 'ID commande', required: true }),
    warehouse_id: Property.ShortText({ displayName: 'ID entrepôt', required: true }),
  },
  async run(context) {
    const { id, warehouse_id } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${id}/shipment/${warehouse_id}`,
    });
  },
});
