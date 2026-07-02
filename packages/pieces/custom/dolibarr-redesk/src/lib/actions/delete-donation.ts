import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteDonation = createAction({
  auth: dolibarrAuth,
  name: 'delete_donation',
  displayName: 'Supprimer un don',
  description: 'Supprime un don par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/donations/${context.propsValue.id}` });
  },
});
