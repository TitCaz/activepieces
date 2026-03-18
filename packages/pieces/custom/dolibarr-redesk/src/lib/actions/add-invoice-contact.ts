import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addInvoiceContact = createAction({
  auth: dolibarrAuth,
  name: 'add_invoice_contact',
  displayName: 'Facture — Ajouter un contact',
  description: 'Ajoute un contact à une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID facture', required: true }),
    fk_socpeople: Property.ShortText({ displayName: 'ID contact (fk_socpeople)', required: true }),
    type_contact: Property.ShortText({ displayName: 'Type de contact', required: true }),
    source: Property.ShortText({ displayName: 'Source', required: true }),
  },
  async run(context) {
    const { id, fk_socpeople, type_contact, source } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${id}/contacts/${fk_socpeople}/${type_contact}/${source}`,
    });
  },
});
