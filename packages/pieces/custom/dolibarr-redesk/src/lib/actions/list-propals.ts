import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listPropals = createAction({
  auth: dolibarrAuth,
  name: 'list_propals',
  displayName: 'Lister les devis',
  description: 'Récupère la liste des devis dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers (optionnel)', required: false }),
    limit: Property.Number({ displayName: 'Limite', required: false, defaultValue: 100 }),
  },
  async run(context) {
    const queryParams: Record<string, string> = { limit: String(context.propsValue.limit ?? 100) };
    if (context.propsValue.socid) queryParams['thirdparty_ids'] = context.propsValue.socid;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/proposals', queryParams });
  },
});
