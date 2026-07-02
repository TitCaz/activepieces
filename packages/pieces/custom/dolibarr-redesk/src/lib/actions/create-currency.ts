import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createCurrency = createAction({
  auth: dolibarrAuth,
  name: 'create_currency',
  displayName: 'Créer une devise',
  description: 'Crée une nouvelle devise.',
  props: {
    code: Property.ShortText({ displayName: 'Code devise', required: true }),
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
  },
  async run(context) {
    const { code, label } = context.propsValue;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/multicurrencies', body: { code, label } });
  },
});
