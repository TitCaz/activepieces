import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getInterventionLines = createAction({
  auth: dolibarrAuth,
  name: 'get_intervention_lines',
  displayName: "Récupérer les lignes d'une intervention",
  description: "Récupère les lignes d'une fiche d'intervention par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/interventions/${context.propsValue.id}/lines` });
  },
});
