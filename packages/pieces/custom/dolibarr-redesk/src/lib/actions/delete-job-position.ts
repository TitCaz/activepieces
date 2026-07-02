import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteJobPosition = createAction({
  auth: dolibarrAuth,
  name: 'delete_job_position',
  displayName: 'Supprimer un poste de recrutement',
  description: 'Supprime un poste de recrutement par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/recruitment/jobpositions/${context.propsValue.id}` });
  },
});
