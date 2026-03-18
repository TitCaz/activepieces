import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOutstandingProposals = createAction({
  auth: dolibarrAuth,
  name: 'get_outstanding_proposals',
  displayName: 'Tiers — Devis en cours',
  description: 'Récupère les devis en cours d\'un tiers.',
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
      endpoint: `/thirdparties/${id}/outstandingproposals`,
      queryParams,
    });
  },
});
