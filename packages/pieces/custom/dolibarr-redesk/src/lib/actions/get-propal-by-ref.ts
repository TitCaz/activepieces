import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPropalByRef = createAction({
  auth: dolibarrAuth,
  name: 'get_propal_by_ref',
  displayName: 'Devis — Obtenir par référence',
  description: 'Récupère un devis par sa référence.',
  props: {
    ref: Property.ShortText({ displayName: 'Référence', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/proposals/ref/${context.propsValue.ref}`,
    });
  },
});
