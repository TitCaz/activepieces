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
    page: Property.Number({ displayName: 'Page (pagination)', required: false, defaultValue: 0 }),
    sortfield: Property.ShortText({ displayName: 'Champ de tri', required: false, defaultValue: 't.rowid' }),
    sortorder: Property.StaticDropdown({ displayName: 'Ordre de tri', required: false, options: { options: [{ label: 'Décroissant', value: 'DESC' }, { label: 'Croissant', value: 'ASC' }] }, defaultValue: 'DESC' }),
    sqlfilters: Property.ShortText({ displayName: 'Filtres SQL', description: "Filtre avancé, ex: (t.ref:like:'FAC%')", required: false }),
  },
  async run(context) {
    const { limit, socid, page, sortfield, sortorder, sqlfilters } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 100),
      page: String(page ?? 0),
      sortfield: sortfield ?? 't.rowid',
      sortorder: sortorder ?? 'DESC',
    };
    if (socid) queryParams['thirdparty_ids'] = socid;
    if (sqlfilters) queryParams['sqlfilters'] = sqlfilters;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/projects', queryParams });
  },
});
