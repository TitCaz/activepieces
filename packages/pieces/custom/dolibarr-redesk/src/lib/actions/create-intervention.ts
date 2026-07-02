import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createIntervention = createAction({
  auth: dolibarrAuth,
  name: 'create_intervention',
  displayName: "Créer une fiche d'intervention",
  description: "Crée une nouvelle fiche d'intervention.",
  props: {
    socid: Property.ShortText({ displayName: 'ID Tiers', required: true }),
    fk_project: Property.ShortText({ displayName: 'ID Projet', required: false }),
    description: Property.ShortText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { socid, fk_project, description } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (fk_project) body['fk_project'] = fk_project;
    if (description) body['description'] = description;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/interventions', body });
  },
});
