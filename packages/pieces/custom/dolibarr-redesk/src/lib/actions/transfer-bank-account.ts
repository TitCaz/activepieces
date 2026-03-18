import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const transferBankAccount = createAction({
  auth: dolibarrAuth,
  name: 'transfer_bank_account',
  displayName: 'Compte bancaire — Virement',
  description: 'Effectue un virement entre deux comptes bancaires.',
  props: {
    bankaccount_from_id: Property.ShortText({ displayName: 'ID compte source', required: true }),
    bankaccount_to_id: Property.ShortText({ displayName: 'ID compte destination', required: true }),
    date: Property.ShortText({ displayName: 'Date', required: true }),
    description: Property.ShortText({ displayName: 'Description', required: true }),
    amount: Property.Number({ displayName: 'Montant', required: true }),
  },
  async run(context) {
    const { bankaccount_from_id, bankaccount_to_id, date, description, amount } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/bankaccounts/transfer`,
      body: { bankaccount_from_id, bankaccount_to_id, date, description, amount },
    });
  },
});
