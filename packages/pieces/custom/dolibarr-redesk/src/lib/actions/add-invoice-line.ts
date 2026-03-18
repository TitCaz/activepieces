import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addInvoiceLine = createAction({
  auth: dolibarrAuth,
  name: 'add_invoice_line',
  displayName: 'Facture — Ajouter une ligne',
  description: 'Ajoute une ligne à une facture.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID produit', required: false }),
    description: Property.ShortText({ displayName: 'Description', required: false }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
    subprice: Property.Number({ displayName: 'Prix unitaire', required: false }),
    tva_tx: Property.Number({ displayName: 'Taux TVA', required: false }),
  },
  async run(context) {
    const { id, fk_product, description, qty, subprice, tva_tx } = context.propsValue;
    const body: Record<string, unknown> = { qty };
    if (fk_product !== undefined && fk_product !== '') body['fk_product'] = fk_product;
    if (description !== undefined && description !== '') body['description'] = description;
    if (subprice !== undefined) body['subprice'] = subprice;
    if (tva_tx !== undefined) body['tva_tx'] = tva_tx;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${id}/lines`,
      body,
    });
  },
});
