import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getProjectTasks = createAction({
  auth: dolibarrAuth,
  name: 'get_project_tasks',
  displayName: "Récupérer les tâches d'un projet",
  description: "Récupère la liste des tâches (lignes) d'un projet Dolibarr.",
  props: {
    id: Property.ShortText({ displayName: 'ID du projet', required: true }),
    includetimespent: Property.Checkbox({ displayName: 'Inclure le temps passé', required: false, defaultValue: false }),
  },
  async run(context) {
    const { id, includetimespent } = context.propsValue;
    const queryParams: Record<string, string> = {};
    if (includetimespent) queryParams['includetimespent'] = '1';
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/projects/${id}/lines`,
      queryParams,
    });
  },
});
