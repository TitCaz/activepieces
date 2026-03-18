import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const invoiceToDraft = createAction({
  auth: dolibarrAuth,
  name: 'invoice_to_draft',
  displayName: 'Facture — Remettre en brouillon',
  description: 'Remet une facture à l\'état brouillon.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/invoices/${context.propsValue.id}/settodraft`,
    });
  },
});
