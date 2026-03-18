import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getContract = createAction({
  auth: dolibarrAuth,
  name: 'get_contract',
  displayName: 'Récupérer un contrat',
  description: "Récupère les détails d'un contrat par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/contracts/${context.propsValue.id}` });
  },
});
