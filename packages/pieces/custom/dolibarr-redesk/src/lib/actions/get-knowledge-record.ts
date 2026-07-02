import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getKnowledgeRecord = createAction({
  auth: dolibarrAuth,
  name: 'get_knowledge_record',
  displayName: 'Récupérer un enregistrement de base de connaissances',
  description: "Récupère un enregistrement de la base de connaissances par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/knowledgemanagement/${context.propsValue.id}` });
  },
});
