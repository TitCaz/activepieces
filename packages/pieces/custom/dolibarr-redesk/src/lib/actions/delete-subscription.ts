import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteSubscription = createAction({
  auth: dolibarrAuth,
  name: 'delete_subscription',
  displayName: 'Supprimer une cotisation',
  description: 'Supprime une cotisation par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/subscriptions/${context.propsValue.id}` });
  },
});
