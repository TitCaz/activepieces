import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteReception = createAction({
  auth: dolibarrAuth,
  name: 'delete_reception',
  displayName: 'Supprimer une réception',
  description: 'Supprime une réception par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/receptions/${context.propsValue.id}` });
  },
});
