import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOrderByRef = createAction({
  auth: dolibarrAuth,
  name: 'get_order_by_ref',
  displayName: 'Commande — Obtenir par référence',
  description: 'Récupère une commande par sa référence.',
  props: {
    ref: Property.ShortText({ displayName: 'Référence', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/orders/ref/${context.propsValue.ref}`,
    });
  },
});
