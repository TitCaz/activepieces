import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getInvoice = createAction({
  auth: dolibarrAuth,
  name: 'get_invoice',
  displayName: 'Obtenir une facture',
  description: 'Récupère les détails d\'une facture par son ID.',
  props: {
    id: Property.ShortText({
      displayName: 'ID de la facture',
      required: true,
    }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/invoices/${context.propsValue.id}`,
    });
  },
});
