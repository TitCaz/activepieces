import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePropalLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_propal_line',
  displayName: 'Devis — Supprimer une ligne',
  description: 'Supprime une ligne d\'un devis.',
  props: {
    id: Property.ShortText({ displayName: 'ID devis', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/proposals/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
