import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getRo = createAction({
  auth: dolibarrAuth,
  name: 'get_ro',
  displayName: 'Récupérer un RO (reconditionné)',
  description: "Récupère les détails d'un RO par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/ros/${context.propsValue.id}` });
  },
});
