import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createShipmentFromOrder = createAction({
  auth: dolibarrAuth,
  name: 'create_shipment_from_order',
  displayName: 'Expédition — Créer depuis une commande',
  description: 'Crée une expédition à partir d\'une commande.',
  props: {
    orderid: Property.ShortText({ displayName: 'ID commande', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/shipments/createfromorder/${context.propsValue.orderid}`,
    });
  },
});
