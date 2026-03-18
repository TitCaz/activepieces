import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createBankAccount = createAction({
  auth: dolibarrAuth,
  name: 'create_bank_account',
  displayName: 'Créer un compte bancaire',
  description: 'Crée un nouveau compte bancaire dans Dolibarr.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    number: Property.ShortText({ displayName: 'Numéro de compte', required: false }),
    iban: Property.ShortText({ displayName: 'IBAN', required: false }),
  },
  async run(context) {
    const { label, number, iban } = context.propsValue;
    const body: Record<string, unknown> = { label };
    if (number) body['number'] = number;
    if (iban) body['iban'] = iban;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/bankaccounts', body });
  },
});
