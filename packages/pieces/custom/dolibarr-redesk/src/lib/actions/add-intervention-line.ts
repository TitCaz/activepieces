import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const addInterventionLine = createAction({
  auth: dolibarrAuth,
  name: 'add_intervention_line',
  displayName: "Ajouter une ligne à une intervention",
  description: "Ajoute une ligne à une fiche d'intervention existante.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    date: Property.ShortText({ displayName: 'Date', required: true }),
    duration: Property.Number({ displayName: 'Durée (en secondes)', required: true }),
    description: Property.ShortText({ displayName: 'Description', required: false }),
  },
  async run(context) {
    const { id, date, duration, description } = context.propsValue;
    const body: Record<string, unknown> = { date, duration };
    if (description) body['description'] = description;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/interventions/${id}/lines`, body });
  },
});
