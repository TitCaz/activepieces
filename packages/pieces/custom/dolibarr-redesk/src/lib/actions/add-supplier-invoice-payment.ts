import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addSupplierInvoicePayment = createAction({
  auth: dolibarrAuth,
  name: 'add_supplier_invoice_payment',
  displayName: 'Facture fournisseur — Ajouter un paiement',
  description: 'Ajoute un paiement à une facture fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    datepaye: Property.ShortText({ displayName: 'Date de paiement', required: true }),
    payment_mode_id: Property.ShortText({ displayName: 'ID mode de paiement', required: true }),
    closepaidinvoices: Property.ShortText({ displayName: 'Clôturer factures payées', required: true }),
    accountid: Property.ShortText({ displayName: 'ID compte bancaire', required: true }),
    num_payment: Property.ShortText({ displayName: 'Numéro de paiement', required: false }),
  },
  async run(context) {
    const { id, datepaye, payment_mode_id, closepaidinvoices, accountid, num_payment } = context.propsValue;
    const body: Record<string, unknown> = { datepaye, payment_mode_id, closepaidinvoices, accountid };
    if (num_payment) body['num_payment'] = num_payment;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/supplierinvoices/${id}/payments`,
      body,
    });
  },
});
