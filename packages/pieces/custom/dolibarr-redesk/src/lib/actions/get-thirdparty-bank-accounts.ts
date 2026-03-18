import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getThirdPartyBankAccounts = createAction({
  auth: dolibarrAuth,
  name: 'get_thirdparty_bank_accounts',
  displayName: 'Tiers — Comptes bancaires',
  description: 'Récupère les comptes bancaires d\'un tiers.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/thirdparties/${context.propsValue.id}/bankaccounts`,
    });
  },
});
