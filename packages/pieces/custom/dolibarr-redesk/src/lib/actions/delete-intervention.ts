import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteIntervention = createAction({
  auth: dolibarrAuth,
  name: 'delete_intervention',
  displayName: "Supprimer une fiche d'intervention",
  description: "Supprime une fiche d'intervention par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/interventions/${context.propsValue.id}` });
  },
});
