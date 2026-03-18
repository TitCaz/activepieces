import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePropalContact = createAction({
  auth: dolibarrAuth,
  name: 'delete_propal_contact',
  displayName: 'Devis — Supprimer un contact',
  description: 'Supprime un contact d\'un devis.',
  props: {
    id: Property.ShortText({ displayName: 'ID devis', required: true }),
    contactid: Property.ShortText({ displayName: 'ID contact', required: true }),
    type: Property.ShortText({ displayName: 'Type', required: true }),
  },
  async run(context) {
    const { id, contactid, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/proposals/${id}/contacts/${contactid}/${type}`,
    });
  },
});
