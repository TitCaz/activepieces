import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateCurrency = createAction({
  auth: dolibarrAuth,
  name: 'update_currency',
  displayName: 'Mettre à jour une devise',
  description: 'Met à jour une devise existante.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/multicurrencies/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
