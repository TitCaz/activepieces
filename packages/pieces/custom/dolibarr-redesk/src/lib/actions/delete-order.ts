import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteOrder = createAction({
  auth: dolibarrAuth,
  name: 'delete_order',
  displayName: 'Supprimer une commande',
  description: 'Supprime une commande dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID de la commande', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/orders/${context.propsValue.id}` });
  },
});
