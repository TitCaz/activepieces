import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createOrderFromProposal = createAction({
  auth: dolibarrAuth,
  name: 'create_order_from_proposal',
  displayName: 'Commande — Créer depuis un devis',
  description: 'Crée une commande à partir d\'un devis.',
  props: {
    proposalid: Property.ShortText({ displayName: 'ID devis', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/createfromproposal/${context.propsValue.proposalid}`,
    });
  },
});
