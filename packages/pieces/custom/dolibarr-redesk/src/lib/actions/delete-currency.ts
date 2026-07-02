import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteCurrency = createAction({
  auth: dolibarrAuth,
  name: 'delete_currency',
  displayName: 'Supprimer une devise',
  description: 'Supprime une devise par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/multicurrencies/${context.propsValue.id}` });
  },
});
