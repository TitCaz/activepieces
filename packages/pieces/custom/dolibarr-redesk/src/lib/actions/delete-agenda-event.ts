import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteAgendaEvent = createAction({
  auth: dolibarrAuth,
  name: 'delete_agenda_event',
  displayName: 'Supprimer un événement agenda',
  description: 'Supprime un événement agenda dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/agendaevents/${context.propsValue.id}` });
  },
});
