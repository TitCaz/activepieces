import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listAgendaEvents = createAction({
  auth: dolibarrAuth,
  name: 'list_agenda_events',
  displayName: 'Lister les événements agenda',
  description: 'Récupère la liste des événements agenda dans Dolibarr.',
  props: {
    user_ids: Property.ShortText({ displayName: 'ID utilisateur', required: false }),
    limit: Property.Number({ displayName: 'Nombre de résultats maximum', required: false, defaultValue: 50 }),
    page: Property.Number({ displayName: 'Page (pagination)', required: false, defaultValue: 0 }),
    sortfield: Property.ShortText({ displayName: 'Champ de tri', required: false, defaultValue: 't.rowid' }),
    sortorder: Property.StaticDropdown({ displayName: 'Ordre de tri', required: false, options: { options: [{ label: 'Décroissant', value: 'DESC' }, { label: 'Croissant', value: 'ASC' }] }, defaultValue: 'DESC' }),
    sqlfilters: Property.ShortText({ displayName: 'Filtres SQL', required: false }),
  },
  async run(context) {
    const { user_ids, limit, page, sortfield, sortorder, sqlfilters } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 50),
      page: String(page ?? 0),
      sortfield: sortfield ?? 't.rowid',
      sortorder: sortorder ?? 'DESC',
    };
    if (user_ids) queryParams['user_ids'] = user_ids;
    if (sqlfilters) queryParams['sqlfilters'] = sqlfilters;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/agendaevents', queryParams });
  },
});
