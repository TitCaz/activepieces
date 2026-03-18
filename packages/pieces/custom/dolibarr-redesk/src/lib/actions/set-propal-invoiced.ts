import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setPropalInvoiced = createAction({
  auth: dolibarrAuth,
  name: 'set_propal_invoiced',
  displayName: 'Devis — Marquer comme facturé',
  description: 'Marque un devis comme facturé.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/proposals/${context.propsValue.id}/setinvoiced`,
    });
  },
});
