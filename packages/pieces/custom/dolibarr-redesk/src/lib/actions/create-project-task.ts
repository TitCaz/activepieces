import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createProjectTask = createAction({
  auth: dolibarrAuth,
  name: 'create_project_task',
  displayName: 'Créer une tâche de projet',
  description: 'Ajoute une tâche à un projet dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du projet', required: true }),
    label: Property.ShortText({ displayName: 'Libellé de la tâche', required: true }),
    dateo: Property.ShortText({ displayName: 'Date de début (timestamp)', required: false }),
    datee: Property.ShortText({ displayName: 'Date de fin (timestamp)', required: false }),
    description: Property.LongText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { id, label, dateo, datee, description } = context.propsValue;
    const body: Record<string, unknown> = { label };
    if (dateo) body['date_start'] = dateo;
    if (datee) body['date_end'] = datee;
    if (description) body['description'] = description;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/projects/${id}/lines`,
      body,
    });
  },
});
