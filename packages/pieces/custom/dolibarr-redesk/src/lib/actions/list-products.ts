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
  },
  async run(context) {
    const { type, search_ref, search_label, limit } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 50),
      sortfield: 'rowid',
      sortorder: 'DESC',
    };

    if (type !== '' && type !== undefined) queryParams['type'] = type;
    if (search_ref) queryParams['sqlfilters'] = `(ref:like:${search_ref}%)`;
    if (search_label) queryParams['sqlfilters'] = `(label:like:${search_label}%)`;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/products',
      queryParams,
    });
  },
});
