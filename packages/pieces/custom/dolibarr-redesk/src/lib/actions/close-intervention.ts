import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closeIntervention = createAction({
  auth: dolibarrAuth,
  name: 'close_intervention',
  displayName: "Clôturer une fiche d'intervention",
  description: "Clôture une fiche d'intervention.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/interventions/${context.propsValue.id}/close` });
  },
});
