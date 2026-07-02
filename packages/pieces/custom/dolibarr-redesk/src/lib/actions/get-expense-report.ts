import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getExpenseReport = createAction({
  auth: dolibarrAuth,
  name: 'get_expense_report',
  displayName: 'Récupérer une note de frais',
  description: "Récupère les détails d'une note de frais par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/expensereports/${context.propsValue.id}` });
  },
});
