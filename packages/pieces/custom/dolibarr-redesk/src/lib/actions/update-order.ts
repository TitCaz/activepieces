import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateOrder = createAction({
  auth: dolibarrAuth,
  name: 'update_order',
  displayName: 'Mettre à jour une commande',
  description: 'Met à jour une commande existante dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID de la commande', required: true }),
    ref_client: Property.ShortText({ displayName: 'Référence client', required: false }),
    note_private: Property.LongText({ displayName: 'Note privée', required: false }),
    note_public: Property.LongText({ displayName: 'Note publique', required: false }),
    date_livraison: Property.ShortText({ displayName: 'Date de livraison (timestamp)', required: false }),
  },
  async run(context) {
    const { id, ref_client, note_private, note_public, date_livraison } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (ref_client) body['ref_client'] = ref_client;
    if (note_private) body['note_private'] = note_private;
    if (note_public) body['note_public'] = note_public;
    if (date_livraison) body['date_livraison'] = Number(date_livraison);
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/orders/${id}`, body });
  },
});
