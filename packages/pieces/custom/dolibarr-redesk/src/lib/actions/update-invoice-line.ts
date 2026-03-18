import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateInvoiceLine = createAction({
  auth: dolibarrAuth,
  name: 'update_invoice_line',
  displayName: 'Facture — Modifier une ligne',
  description: 'Modifie une ligne d\'une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID facture', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
    body: Property.Json({ displayName: 'Données', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/invoices/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
      body: context.propsValue.body as Record<string, unknown>,
    });
  },
});
