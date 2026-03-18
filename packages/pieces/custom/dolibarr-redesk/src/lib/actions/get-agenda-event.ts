import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getAgendaEvent = createAction({
  auth: dolibarrAuth,
  name: 'get_agenda_event',
  displayName: 'Récupérer un événement agenda',
  description: "Récupère les détails d'un événement agenda par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/agendaevents/${context.propsValue.id}` });
  },
});
