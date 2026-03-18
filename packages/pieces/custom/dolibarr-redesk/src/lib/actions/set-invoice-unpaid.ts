import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setInvoiceUnpaid = createAction({
  auth: dolibarrAuth,
  name: 'set_invoice_unpaid',
  displayName: 'Facture — Marquer comme impayée',
  description: 'Marque une facture comme impayée.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${context.propsValue.id}/settounpaid`,
    });
  },
});
