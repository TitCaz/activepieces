import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateProject = createAction({
  auth: dolibarrAuth,
  name: 'validate_project',
  displayName: 'Valider un projet',
  description: 'Valide un projet dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/projects/${context.propsValue.id}/validate`,
    });
  },
});
