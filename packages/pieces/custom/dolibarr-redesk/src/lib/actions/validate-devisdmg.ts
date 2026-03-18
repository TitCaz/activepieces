import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const validateDevisdmg = createAction({
  auth: dolibarrAuth,
  name: 'validate_devisdmg',
  displayName: 'Valider un devis DMG',
  description: 'Valide un devis DMG (Redesk).',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: `/devisdmgapi/${context.propsValue.id}/validate` });
  },
});
