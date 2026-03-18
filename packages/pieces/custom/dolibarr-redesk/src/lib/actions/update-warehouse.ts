import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateWarehouse = createAction({
  auth: dolibarrAuth,
  name: 'update_warehouse',
  displayName: 'Modifier un entrepôt',
  description: 'Met à jour un entrepôt existant dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Données à mettre à jour', description: 'Objet JSON avec les champs à modifier.', required: true }),
  },
  async run(context) {
    const { id, body } = context.propsValue;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/warehouses/${id}`, body: body as Record<string, unknown> });
  },
});
