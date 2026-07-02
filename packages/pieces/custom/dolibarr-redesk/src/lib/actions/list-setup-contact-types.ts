import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const listSetupContactTypes = createAction({
  auth: dolibarrAuth,
  name: 'list_setup_contact_types',
  displayName: 'Lister les types de contact (dictionnaire)',
  description: 'Récupère la liste des types de contact du dictionnaire Dolibarr.',
  props: {
    limit: Property.Number({ displayName: 'Nombre de résultats max', required: false, defaultValue: 100 }),
    type: Property.ShortText({ displayName: 'Type', required: false }),
  },
  async run(context) {
    const { limit, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: '/setup/dictionary/contact_types',
      queryParams: { limit: String(limit ?? 100), ...(type ? { type } : {}) },
    });
  },
});
