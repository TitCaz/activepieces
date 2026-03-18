import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const propalToDraft = createAction({
  auth: dolibarrAuth,
  name: 'propal_to_draft',
  displayName: 'Remettre un devis en brouillon',
  description: 'Replace un devis en statut brouillon dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/proposals/${context.propsValue.id}/settodraft`,
    });
  },
});
