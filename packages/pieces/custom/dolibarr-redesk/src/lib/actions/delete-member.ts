import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteMember = createAction({
  auth: dolibarrAuth,
  name: 'delete_member',
  displayName: 'Supprimer un adhérent',
  description: 'Supprime un adhérent par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/members/${context.propsValue.id}` });
  },
});
