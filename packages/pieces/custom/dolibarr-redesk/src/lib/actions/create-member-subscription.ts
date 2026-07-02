import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createMemberSubscription = createAction({
  auth: dolibarrAuth,
  name: 'create_member_subscription',
  displayName: "Créer une cotisation pour un adhérent",
  description: "Crée une nouvelle cotisation pour un adhérent.",
  props: {
    id: Property.ShortText({ displayName: 'ID Adhérent', required: true }),
    start_date: Property.ShortText({ displayName: 'Date de début', required: true }),
    end_date: Property.ShortText({ displayName: 'Date de fin', required: true }),
    amount: Property.Number({ displayName: 'Montant', required: true }),
    label: Property.ShortText({ displayName: 'Libellé', required: false }),
  },
  async run(context) {
    const { id, start_date, end_date, amount, label } = context.propsValue;
    const body: Record<string, unknown> = { start_date, end_date, amount };
    if (label) body['label'] = label;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/members/${id}/subscriptions`, body });
  },
});
