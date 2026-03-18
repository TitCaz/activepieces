import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteInvoiceContact = createAction({
  auth: dolibarrAuth,
  name: 'delete_invoice_contact',
  displayName: 'Facture — Supprimer un contact',
  description: 'Supprime un contact d\'une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID facture', required: true }),
    contactid: Property.ShortText({ displayName: 'ID contact', required: true }),
    type: Property.ShortText({ displayName: 'Type', required: true }),
  },
  async run(context) {
    const { id, contactid, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/invoices/${id}/contacts/${contactid}/${type}`,
    });
  },
});
