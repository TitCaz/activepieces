import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const searchThirdParties = createAction({
  auth: dolibarrAuth,
  name: 'search_third_parties',
  displayName: 'Rechercher des tiers',
  description: 'Recherche des tiers par nom, email ou filtre SQL.',
  props: {
    search_name: Property.ShortText({
      displayName: 'Nom (contient)',
      required: false,
    }),
    search_email: Property.ShortText({
      displayName: 'Email',
      required: false,
    }),
    limit: Property.Number({
      displayName: 'Nombre de résultats maximum',
      required: false,
      defaultValue: 50,
    }),
  },
  async run(context) {
    const { search_name, search_email, limit } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 50),
      sortfield: 'rowid',
      sortorder: 'DESC',
    };

    const filters: string[] = [];
    if (search_name) filters.push(`(nom:like:${search_name}%)`);
    if (search_email) filters.push(`(email:=:${search_email})`);
    if (filters.length > 0) queryParams['sqlfilters'] = filters.join(' AND ');

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/thirdparties',
      queryParams,
    });
  },
});
