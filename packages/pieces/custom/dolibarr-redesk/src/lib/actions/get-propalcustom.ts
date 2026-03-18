import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getPropalcustom = createAction({
  auth: dolibarrAuth,
  name: 'get_propalcustom',
  displayName: 'Récupérer un devis PropalCustom',
  description: "Récupère les détails d'un devis PropalCustom (Redesk) par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/propalscustom/${context.propsValue.id}` });
  },
});
