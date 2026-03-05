import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createOrder = createAction({
  auth: dolibarrAuth,
  name: 'create_order',
  displayName: 'Créer une commande',
  description: 'Crée une nouvelle commande client dans Dolibarr.',
  props: {
    socid: Property.ShortText({
      displayName: 'ID du tiers',
      description: 'L\'ID du client pour cette commande.',
      required: true,
    }),
    ref_client: Property.ShortText({
      displayName: 'Référence client',
      required: false,
    }),
    note_private: Property.LongText({
      displayName: 'Note privée',
      required: false,
    }),
    note_public: Property.LongText({
      displayName: 'Note publique',
      required: false,
    }),
    lines: Property.Json({
      displayName: 'Lignes de commande',
      description: 'Tableau JSON des lignes. Ex: [{"fk_product":1,"qty":2,"subprice":100,"tva_tx":20}]',
      required: false,
    }),
  },
  async run(context) {
    const { socid, ref_client, note_private, note_public, lines } = context.propsValue;
    const body: Record<string, unknown> = {
      socid: Number(socid),
    };

    if (ref_client) body['ref_client'] = ref_client;
    if (note_private) body['note_private'] = note_private;
    if (note_public) body['note_public'] = note_public;
    if (lines) body['lines'] = lines;

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: '/orders',
      body,
    });
  },
});
