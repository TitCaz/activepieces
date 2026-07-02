import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteCandidature = createAction({
  auth: dolibarrAuth,
  name: 'delete_candidature',
  displayName: 'Supprimer une candidature',
  description: 'Supprime une candidature par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/recruitment/candidatures/${context.propsValue.id}` });
  },
});
