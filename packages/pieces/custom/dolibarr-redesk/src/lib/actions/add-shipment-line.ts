import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addShipmentLine = createAction({
  auth: dolibarrAuth,
  name: 'add_shipment_line',
  displayName: 'Expédition — Ajouter une ligne',
  description: 'Ajoute une ligne à une expédition.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID produit', required: false }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
  },
  async run(context) {
    const { id, fk_product, qty } = context.propsValue;
    const body: Record<string, unknown> = { qty };
    if (fk_product !== undefined && fk_product !== '') body['fk_product'] = fk_product;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/shipments/${id}/lines`,
      body,
    });
  },
});
