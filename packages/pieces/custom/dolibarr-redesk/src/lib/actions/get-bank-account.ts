import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getBankAccount = createAction({
  auth: dolibarrAuth,
  name: 'get_bank_account',
  displayName: 'Récupérer un compte bancaire',
  description: "Récupère les détails d'un compte bancaire par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/bankaccounts/${context.propsValue.id}` });
  },
});
