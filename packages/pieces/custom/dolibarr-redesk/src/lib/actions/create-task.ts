import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createTask = createAction({
  auth: dolibarrAuth,
  name: 'create_task',
  displayName: 'Créer une tâche',
  description: 'Crée une nouvelle tâche.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    fk_project: Property.ShortText({ displayName: 'ID Projet', required: true }),
    dateo: Property.ShortText({ displayName: 'Date de début', required: false }),
    datee: Property.ShortText({ displayName: 'Date de fin', required: false }),
    description: Property.LongText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { label, fk_project, dateo, datee, description } = context.propsValue;
    const body: Record<string, unknown> = { label, fk_project };
    if (dateo) body['dateo'] = dateo;
    if (datee) body['datee'] = datee;
    if (description) body['description'] = description;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/tasks', body });
  },
});
