import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addExpenseReportLine = createAction({
  auth: dolibarrAuth,
  name: 'add_expense_report_line',
  displayName: "Ajouter une ligne à une note de frais",
  description: "Ajoute une ligne à une note de frais existante.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    fk_c_type_fees: Property.ShortText({ displayName: 'Type de frais', required: true }),
    qty: Property.Number({ displayName: 'Quantité', required: true }),
    value_unit: Property.Number({ displayName: 'Valeur unitaire', required: true }),
    date: Property.ShortText({ displayName: 'Date', required: true }),
    fk_projet: Property.ShortText({ displayName: 'ID Projet', required: false }),
  },
  async run(context) {
    const { id, fk_c_type_fees, qty, value_unit, date, fk_projet } = context.propsValue;
    const body: Record<string, unknown> = { fk_c_type_fees, qty, value_unit, date };
    if (fk_projet) body['fk_projet'] = fk_projet;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/expensereports/${id}/lines`, body });
  },
});
