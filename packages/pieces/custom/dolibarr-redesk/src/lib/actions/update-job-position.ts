import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateJobPosition = createAction({
  auth: dolibarrAuth,
  name: 'update_job_position',
  displayName: 'Mettre à jour un poste de recrutement',
  description: 'Met à jour un poste de recrutement existant.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/recruitment/jobpositions/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
