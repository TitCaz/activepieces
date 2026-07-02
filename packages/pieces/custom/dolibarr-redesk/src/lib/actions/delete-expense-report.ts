import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteExpenseReport = createAction({
  auth: dolibarrAuth,
  name: 'delete_expense_report',
  displayName: 'Supprimer une note de frais',
  description: 'Supprime une note de frais par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/expensereports/${context.propsValue.id}` });
  },
});
