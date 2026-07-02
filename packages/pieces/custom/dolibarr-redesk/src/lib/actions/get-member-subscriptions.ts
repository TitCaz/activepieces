import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getMemberSubscriptions = createAction({
  auth: dolibarrAuth,
  name: 'get_member_subscriptions',
  displayName: "Récupérer les cotisations d'un adhérent",
  description: "Récupère les cotisations d'un adhérent par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/members/${context.propsValue.id}/subscriptions` });
  },
});
