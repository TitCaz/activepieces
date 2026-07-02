import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePartnership = createAction({
  auth: dolibarrAuth,
  name: 'delete_partnership',
  displayName: 'Supprimer un partenariat',
  description: 'Supprime un partenariat par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/partnerships/${context.propsValue.id}` });
  },
});
