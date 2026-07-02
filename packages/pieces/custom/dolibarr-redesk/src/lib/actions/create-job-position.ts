import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createJobPosition = createAction({
  auth: dolibarrAuth,
  name: 'create_job_position',
  displayName: 'Créer un poste de recrutement',
  description: 'Crée un nouveau poste de recrutement.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    body: Property.Json({ displayName: 'Champs supplémentaires (JSON)', required: false }),
  },
  async run(context) {
    const { label, body } = context.propsValue;
    const requestBody: Record<string, unknown> = { label, ...(body as Record<string, unknown> ?? {}) };
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/recruitment/jobpositions', body: requestBody });
  },
});
