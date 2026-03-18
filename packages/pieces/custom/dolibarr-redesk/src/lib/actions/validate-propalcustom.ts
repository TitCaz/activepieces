import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validatePropalcustom = createAction({
  auth: dolibarrAuth,
  name: 'validate_propalcustom',
  displayName: 'Valider un devis PropalCustom',
  description: 'Valide un devis PropalCustom (Redesk).',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/propalscustom/${context.propsValue.id}/validate` });
  },
});
