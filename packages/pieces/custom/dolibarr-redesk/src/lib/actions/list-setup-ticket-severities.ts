import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listSetupTicketSeverities = createAction({
  auth: dolibarrAuth,
  name: 'list_setup_ticket_severities',
  displayName: 'Lister les sévérités de ticket (dictionnaire)',
  description: 'Récupère la liste des sévérités de ticket du dictionnaire Dolibarr.',
  props: {
    limit: Property.Number({ displayName: 'Nombre de résultats max', required: false, defaultValue: 100 }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/setup/dictionary/ticket_severities',
      queryParams: { limit: String(context.propsValue.limit ?? 100) },
    });
  },
});
