import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateExpenseReport = createAction({
  auth: dolibarrAuth,
  name: 'update_expense_report',
  displayName: 'Mettre à jour une note de frais',
  description: 'Met à jour une note de frais existante.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/expensereports/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
