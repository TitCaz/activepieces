import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePropalcustomLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_propalcustom_line',
  displayName: 'PropalCustom — Supprimer une ligne',
  description: 'Supprime une ligne d\'un devis PropalCustom.',
  props: {
    id: Property.ShortText({ displayName: 'ID devis', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/propalscustom/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
