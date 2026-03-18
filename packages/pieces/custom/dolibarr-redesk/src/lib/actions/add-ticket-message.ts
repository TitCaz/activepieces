import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addTicketMessage = createAction({
  auth: dolibarrAuth,
  name: 'add_ticket_message',
  displayName: 'Ajouter un message à un ticket',
  description: 'Ajoute un nouveau message à un ticket Dolibarr.',
  props: {
    track_id: Property.ShortText({ displayName: 'Identifiant de suivi du ticket', required: true }),
    message: Property.LongText({ displayName: 'Message', required: true }),
    private_message: Property.Checkbox({ displayName: 'Message privé', required: false, defaultValue: false }),
  },
  async run(context) {
    const { track_id, message, private_message } = context.propsValue;
    const body: Record<string, unknown> = { track_id, message };
    if (private_message !== undefined) body['private_message'] = private_message ? 1 : 0;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: '/tickets/newmessage',
      body,
    });
  },
});
