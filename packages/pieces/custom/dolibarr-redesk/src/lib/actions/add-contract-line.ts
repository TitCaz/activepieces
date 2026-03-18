import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addContractLine = createAction({
  auth: dolibarrAuth,
  name: 'add_contract_line',
  displayName: 'Contrat — Ajouter une ligne',
  description: 'Ajoute une ligne à un contrat.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID produit', required: false }),
    qty: Property.Number({ displayName: 'Quantité', required: false }),
    description: Property.ShortText({ displayName: 'Description', required: false }),
    subprice: Property.Number({ displayName: 'Prix unitaire', required: false }),
    tva_tx: Property.Number({ displayName: 'Taux TVA', required: false }),
  },
  async run(context) {
    const { id, fk_product, qty, description, subprice, tva_tx } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (fk_product !== undefined && fk_product !== '') body['fk_product'] = fk_product;
    if (qty !== undefined) body['qty'] = qty;
    if (description !== undefined && description !== '') body['description'] = description;
    if (subprice !== undefined) body['subprice'] = subprice;
    if (tva_tx !== undefined) body['tva_tx'] = tva_tx;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/contracts/${id}/lines`,
      body,
    });
  },
});
