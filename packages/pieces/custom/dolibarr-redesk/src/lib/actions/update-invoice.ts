import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateInvoice = createAction({
  auth: dolibarrAuth,
  name: 'update_invoice',
  displayName: 'Mettre à jour une facture',
  description: 'Met à jour une facture existante dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID de la facture', required: true }),
    ref_client: Property.ShortText({ displayName: 'Référence client', required: false }),
    note_private: Property.LongText({ displayName: 'Note privée', required: false }),
    note_public: Property.LongText({ displayName: 'Note publique', required: false }),
  },
  async run(context) {
    const { id, ref_client, note_private, note_public } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (ref_client) body['ref_client'] = ref_client;
    if (note_private) body['note_private'] = note_private;
    if (note_public) body['note_public'] = note_public;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/invoices/${id}`, body });
  },
});
