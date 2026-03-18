import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const makeSupplierOrder = createAction({
  auth: dolibarrAuth,
  name: 'make_supplier_order',
  displayName: 'Commande fournisseur — Passer la commande',
  description: 'Passe une commande fournisseur.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    date: Property.ShortText({ displayName: 'Date', required: true }),
    method: Property.ShortText({ displayName: 'Méthode', required: true }),
    comment: Property.ShortText({ displayName: 'Commentaire', required: false }),
  },
  async run(context) {
    const { id, date, method, comment } = context.propsValue;
    const body: Record<string, unknown> = { date, method };
    if (comment) body['comment'] = comment;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/supplierorders/${id}/makeorder`,
      body,
    });
  },
});
