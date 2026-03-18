import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteContractLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_contract_line',
  displayName: 'Contrat — Supprimer une ligne',
  description: 'Supprime une ligne d\'un contrat.',
  props: {
    id: Property.ShortText({ displayName: 'ID contrat', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/contracts/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
