import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteBomLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_bom_line',
  displayName: "Supprimer une ligne de nomenclature",
  description: "Supprime une ligne d'une nomenclature.",
  props: {
    id: Property.ShortText({ displayName: 'ID Nomenclature', required: true }),
    lineid: Property.ShortText({ displayName: 'ID Ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/boms/${context.propsValue.id}/lines/${context.propsValue.lineid}` });
  },
});
