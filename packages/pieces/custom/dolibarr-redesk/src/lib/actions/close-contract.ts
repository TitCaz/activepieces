import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closeContract = createAction({
  auth: dolibarrAuth,
  name: 'close_contract',
  displayName: 'Clôturer un contrat',
  description: 'Clôture un contrat dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/contracts/${context.propsValue.id}/close` });
  },
});
