import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteProject = createAction({
  auth: dolibarrAuth,
  name: 'delete_project',
  displayName: 'Supprimer un projet',
  description: 'Supprime un projet dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/projects/${context.propsValue.id}`,
    });
  },
});
