import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteMemberType = createAction({
  auth: dolibarrAuth,
  name: 'delete_member_type',
  displayName: "Supprimer un type d'adhérent",
  description: "Supprime un type d'adhérent par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/memberstypes/${context.propsValue.id}` });
  },
});
