import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getOrder = createAction({
  auth: dolibarrAuth,
  name: 'get_order',
  displayName: 'Obtenir une commande',
  description: 'Récupère les détails d\'une commande par son ID.',
  props: {
    id: Property.ShortText({
      displayName: 'ID de la commande',
      required: true,
    }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/orders/${context.propsValue.id}`,
    });
  },
});
