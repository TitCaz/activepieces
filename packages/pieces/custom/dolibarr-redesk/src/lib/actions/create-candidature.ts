import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createCandidature = createAction({
  auth: dolibarrAuth,
  name: 'create_candidature',
  displayName: 'Créer une candidature',
  description: 'Crée une nouvelle candidature.',
  props: {
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/recruitment/candidatures', body: context.propsValue.body as Record<string, unknown> });
  },
});
