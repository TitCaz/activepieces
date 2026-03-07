import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validatePropal = createAction({
  auth: dolibarrAuth,
  name: 'validate_propal',
  displayName: 'Valider un devis',
  description: 'Valide un devis client dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du devis', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/proposals/${context.propsValue.id}/validate`,
      body: {},
    });
  },
});
