import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const reopenOrder = createAction({
  auth: dolibarrAuth,
  name: 'reopen_order',
  displayName: 'Commande — Rouvrir',
  description: 'Rouvre une commande fermée.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${context.propsValue.id}/reopen`,
    });
  },
});
