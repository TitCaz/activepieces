import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateBankAccount = createAction({
  auth: dolibarrAuth,
  name: 'update_bank_account',
  displayName: 'Compte bancaire — Modifier',
  description: 'Modifie un compte bancaire.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Données', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/bankaccounts/${context.propsValue.id}`,
      body: context.propsValue.body as Record<string, unknown>,
    });
  },
});
