import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateOrder = createAction({
  auth: dolibarrAuth,
  name: 'validate_order',
  displayName: 'Valider une commande',
  description: 'Valide une commande dans Dolibarr (passe du statut brouillon à validé).',
  props: {
    id: Property.ShortText({ displayName: 'ID de la commande', required: true }),
    idwarehouse: Property.ShortText({ displayName: 'ID entrepôt (optionnel)', required: false }),
  },
  async run(context) {
    const { id, idwarehouse } = context.propsValue;
    const body: Record<string, unknown> = { idwarehouse: idwarehouse ? Number(idwarehouse) : 0 };
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/orders/${id}/validate`, body });
  },
});
