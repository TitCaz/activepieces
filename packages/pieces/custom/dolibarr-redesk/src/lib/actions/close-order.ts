import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closeOrder = createAction({
  auth: dolibarrAuth,
  name: 'close_order',
  displayName: 'Commande — Clôturer',
  description: 'Clôture une commande.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${context.propsValue.id}/close`,
    });
  },
});
