import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getContactByEmail = createAction({
  auth: dolibarrAuth,
  name: 'get_contact_by_email',
  displayName: 'Contact — Obtenir par email',
  description: 'Récupère un contact par son adresse email.',
  props: {
    email: Property.ShortText({ displayName: 'Email', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/contacts/email/${context.propsValue.email}`,
    });
  },
});
