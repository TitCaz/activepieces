import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteContact = createAction({
  auth: dolibarrAuth,
  name: 'delete_contact',
  displayName: 'Contact — Supprimer',
  description: 'Supprime un contact.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/contacts/${context.propsValue.id}`,
    });
  },
});
