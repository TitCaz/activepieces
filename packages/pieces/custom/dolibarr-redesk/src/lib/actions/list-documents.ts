import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listDocuments = createAction({
  auth: dolibarrAuth,
  name: 'list_documents',
  displayName: 'Lister les documents',
  description: 'Récupère la liste des documents pour un objet donné.',
  props: {
    modulepart: Property.ShortText({ displayName: 'Module (ex: invoice, order)', required: true }),
    id: Property.ShortText({ displayName: 'ID de l\'objet', required: true }),
  },
  async run(context) {
    const { modulepart, id } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/documents',
      queryParams: { modulepart, id },
    });
  },
});
