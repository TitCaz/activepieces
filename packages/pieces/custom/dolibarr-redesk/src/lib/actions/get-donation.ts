import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getDonation = createAction({
  auth: dolibarrAuth,
  name: 'get_donation',
  displayName: 'Récupérer un don',
  description: "Récupère les détails d'un don par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/donations/${context.propsValue.id}` });
  },
});
