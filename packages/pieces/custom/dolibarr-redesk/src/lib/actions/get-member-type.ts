import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getMemberType = createAction({
  auth: dolibarrAuth,
  name: 'get_member_type',
  displayName: "Récupérer un type d'adhérent",
  description: "Récupère les détails d'un type d'adhérent par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/memberstypes/${context.propsValue.id}` });
  },
});
