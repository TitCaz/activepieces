import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getCandidature = createAction({
  auth: dolibarrAuth,
  name: 'get_candidature',
  displayName: 'Récupérer une candidature',
  description: "Récupère les détails d'une candidature par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/recruitment/candidatures/${context.propsValue.id}` });
  },
});
