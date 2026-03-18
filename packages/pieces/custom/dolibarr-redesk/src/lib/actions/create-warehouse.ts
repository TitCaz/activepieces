import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createWarehouse = createAction({
  auth: dolibarrAuth,
  name: 'create_warehouse',
  displayName: 'Créer un entrepôt',
  description: 'Crée un nouvel entrepôt dans Dolibarr.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    description: Property.LongText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { label, description } = context.propsValue;
    const body: Record<string, unknown> = { label };
    if (description) body['description'] = description;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/warehouses', body });
  },
});
