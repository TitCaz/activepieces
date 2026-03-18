import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createProject = createAction({
  auth: dolibarrAuth,
  name: 'create_project',
  displayName: 'Créer un projet',
  description: 'Crée un nouveau projet dans Dolibarr.',
  props: {
    ref: Property.ShortText({ displayName: 'Référence', required: true }),
    title: Property.ShortText({ displayName: 'Titre', required: true }),
    socid: Property.ShortText({ displayName: 'ID du tiers', required: false }),
    dateo: Property.ShortText({ displayName: 'Date de début (timestamp)', required: false }),
    datee: Property.ShortText({ displayName: 'Date de fin (timestamp)', required: false }),
    description: Property.LongText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { ref, title, socid, dateo, datee, description } = context.propsValue;
    const body: Record<string, unknown> = { ref, title };
    if (socid) body['socid'] = socid;
    if (dateo) body['date_start'] = dateo;
    if (datee) body['date_end'] = datee;
    if (description) body['description'] = description;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: '/projects',
      body,
    });
  },
});
