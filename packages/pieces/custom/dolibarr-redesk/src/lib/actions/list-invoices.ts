import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listInvoices = createAction({
  auth: dolibarrAuth,
  name: 'list_invoices',
  displayName: 'Lister les factures',
  description: 'Récupère la liste des factures avec filtres optionnels.',
  props: {
    status: Property.StaticDropdown({
      displayName: 'Statut',
      required: false,
      options: {
        options: [
          { label: 'Tous', value: '' },
          { label: 'Brouillon', value: '0' },
          { label: 'Validée', value: '1' },
          { label: 'Payée', value: '2' },
          { label: 'Annulée', value: '3' },
        ],
      },
    }),
    socid: Property.ShortText({
      displayName: 'ID tiers (filtrer par client)',
      required: false,
    }),
    limit: Property.Number({
      displayName: 'Nombre de résultats maximum',
      required: false,
      defaultValue: 50,
    }),
  },
  async run(context) {
    const { status, socid, limit } = context.propsValue;
    const queryParams: Record<string, string> = {
      limit: String(limit ?? 50),
      sortfield: 'rowid',
      sortorder: 'DESC',
    };

    if (status) queryParams['status'] = status;
    if (socid) queryParams['thirdparty_ids'] = socid;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/invoices',
      queryParams,
    });
  },
});
