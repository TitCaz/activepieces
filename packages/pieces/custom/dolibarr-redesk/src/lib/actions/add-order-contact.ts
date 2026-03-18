import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addOrderContact = createAction({
  auth: dolibarrAuth,
  name: 'add_order_contact',
  displayName: 'Commande — Ajouter un contact',
  description: 'Ajoute un contact à une commande.',
  props: {
    id: Property.ShortText({ displayName: 'ID commande', required: true }),
    contactid: Property.ShortText({ displayName: 'ID contact', required: true }),
    type: Property.ShortText({ displayName: 'Type', required: true }),
  },
  async run(context) {
    const { id, contactid, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/orders/${id}/contacts/${contactid}/${type}`,
    });
  },
});
