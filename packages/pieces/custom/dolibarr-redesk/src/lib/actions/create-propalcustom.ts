import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createPropalcustom = createAction({
  auth: dolibarrAuth,
  name: 'create_propalcustom',
  displayName: 'Créer un devis PropalCustom',
  description: 'Crée un nouveau devis PropalCustom (Redesk).',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers', required: true }),
    lines: Property.Json({ displayName: 'Lignes (JSON)', description: 'Tableau de lignes du devis.', required: false }),
  },
  async run(context) {
    const { socid, lines } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (lines) body['lines'] = lines;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/propalscustom', body });
  },
});
