import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listCandidatures = createAction({
  auth: dolibarrAuth,
  name: 'list_candidatures',
  displayName: 'Lister les candidatures',
  description: 'Récupère la liste des candidatures.',
  props: {
    limit: Property.Number({ displayName: 'Nombre de résultats max', required: false, defaultValue: 50 }),
    page: Property.Number({ displayName: 'Page (pagination)', required: false, defaultValue: 0 }),
    sortfield: Property.ShortText({ displayName: 'Champ de tri', required: false, defaultValue: 't.rowid' }),
    sortorder: Property.StaticDropdown({ displayName: 'Ordre de tri', required: false, options: { options: [{ label: 'Décroissant', value: 'DESC' }, { label: 'Croissant', value: 'ASC' }] }, defaultValue: 'DESC' }),
    sqlfilters: Property.ShortText({ displayName: 'Filtres SQL', required: false }),
  },
  async run(context) {
    const { limit, page, sortfield, sortorder, sqlfilters } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/recruitment/candidatures',
      queryParams: { limit: String(limit ?? 50), page: String(page ?? 0), sortfield: sortfield ?? 't.rowid', sortorder: sortorder ?? 'DESC', ...(sqlfilters ? { sqlfilters } : {}) },
    });
  },
});
