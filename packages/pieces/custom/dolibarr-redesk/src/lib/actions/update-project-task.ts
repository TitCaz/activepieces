import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateProjectTask = createAction({
  auth: dolibarrAuth,
  name: 'update_project_task',
  displayName: 'Modifier une tâche de projet',
  description: 'Met à jour une tâche dans un projet Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID du projet', required: true }),
    lineid: Property.ShortText({ displayName: 'ID de la tâche', required: true }),
    label: Property.ShortText({ displayName: 'Libellé', required: false }),
    dateo: Property.ShortText({ displayName: 'Date de début (timestamp)', required: false }),
    datee: Property.ShortText({ displayName: 'Date de fin (timestamp)', required: false }),
    progress: Property.Number({ displayName: 'Avancement (%)', required: false }),
  },
  async run(context) {
    const { id, lineid, label, dateo, datee, progress } = context.propsValue;
    const body: Record<string, unknown> = {};
    if (label) body['label'] = label;
    if (dateo) body['date_start'] = dateo;
    if (datee) body['date_end'] = datee;
    if (progress !== undefined) body['progress'] = progress;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.PUT,
      endpoint: `/projects/${id}/lines/${lineid}`,
      body,
    });
  },
});
