import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteOrderLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_order_line',
  displayName: 'Commande — Supprimer une ligne',
  description: 'Supprime une ligne d\'une commande.',
  props: {
    id: Property.ShortText({ displayName: 'ID commande', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/orders/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
