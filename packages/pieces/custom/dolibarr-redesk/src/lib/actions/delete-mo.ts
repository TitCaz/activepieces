import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteMo = createAction({
  auth: dolibarrAuth,
  name: 'delete_mo',
  displayName: "Supprimer un ordre de fabrication",
  description: "Supprime un ordre de fabrication par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/mos/${context.propsValue.id}` });
  },
});
