import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addTaskTimespent = createAction({
  auth: dolibarrAuth,
  name: 'add_task_timespent',
  displayName: 'Ajouter du temps passé à une tâche',
  description: 'Enregistre du temps passé sur une tâche.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    date: Property.ShortText({ displayName: 'Date', required: true }),
    duration: Property.Number({ displayName: 'Durée (en secondes)', required: true }),
    user_id: Property.ShortText({ displayName: 'ID Utilisateur', required: false }),
    note: Property.ShortText({ displayName: 'Note', required: false }),
  },
  async run(context) {
    const { id, date, duration, user_id, note } = context.propsValue;
    const body: Record<string, unknown> = { date, duration };
    if (user_id) body['user_id'] = user_id;
    if (note) body['note'] = note;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/tasks/${id}/timespent`, body });
  },
});
