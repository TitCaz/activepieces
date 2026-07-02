import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listSetupCurrencies = createAction({
  auth: dolibarrAuth,
  name: 'list_setup_currencies',
  displayName: 'Lister les devises (dictionnaire)',
  description: 'Récupère la liste des devises du dictionnaire Dolibarr.',
  props: {
    limit: Property.Number({ displayName: 'Nombre de résultats max', required: false, defaultValue: 100 }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/setup/dictionary/currencies',
      queryParams: { limit: String(context.propsValue.limit ?? 100) },
    });
  },
});
