import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createKnowledgeRecord = createAction({
  auth: dolibarrAuth,
  name: 'create_knowledge_record',
  displayName: 'Créer un enregistrement de base de connaissances',
  description: 'Crée un nouvel enregistrement dans la base de connaissances.',
  props: {
    question: Property.ShortText({ displayName: 'Question', required: true }),
    answer: Property.LongText({ displayName: 'Réponse', required: true }),
    lang: Property.ShortText({ displayName: 'Langue', required: false }),
  },
  async run(context) {
    const { question, answer, lang } = context.propsValue;
    const body: Record<string, unknown> = { question, answer };
    if (lang) body['lang'] = lang;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/knowledgemanagement', body });
  },
});
