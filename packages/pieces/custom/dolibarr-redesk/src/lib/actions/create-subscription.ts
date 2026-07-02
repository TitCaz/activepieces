import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createSubscription = createAction({
  auth: dolibarrAuth,
  name: 'create_subscription',
  displayName: 'Créer une cotisation',
  description: 'Crée une nouvelle cotisation.',
  props: {
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/subscriptions', body: context.propsValue.body as Record<string, unknown> });
  },
});
