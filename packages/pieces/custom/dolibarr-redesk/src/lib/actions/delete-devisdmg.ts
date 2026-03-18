import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteDevisdmg = createAction({
  auth: dolibarrAuth,
  name: 'delete_devisdmg',
  displayName: 'Supprimer un devis DMG',
  description: 'Supprime un devis DMG (Redesk).',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/devisdmgapi/${context.propsValue.id}` });
  },
});
