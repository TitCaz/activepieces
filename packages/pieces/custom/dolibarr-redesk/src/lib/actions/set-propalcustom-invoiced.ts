import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setPropalcustomInvoiced = createAction({
  auth: dolibarrAuth,
  name: 'set_propalcustom_invoiced',
  displayName: 'PropalCustom — Marquer comme facturé',
  description: 'Marque un devis PropalCustom comme facturé.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/propalscustom/${context.propsValue.id}/setinvoiced`,
    });
  },
});
