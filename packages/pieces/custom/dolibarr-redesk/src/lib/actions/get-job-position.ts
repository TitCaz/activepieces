import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getJobPosition = createAction({
  auth: dolibarrAuth,
  name: 'get_job_position',
  displayName: 'Récupérer un poste de recrutement',
  description: "Récupère les détails d'un poste de recrutement par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/recruitment/jobpositions/${context.propsValue.id}` });
  },
});
