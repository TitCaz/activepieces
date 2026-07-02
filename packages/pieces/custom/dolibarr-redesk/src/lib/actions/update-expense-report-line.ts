import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateExpenseReportLine = createAction({
  auth: dolibarrAuth,
  name: 'update_expense_report_line',
  displayName: "Mettre à jour une ligne de note de frais",
  description: "Met à jour une ligne d'une note de frais.",
  props: {
    id: Property.ShortText({ displayName: 'ID Note de frais', required: true }),
    lineid: Property.ShortText({ displayName: 'ID Ligne', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/expensereports/${context.propsValue.id}/lines/${context.propsValue.lineid}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
