import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createReception = createAction({
  auth: dolibarrAuth,
  name: 'create_reception',
  displayName: 'Créer une réception',
  description: 'Crée une nouvelle réception.',
  props: {
    socid: Property.ShortText({ displayName: 'ID Tiers', required: true }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', required: false }),
  },
  async run(context) {
    const { socid, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/receptions', body });
  },
});
