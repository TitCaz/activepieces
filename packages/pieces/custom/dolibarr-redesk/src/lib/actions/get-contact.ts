import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getContact = createAction({
  auth: dolibarrAuth,
  name: 'get_contact',
  displayName: 'Obtenir un contact',
  description: 'Récupère les détails d\'un contact par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID du contact', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/contacts/${context.propsValue.id}` });
  },
});
