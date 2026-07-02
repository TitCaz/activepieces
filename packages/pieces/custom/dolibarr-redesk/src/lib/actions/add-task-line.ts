import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addTaskLine = createAction({
  auth: dolibarrAuth,
  name: 'add_task_line',
  displayName: "Ajouter une ligne à une tâche",
  description: "Ajoute une ligne à une tâche existante.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/tasks/${context.propsValue.id}/lines`, body: context.propsValue.body as Record<string, unknown> });
  },
});
