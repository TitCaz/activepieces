import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getThirdPartyByEmail = createAction({
  auth: dolibarrAuth,
  name: 'get_third_party_by_email',
  displayName: 'Tiers — Obtenir par email',
  description: 'Récupère un tiers par son adresse email.',
  props: {
    email: Property.ShortText({ displayName: 'Email', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/thirdparties/email/${context.propsValue.email}`,
    });
  },
});
