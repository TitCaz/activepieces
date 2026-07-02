import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateReception = createAction({
  auth: dolibarrAuth,
  name: 'validate_reception',
  displayName: 'Valider une réception',
  description: 'Valide une réception.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/receptions/${context.propsValue.id}/validate` });
  },
});
