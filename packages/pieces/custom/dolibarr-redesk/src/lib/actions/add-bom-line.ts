import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addBomLine = createAction({
  auth: dolibarrAuth,
  name: 'add_bom_line',
  displayName: "Ajouter une ligne à une nomenclature",
  description: "Ajoute une ligne de composant à une nomenclature.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    fk_product: Property.ShortText({ displayName: 'ID Produit composant', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
  },
  async run(context) {
    const { id, fk_product, qty } = context.propsValue;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/boms/${id}/lines`, body: { fk_product, qty } });
  },
});
