import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listProjects = createAction({
  auth: dolibarrAuth,
  name: 'list_projects',
  displayName: 'Lister les projets',
  description: 'Récupère la liste des projets dans Dolibarr.',
  props: {
    limit: Property.Number({ displayName: 'Limite', defaultValue: 100, required: false }),
    socid: Property.ShortText({ displayName: 'ID du tiers (optionnel)', required: false }),
  },
  async run(context) {
    const { limit, socid } = context.propsValue;
    const queryParams: Record<string, string> = { limit: String(limit ?? 100) };
    if (socid) queryParams['thirdparty_ids'] = socid;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/projects', queryParams });
  },
});
