import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPropalcustomLines = createAction({
  auth: dolibarrAuth,
  name: 'get_propalcustom_lines',
  displayName: 'PropalCustom — Obtenir les lignes',
  description: 'Récupère les lignes d\'un devis PropalCustom.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/propalscustom/${context.propsValue.id}/lines`,
    });
  },
});
