import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getShipment = createAction({
  auth: dolibarrAuth,
  name: 'get_shipment',
  displayName: 'Récupérer une expédition',
  description: "Récupère les détails d'une expédition par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/shipments/${context.propsValue.id}`,
    });
  },
});
