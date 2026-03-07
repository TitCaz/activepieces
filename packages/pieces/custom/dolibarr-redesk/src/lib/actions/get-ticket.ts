import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getTicket = createAction({
  auth: dolibarrAuth,
  name: 'get_ticket',
  displayName: 'Obtenir un ticket',
  description: 'Récupère les détails d\'un ticket par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID du ticket', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/tickets/${context.propsValue.id}` });
  },
});
