import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getThirdParty = createAction({
  auth: dolibarrAuth,
  name: 'get_third_party',
  displayName: 'Obtenir un tiers',
  description: 'Récupère les informations d\'un tiers par son ID.',
  props: {
    id: Property.ShortText({
      displayName: 'ID du tiers',
      required: true,
    }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/thirdparties/${context.propsValue.id}`,
    });
  },
});
