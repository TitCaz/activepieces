import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteExpenseReportLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_expense_report_line',
  displayName: "Supprimer une ligne de note de frais",
  description: "Supprime une ligne d'une note de frais.",
  props: {
    id: Property.ShortText({ displayName: 'ID Note de frais', required: true }),
    lineid: Property.ShortText({ displayName: 'ID Ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/expensereports/${context.propsValue.id}/lines/${context.propsValue.lineid}` });
  },
});
