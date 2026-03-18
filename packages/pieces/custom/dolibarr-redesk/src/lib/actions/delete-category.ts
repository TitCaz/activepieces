import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteCategory = createAction({
  auth: dolibarrAuth,
  name: 'delete_category',
  displayName: 'Catégorie — Supprimer',
  description: 'Supprime une catégorie.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.DELETE,
      endpoint: `/categories/${context.propsValue.id}`,
    });
  },
});
