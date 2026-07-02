import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const buildDocument = createAction({
  auth: dolibarrAuth,
  name: 'build_document',
  displayName: 'Générer un document',
  description: 'Génère un document à partir d\'un modèle.',
  props: {
    modulepart: Property.ShortText({ displayName: 'Module (ex: invoice, order)', required: true }),
    original_file: Property.ShortText({ displayName: 'Fichier original', required: true }),
    doctemplate: Property.ShortText({ displayName: 'Modèle de document', required: false }),
    langcode: Property.ShortText({ displayName: 'Code langue', required: false }),
  },
  async run(context) {
    const { modulepart, original_file, doctemplate, langcode } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/documents/builddoc',
      queryParams: { modulepart, original_file, ...(doctemplate ? { doctemplate } : {}), ...(langcode ? { langcode } : {}) },
    });
  },
});
