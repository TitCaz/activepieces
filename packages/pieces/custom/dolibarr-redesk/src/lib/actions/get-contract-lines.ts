import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getContractLines = createAction({
  auth: dolibarrAuth,
  name: 'get_contract_lines',
  displayName: 'Contrat — Obtenir les lignes',
  description: 'Récupère les lignes d\'un contrat.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/contracts/${context.propsValue.id}/lines`,
    });
  },
});
