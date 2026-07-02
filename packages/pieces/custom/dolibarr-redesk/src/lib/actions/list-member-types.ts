import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listMemberTypes = createAction({
  auth: dolibarrAuth,
  name: 'list_member_types',
  displayName: "Lister les types d'adhérents",
  description: "Récupère la liste des types d'adhérents.",
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
      endpoint: '/memberstypes',
      queryParams: { limit: String(limit ?? 50), page: String(page ?? 0), sortfield: sortfield ?? 't.rowid', sortorder: sortorder ?? 'DESC', ...(sqlfilters ? { sqlfilters } : {}) },
    });
  },
});
