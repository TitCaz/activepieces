import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getMo = createAction({
  auth: dolibarrAuth,
  name: 'get_mo',
  displayName: "Récupérer un ordre de fabrication",
  description: "Récupère les détails d'un ordre de fabrication par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/mos/${context.propsValue.id}` });
  },
});
