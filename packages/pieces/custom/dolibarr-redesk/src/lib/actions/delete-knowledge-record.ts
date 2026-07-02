import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteKnowledgeRecord = createAction({
  auth: dolibarrAuth,
  name: 'delete_knowledge_record',
  displayName: 'Supprimer un enregistrement de base de connaissances',
  description: 'Supprime un enregistrement de la base de connaissances par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/knowledgemanagement/${context.propsValue.id}` });
  },
});
