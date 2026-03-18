import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteShipment = createAction({
  auth: dolibarrAuth,
  name: 'delete_shipment',
  displayName: 'Supprimer une expédition',
  description: 'Supprime une expédition dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/shipments/${context.propsValue.id}` });
  },
});
