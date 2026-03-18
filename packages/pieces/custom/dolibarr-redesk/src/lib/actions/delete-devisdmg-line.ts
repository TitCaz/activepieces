import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteDevisdmgLine = createAction({
  auth: dolibarrAuth,
  name: 'delete_devisdmg_line',
  displayName: 'DevisDMG — Supprimer une ligne',
  description: 'Supprime une ligne d\'un devis DMG.',
  props: {
    id: Property.ShortText({ displayName: 'ID devis', required: true }),
    lineid: Property.ShortText({ displayName: 'ID ligne', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/devisdmgapi/${context.propsValue.id}/lines/${context.propsValue.lineid}`,
    });
  },
});
