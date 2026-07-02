import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createExpenseReport = createAction({
  auth: dolibarrAuth,
  name: 'create_expense_report',
  displayName: 'Créer une note de frais',
  description: 'Crée une nouvelle note de frais.',
  props: {
    fk_user_author: Property.ShortText({ displayName: 'ID Auteur', required: true }),
    date_debut: Property.ShortText({ displayName: 'Date de début', required: true }),
    date_fin: Property.ShortText({ displayName: 'Date de fin', required: true }),
  },
  async run(context) {
    const { fk_user_author, date_debut, date_fin } = context.propsValue;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/expensereports', body: { fk_user_author, date_debut, date_fin } });
  },
});
