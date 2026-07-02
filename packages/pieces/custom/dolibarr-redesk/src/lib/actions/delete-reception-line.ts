import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteReceptionLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_reception_line',
  displayName: "Supprimer une ligne de réception",
  description: "Supprime une ligne d'une réception.",
  props: {
    id: Property.ShortText({ displayName: 'ID Réception', required: true }),
    lineid: Property.ShortText({ displayName: 'ID Ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/receptions/${context.propsValue.id}/lines/${context.propsValue.lineid}` });
  },
});
