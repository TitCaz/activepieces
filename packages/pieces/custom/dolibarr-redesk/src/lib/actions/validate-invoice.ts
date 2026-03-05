import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateInvoice = createAction({
  auth: dolibarrAuth,
  name: 'validate_invoice',
  displayName: 'Valider une facture',
  description: 'Valide une facture en brouillon (passage en statut "Validé").',
  props: {
    id: Property.ShortText({
      displayName: 'ID de la facture',
      required: true,
    }),
    idwarehouse: Property.ShortText({
      displayName: 'ID entrepôt',
      description: 'Optionnel. ID de l\'entrepôt pour déstockage.',
      required: false,
    }),
  },
  async run(context) {
    const body: Record<string, unknown> = {};
    if (context.propsValue.idwarehouse) {
      body['idwarehouse'] = Number(context.propsValue.idwarehouse);
    }

    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${context.propsValue.id}/validate`,
      body,
    });
  },
});
