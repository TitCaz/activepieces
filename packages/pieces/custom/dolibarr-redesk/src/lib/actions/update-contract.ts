import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateContract = createAction({
  auth: dolibarrAuth,
  name: 'update_contract',
  displayName: 'Modifier un contrat',
  description: 'Met à jour un contrat existant dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Données à mettre à jour', description: 'Objet JSON avec les champs à modifier.', required: true }),
  },
  async run(context) {
    const { id, body } = context.propsValue;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/contracts/${id}`, body: body as Record<string, unknown> });
  },
});
