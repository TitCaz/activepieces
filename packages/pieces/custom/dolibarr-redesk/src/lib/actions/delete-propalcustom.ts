import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deletePropalcustom = createAction({
  auth: dolibarrAuth,
  name: 'delete_propalcustom',
  displayName: 'Supprimer un devis PropalCustom',
  description: 'Supprime un devis PropalCustom (Redesk).',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/propalscustom/${context.propsValue.id}` });
  },
});
