import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getDevisdmg = createAction({
  auth: dolibarrAuth,
  name: 'get_devisdmg',
  displayName: 'Récupérer un devis DMG',
  description: "Récupère les détails d'un devis DMG (Redesk) par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/devisdmgapi/${context.propsValue.id}` });
  },
});
