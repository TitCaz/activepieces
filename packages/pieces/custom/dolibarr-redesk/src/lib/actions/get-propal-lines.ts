import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPropalLines = createAction({
  auth: dolibarrAuth,
  name: 'get_propal_lines',
  displayName: 'Devis — Obtenir les lignes',
  description: 'Récupère les lignes d\'un devis.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/proposals/${context.propsValue.id}/lines`,
    });
  },
});
