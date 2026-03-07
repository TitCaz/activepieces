import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateTicket = createAction({
  auth: dolibarrAuth,
  name: 'update_ticket',
  displayName: 'Mettre à jour un ticket',
  description: 'Met à jour un ticket existant dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du ticket', required: true }),
    subject: Property.ShortText({ displayName: 'Sujet', required: false }),
    message: Property.LongText({ displayName: 'Message', required: false }),
    fk_user_assign: Property.ShortText({ displayName: 'ID utilisateur assigné', required: false }),
    resolution: Property.LongText({ displayName: 'Résolution', required: false }),
  },
  async run(context) {
    const { id, subject, message, fk_user_assign, resolution } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (subject) body['subject'] = subject;
    if (message) body['message'] = message;
    if (fk_user_assign) body['fk_user_assign'] = Number(fk_user_assign);
    if (resolution) body['resolution'] = resolution;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/tickets/${id}`, body });
  },
});
