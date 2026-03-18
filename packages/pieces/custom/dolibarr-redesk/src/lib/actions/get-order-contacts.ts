import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOrderContacts = createAction({
  auth: dolibarrAuth,
  name: 'get_order_contacts',
  displayName: 'Commande — Obtenir les contacts',
  description: 'Récupère les contacts d\'une commande.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    type: Property.ShortText({ displayName: 'Type', required: false }),
  },
  async run(context) {
    const { id, type } = context.propsValue;
    const queryParams: Record<string, string> = {};
    if (type) queryParams['type'] = type;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/orders/${id}/contacts`,
      queryParams,
    });
  },
});
