import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteDocument = createAction({
  auth: dolibarrAuth,
  name: 'delete_document',
  displayName: 'Supprimer un document',
  description: 'Supprime un document par son chemin et module.',
  props: {
    modulepart: Property.ShortText({ displayName: 'Module (ex: invoice, order)', required: true }),
    original_file: Property.ShortText({ displayName: 'Chemin du fichier', required: true }),
  },
  async run(context) {
    const { modulepart, original_file } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: '/documents',
      queryParams: { modulepart, original_file },
    });
  },
});
