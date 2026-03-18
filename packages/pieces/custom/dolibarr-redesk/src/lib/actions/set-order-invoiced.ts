import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setOrderInvoiced = createAction({
  auth: dolibarrAuth,
  name: 'set_order_invoiced',
  displayName: 'Commande — Marquer comme facturée',
  description: 'Marque une commande comme facturée.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${context.propsValue.id}/setinvoiced`,
    });
  },
});
