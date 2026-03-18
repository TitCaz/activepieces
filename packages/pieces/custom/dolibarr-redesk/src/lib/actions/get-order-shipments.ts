import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOrderShipments = createAction({
  auth: dolibarrAuth,
  name: 'get_order_shipments',
  displayName: 'Commande — Obtenir les expéditions',
  description: 'Récupère les expéditions liées à une commande.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/orders/${context.propsValue.id}/shipments`,
    });
  },
});
