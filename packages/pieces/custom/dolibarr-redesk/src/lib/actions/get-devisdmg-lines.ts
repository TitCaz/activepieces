import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getDevisdmgLines = createAction({
  auth: dolibarrAuth,
  name: 'get_devisdmg_lines',
  displayName: 'DevisDMG — Obtenir les lignes',
  description: 'Récupère les lignes d\'un devis DMG.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/devisdmgapi/${context.propsValue.id}/lines`,
    });
  },
});
