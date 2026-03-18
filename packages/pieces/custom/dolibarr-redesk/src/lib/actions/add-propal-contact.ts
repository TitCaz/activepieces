import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addPropalContact = createAction({
  auth: dolibarrAuth,
  name: 'add_propal_contact',
  displayName: 'Devis — Ajouter un contact',
  description: 'Ajoute un contact à un devis.',
  props: {
    id: Property.ShortText({ displayName: 'ID devis', required: true }),
    contactid: Property.ShortText({ displayName: 'ID contact', required: true }),
    type: Property.ShortText({ displayName: 'Type', required: true }),
  },
  async run(context) {
    const { id, contactid, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/proposals/${id}/contacts/${contactid}/${type}`,
    });
  },
});
