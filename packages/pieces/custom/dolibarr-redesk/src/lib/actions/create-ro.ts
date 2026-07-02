import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createRo = createAction({
  auth: dolibarrAuth,
  name: 'create_ro',
  displayName: 'Créer un RO (reconditionné)',
  description: 'Crée un nouveau RO.',
  props: {
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/ros', body: context.propsValue.body as Record<string, unknown> });
  },
});
