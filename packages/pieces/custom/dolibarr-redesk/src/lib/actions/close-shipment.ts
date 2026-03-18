import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closeShipment = createAction({
  auth: dolibarrAuth,
  name: 'close_shipment',
  displayName: 'Clôturer une expédition',
  description: 'Clôture une expédition dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/shipments/${context.propsValue.id}/close` });
  },
});
