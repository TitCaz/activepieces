import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getShipmentLines = createAction({
  auth: dolibarrAuth,
  name: 'get_shipment_lines',
  displayName: 'Expédition — Obtenir les lignes',
  description: 'Récupère les lignes d\'une expédition.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/shipments/${context.propsValue.id}/lines`,
    });
  },
});
