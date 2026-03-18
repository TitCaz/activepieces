import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listProducts = createAction({
  auth: dolibarrAuth,
  name: 'list_products',
  displayName: 'Lister les produits',
  description: 'Récupère la liste des produits et services Dolibarr.',
  props: {
    type: Property.StaticDropdown({
      displayName: 'Type',
      required: false,
      options: {
        options: [
          { label: 'Tous', value: '' },
          { label: 'Produit', value: '0' },
          { label: 'Service', value: '1' },
        ],
      },
    }),
    search_ref: Property.ShortText({
      displayName: 'Référence (contient)',
      required: false,
    }),
    search_label: Property.ShortText({
      displayName: 'Libellé (contient)',
      required: false,
    }),
    limit: Property.Number({
      displayName: 'Nombre de résultats maximum',
      required: false,
      defaultValue: 50,
    }),
    page: Property.Number({ displayName: 'Page (pagination)', required: false, defaultValue: 0 }),
    sortfield: Property.ShortText({ displayName: 'Champ de tri', required: false, defaultValue: 't.rowid' }),
    sortorder: Property.StaticDropdown({ displayName: 'Ordre de tri', required: false, options: { options: [{ label: 'Décroissant', value: 'DESC' }, { label: 'Croissant', value: 'ASC' }] }, defaultValue: 'DESC' }),
    sqlfilters: Property.ShortText({ displayName: 'Filtres SQL', description: "Filtre avancé, ex: (t.ref:like:'FAC%')", required: false }),
  },
  async run(context) {
    const { type, search_ref, search_label, limit, page, sortfield, sortorder, sqlfilters } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 50),
      page: String(page ?? 0),
      sortfield: sortfield ?? 't.rowid',
      sortorder: sortorder ?? 'DESC',
    };

    if (type !== '' && type !== undefined) queryParams['type'] = type;
    if (search_ref) queryParams['sqlfilters'] = `(ref:like:${search_ref}%)`;
    if (search_label) queryParams['sqlfilters'] = `(label:like:${search_label}%)`;
    if (sqlfilters) queryParams['sqlfilters'] = sqlfilters;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/products',
      queryParams,
    });
  },
});
