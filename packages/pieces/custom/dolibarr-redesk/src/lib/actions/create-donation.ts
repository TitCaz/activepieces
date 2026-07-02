import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createDonation = createAction({
  auth: dolibarrAuth,
  name: 'create_donation',
  displayName: 'Créer un don',
  description: 'Crée un nouveau don.',
  props: {
    socid: Property.ShortText({ displayName: 'ID Tiers', required: true }),
    amount: Property.Number({ displayName: 'Montant', required: true }),
    fk_payment_type: Property.ShortText({ displayName: 'Type de paiement', required: false }),
  },
  async run(context) {
    const { socid, amount, fk_payment_type } = context.propsValue;
    const body: Record<string, unknown> = { socid, amount };
    if (fk_payment_type) body['fk_payment_type'] = fk_payment_type;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/donations', body });
  },
});
