import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const activateContractLine = createAction({
  auth: dolibarrAuth,
  name: 'activate_contract_line',
  displayName: 'Contrat — Activer une ligne',
  description: 'Active une ligne de contrat.',
  props: {
    id: Property.ShortText({ displayName: 'ID contrat', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
    datestart: Property.ShortText({ displayName: 'Date de début', required: true }),
    dateend: Property.ShortText({ displayName: 'Date de fin', required: false }),
    comment: Property.ShortText({ displayName: 'Commentaire', required: false }),
  },
  async run(context) {
    const { id, lineid, datestart, dateend, comment } = context.propsValue;
    const body: Record<string, unknown> = { datestart };
    if (dateend) body['dateend'] = dateend;
    if (comment) body['comment'] = comment;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/contracts/${id}/lines/${lineid}/activate`,
      body,
    });
  },
});
