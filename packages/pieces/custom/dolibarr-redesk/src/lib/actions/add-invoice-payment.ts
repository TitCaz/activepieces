import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addInvoicePayment = createAction({
  auth: dolibarrAuth,
  name: 'add_invoice_payment',
  displayName: 'Facture — Ajouter un paiement',
  description: 'Ajoute un paiement à une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    datepaye: Property.ShortText({ displayName: 'Date de paiement (timestamp)', required: true }),
    paymentid: Property.ShortText({ displayName: 'ID mode de paiement', required: true }),
    closepaidinvoices: Property.ShortText({ displayName: 'Clôturer factures payées (yes/no)', required: true }),
    accountid: Property.ShortText({ displayName: 'ID compte bancaire', required: true }),
    num_payment: Property.ShortText({ displayName: 'Numéro de paiement', required: false }),
  },
  async run(context) {
    const { id, datepaye, paymentid, closepaidinvoices, accountid, num_payment } = context.propsValue;
    const body: Record<string, unknown> = { datepaye, paymentid, closepaidinvoices, accountid };
    if (num_payment) body['num_payment'] = num_payment;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${id}/payments`,
      body,
    });
  },
});
