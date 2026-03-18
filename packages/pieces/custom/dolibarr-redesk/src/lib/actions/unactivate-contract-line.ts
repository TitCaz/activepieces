import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const unactivateContractLine = createAction({
  auth: dolibarrAuth,
  name: 'unactivate_contract_line',
  displayName: 'Contrat — Désactiver une ligne',
  description: 'Désactive une ligne de contrat.',
  props: {
    id: Property.ShortText({ displayName: 'ID contrat', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
    datestart: Property.ShortText({ displayName: 'Date de début', required: true }),
    comment: Property.ShortText({ displayName: 'Commentaire', required: false }),
  },
  async run(context) {
    const { id, lineid, datestart, comment } = context.propsValue;
    const body: Record<string, unknown> = { datestart };
    if (comment) body['comment'] = comment;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/contracts/${id}/lines/${lineid}/unactivate`,
      body,
    });
  },
});
