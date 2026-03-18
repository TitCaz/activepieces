import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setInvoicePaid = createAction({
  auth: dolibarrAuth,
  name: 'set_invoice_paid',
  displayName: 'Facture — Marquer comme payée',
  description: 'Marque une facture comme payée.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    close_code: Property.ShortText({ displayName: 'Code de clôture (ex: CLOSECODE)', required: false }),
    close_note: Property.ShortText({ displayName: 'Note de clôture', required: false }),
  },
  async run(context) {
    const { id, close_code, close_note } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (close_code) body['close_code'] = close_code;
    if (close_note) body['close_note'] = close_note;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${id}/settopaid`,
      body,
    });
  },
});
