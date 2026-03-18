import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteInvoiceLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_invoice_line',
  displayName: 'Facture — Supprimer une ligne',
  description: 'Supprime une ligne d\'une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID facture', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/invoices/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
