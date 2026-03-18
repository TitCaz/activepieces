import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteTicket = createAction({
  auth: dolibarrAuth,
  name: 'delete_ticket',
  displayName: 'Supprimer un ticket',
  description: 'Supprime un ticket dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/tickets/${context.propsValue.id}`,
    });
  },
});
