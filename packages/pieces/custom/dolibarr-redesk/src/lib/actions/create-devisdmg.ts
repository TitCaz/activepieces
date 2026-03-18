import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createDevisdmg = createAction({
  auth: dolibarrAuth,
  name: 'create_devisdmg',
  displayName: 'Créer un devis DMG',
  description: 'Crée un nouveau devis DMG (Redesk).',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers', required: true }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', description: 'Tableau de lignes du devis.', required: false }),
  },
  async run(context) {
    const { socid, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/devisdmgapi', body });
  },
});
