import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateShipmentLine = createAction({
  auth: dolibarrAuth,
  name: 'update_shipment_line',
  displayName: 'Expédition — Modifier une ligne',
  description: 'Modifie une ligne d\'une expédition.',
  props: {
    id: Property.ShortText({ displayName: 'ID expédition', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
    body: Property.Json({ displayName: 'Données', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/shipments/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
      body: context.propsValue.body as Record<string, unknown>,
    });
  },
});
