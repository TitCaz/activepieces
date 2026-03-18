import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOutstandingOrders = createAction({
  auth: dolibarrAuth,
  name: 'get_outstanding_orders',
  displayName: 'Tiers — Commandes en cours',
  description: 'Récupère les commandes en cours d\'un tiers.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    mode: Property.StaticDropdown({
      displayName: 'Mode',
      required: false,
      options: {
        options: [
          { label: 'Client', value: 'customer' },
          { label: 'Fournisseur', value: 'supplier' },
        ],
      },
    }),
  },
  async run(context) {
    const { id, mode } = context.propsValue;
    const queryParams: Record<string, string> = {};
    if (mode) queryParams['mode'] = mode;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/thirdparties/${id}/outstandingorders`,
      queryParams,
    });
  },
});
