import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createInvoiceFromOrder = createAction({
  auth: dolibarrAuth,
  name: 'create_invoice_from_order',
  displayName: 'Facture — Créer depuis une commande',
  description: 'Crée une facture à partir d\'une commande.',
  props: {
    orderid: Property.ShortText({ displayName: 'ID commande', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/createfromorder/${context.propsValue.orderid}`,
    });
  },
});
