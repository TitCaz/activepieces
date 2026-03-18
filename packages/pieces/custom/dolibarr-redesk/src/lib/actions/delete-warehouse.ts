import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteWarehouse = createAction({
  auth: dolibarrAuth,
  name: 'delete_warehouse',
  displayName: 'Supprimer un entrepôt',
  description: 'Supprime un entrepôt dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/warehouses/${context.propsValue.id}` });
  },
});
