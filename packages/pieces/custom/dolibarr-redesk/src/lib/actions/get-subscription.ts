import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getSubscription = createAction({
  auth: dolibarrAuth,
  name: 'get_subscription',
  displayName: 'Récupérer une cotisation',
  description: "Récupère les détails d'une cotisation par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/subscriptions/${context.propsValue.id}` });
  },
});
