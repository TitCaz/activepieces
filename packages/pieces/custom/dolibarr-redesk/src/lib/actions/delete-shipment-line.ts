import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteShipmentLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_shipment_line',
  displayName: 'Expédition — Supprimer une ligne',
  description: 'Supprime une ligne d\'une expédition.',
  props: {
    id: Property.ShortText({ displayName: 'ID expédition', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/shipments/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
