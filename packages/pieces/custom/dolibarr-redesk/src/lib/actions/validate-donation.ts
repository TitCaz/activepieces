import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateDonation = createAction({
  auth: dolibarrAuth,
  name: 'validate_donation',
  displayName: 'Valider un don',
  description: 'Valide un don.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/donations/${context.propsValue.id}/validate` });
  },
});
