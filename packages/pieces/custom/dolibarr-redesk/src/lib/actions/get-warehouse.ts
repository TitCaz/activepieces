import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getWarehouse = createAction({
  auth: dolibarrAuth,
  name: 'get_warehouse',
  displayName: 'Récupérer un entrepôt',
  description: "Récupère les détails d'un entrepôt par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/warehouses/${context.propsValue.id}` });
  },
});
