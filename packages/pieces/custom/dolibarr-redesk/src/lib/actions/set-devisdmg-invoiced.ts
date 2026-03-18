import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const setDevisdmgInvoiced = createAction({
  auth: dolibarrAuth,
  name: 'set_devisdmg_invoiced',
  displayName: 'DevisDMG — Marquer comme facturé',
  description: 'Marque un devis DMG comme facturé.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/devisdmgapi/${context.propsValue.id}/setinvoiced`,
    });
  },
});
