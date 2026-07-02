import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateBomLine = createAction({
  auth: dolibarrAuth,
  name: 'update_bom_line',
  displayName: "Mettre à jour une ligne de nomenclature",
  description: "Met à jour une ligne d'une nomenclature.",
  props: {
    id: Property.ShortText({ displayName: 'ID Nomenclature', required: true }),
    lineid: Property.ShortText({ displayName: 'ID Ligne', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/boms/${context.propsValue.id}/lines/${context.propsValue.lineid}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
