import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createShipment = createAction({
  auth: dolibarrAuth,
  name: 'create_shipment',
  displayName: 'Créer une expédition',
  description: 'Crée une nouvelle expédition dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers', required: true }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', description: "Tableau de lignes d'expédition.", required: false }),
  },
  async run(context) {
    const { socid, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/shipments', body });
  },
});
