import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const orderToDraft = createAction({
  auth: dolibarrAuth,
  name: 'order_to_draft',
  displayName: 'Commande — Remettre en brouillon',
  description: 'Remet une commande à l\'état brouillon.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${context.propsValue.id}/settodraft`,
    });
  },
});
