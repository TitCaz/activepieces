import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getBankTransactions = createAction({
  auth: dolibarrAuth,
  name: 'get_bank_transactions',
  displayName: 'Récupérer les transactions bancaires',
  description: "Récupère les lignes de transactions d'un compte bancaire.",
  props: {
    id: Property.ShortText({ displayName: 'ID du compte bancaire', required: true }),
    sqlfilters: Property.ShortText({ displayName: 'Filtres SQL', required: false }),
  },
  async run(context) {
    const { id, sqlfilters } = context.propsValue;
    const queryParams: Record<string, string> = {};
    if (sqlfilters) queryParams['sqlfilters'] = sqlfilters;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/bankaccounts/${id}/lines`, queryParams });
  },
});
