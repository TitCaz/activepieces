import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createAgendaEvent = createAction({
  auth: dolibarrAuth,
  name: 'create_agenda_event',
  displayName: 'Créer un événement agenda',
  description: "Crée un nouvel événement dans l'agenda Dolibarr.",
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    datep: Property.ShortText({ displayName: 'Date/heure (timestamp)', required: true }),
    actioncode: Property.ShortText({ displayName: 'Code action (ex: AC_TEL)', required: true }),
    socid: Property.ShortText({ displayName: 'ID du tiers', required: false }),
    contact_id: Property.ShortText({ displayName: 'ID du contact', required: false }),
    note: Property.LongText({ displayName: 'Note', required: false }),
  },
  async run(context) {
    const { label, datep, actioncode, socid, contact_id, note } = context.propsValue;
    const body: Record<string, unknown> = { label, datep, actioncode };
    if (socid) body['socid'] = socid;
    if (contact_id) body['contact_id'] = contact_id;
    if (note) body['note'] = note;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/agendaevents', body });
  },
});
