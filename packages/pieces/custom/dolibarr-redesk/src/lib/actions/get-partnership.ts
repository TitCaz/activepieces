import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPartnership = createAction({
  auth: dolibarrAuth,
  name: 'get_partnership',
  displayName: 'Récupérer un partenariat',
  description: "Récupère les détails d'un partenariat par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/partnerships/${context.propsValue.id}` });
  },
});
