import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createPartnership = createAction({
  auth: dolibarrAuth,
  name: 'create_partnership',
  displayName: 'Créer un partenariat',
  description: 'Crée un nouveau partenariat.',
  props: {
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/partnerships', body: context.propsValue.body as Record<string, unknown> });
  },
});
