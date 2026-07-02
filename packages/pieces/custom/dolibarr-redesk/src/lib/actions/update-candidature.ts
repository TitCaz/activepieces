import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateCandidature = createAction({
  auth: dolibarrAuth,
  name: 'update_candidature',
  displayName: 'Mettre à jour une candidature',
  description: 'Met à jour une candidature existante.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/recruitment/candidatures/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
