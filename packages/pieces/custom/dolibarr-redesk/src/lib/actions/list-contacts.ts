import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listContacts = createAction({
  auth: dolibarrAuth,
  name: 'list_contacts',
  displayName: 'Lister les contacts',
  description: 'Récupère la liste des contacts dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers (optionnel)', description: 'Filtrer par tiers', required: false }),
    limit: Property.Number({ displayName: 'Limite', defaultValue: 100, required: false }),
  },
  async run(context) {
    const { socid, limit } = context.propsValue;
    const queryParams: Record<string, string> = { limit: String(limit ?? 100) };
    if (socid) queryParams['thirdparty_ids'] = socid;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/contacts', queryParams });
  },
});
