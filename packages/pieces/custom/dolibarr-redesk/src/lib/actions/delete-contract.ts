import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteContract = createAction({
  auth: dolibarrAuth,
  name: 'delete_contract',
  displayName: 'Supprimer un contrat',
  description: 'Supprime un contrat dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/contracts/${context.propsValue.id}` });
  },
});
