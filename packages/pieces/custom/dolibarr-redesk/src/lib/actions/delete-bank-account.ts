import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteBankAccount = createAction({
  auth: dolibarrAuth,
  name: 'delete_bank_account',
  displayName: 'Compte bancaire — Supprimer',
  description: 'Supprime un compte bancaire.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/bankaccounts/${context.propsValue.id}`,
    });
  },
});
