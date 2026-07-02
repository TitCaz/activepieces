import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateExpenseReport = createAction({
  auth: dolibarrAuth,
  name: 'validate_expense_report',
  displayName: 'Valider une note de frais',
  description: 'Valide une note de frais.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/expensereports/${context.propsValue.id}/validate` });
  },
});
