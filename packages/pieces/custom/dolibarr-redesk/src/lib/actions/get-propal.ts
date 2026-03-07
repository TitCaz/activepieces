import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPropal = createAction({
  auth: dolibarrAuth,
  name: 'get_propal',
  displayName: 'Obtenir un devis',
  description: 'Récupère les détails d\'un devis par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID du devis', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/proposals/${context.propsValue.id}` });
  },
});
