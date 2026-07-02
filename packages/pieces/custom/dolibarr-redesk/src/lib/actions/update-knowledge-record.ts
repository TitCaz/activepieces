import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const updateKnowledgeRecord = createAction({
  auth: dolibarrAuth,
  name: 'update_knowledge_record',
  displayName: 'Mettre à jour un enregistrement de base de connaissances',
  description: 'Met à jour un enregistrement de la base de connaissances.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    body: Property.Json({ displayName: 'Corps de la requête (JSON)', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.PUT, endpoint: `/knowledgemanagement/${context.propsValue.id}`, body: context.propsValue.body as Record<string, unknown> });
  },
});
