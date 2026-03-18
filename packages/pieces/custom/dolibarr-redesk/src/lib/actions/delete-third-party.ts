import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteThirdParty = createAction({
  auth: dolibarrAuth,
  name: 'delete_third_party',
  displayName: 'Tiers — Supprimer',
  description: 'Supprime un tiers.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/thirdparties/${context.propsValue.id}`,
    });
  },
});
