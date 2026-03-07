import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteInvoice = createAction({
  auth: dolibarrAuth,
  name: 'delete_invoice',
  displayName: 'Supprimer une facture',
  description: 'Supprime une facture dans Dolibarr (doit être en statut brouillon).',
  props: {
    id: Property.ShortText({ displayName: 'ID de la facture', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/invoices/${context.propsValue.id}` });
  },
});
