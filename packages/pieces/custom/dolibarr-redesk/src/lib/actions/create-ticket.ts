import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createTicket = createAction({
  auth: dolibarrAuth,
  name: 'create_ticket',
  displayName: 'Créer un ticket',
  description: 'Crée un nouveau ticket dans Dolibarr.',
  props: {
    subject: Property.ShortText({ displayName: 'Sujet', required: true }),
    message: Property.LongText({ displayName: 'Message', required: true }),
    socid: Property.ShortText({ displayName: 'ID du tiers (optionnel)', required: false }),
    fk_user_assign: Property.ShortText({ displayName: 'ID utilisateur assigné (optionnel)', required: false }),
    type_code: Property.ShortText({ displayName: 'Code type (optionnel)', description: 'Ex: ISSUE, REQUEST', required: false }),
    category_code: Property.ShortText({ displayName: 'Code catégorie (optionnel)', required: false }),
  },
  async run(context) {
    const { subject, message, socid, fk_user_assign, type_code, category_code } = context.propsValue;
    const body: Record<string, unknown> = { subject, message };
    if (socid) body['socid'] = Number(socid);
    if (fk_user_assign) body['fk_user_assign'] = Number(fk_user_assign);
    if (type_code) body['type_code'] = type_code;
    if (category_code) body['category_code'] = category_code;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/tickets', body });
  },
});
