import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteRo = createAction({
  auth: dolibarrAuth,
  name: 'delete_ro',
  displayName: 'Supprimer un RO (reconditionné)',
  description: 'Supprime un RO par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/ros/${context.propsValue.id}` });
  },
});
