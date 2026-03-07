import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getProject = createAction({
  auth: dolibarrAuth,
  name: 'get_project',
  displayName: 'Obtenir un projet',
  description: 'Récupère les détails d\'un projet par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID du projet', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/projects/${context.propsValue.id}` });
  },
});
