import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listSetupEventTypes = createAction({
  auth: dolibarrAuth,
  name: 'list_setup_event_types',
  displayName: "Lister les types d'événement (dictionnaire)",
  description: "Récupère la liste des types d'événement du dictionnaire Dolibarr.",
  props: {
    limit: Property.Number({ displayName: 'Nombre de résultats max', required: false, defaultValue: 100 }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/setup/dictionary/event_types',
      queryParams: { limit: String(context.propsValue.limit ?? 100) },
    });
  },
});
