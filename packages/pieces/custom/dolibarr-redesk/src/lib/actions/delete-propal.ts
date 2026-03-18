import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePropal = createAction({
  auth: dolibarrAuth,
  name: 'delete_propal',
  displayName: 'Supprimer un devis',
  description: 'Supprime un devis dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/proposals/${context.propsValue.id}`,
    });
  },
});
