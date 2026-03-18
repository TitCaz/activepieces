import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getCategoryObjects = createAction({
  auth: dolibarrAuth,
  name: 'get_category_objects',
  displayName: 'Catégorie — Obtenir les objets liés',
  description: 'Récupère les objets liés à une catégorie.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    type: Property.StaticDropdown({
      displayName: 'Type',
      required: true,
      options: {
        options: [
          { label: 'Produit', value: 'product' },
          { label: 'Fournisseur', value: 'supplier' },
          { label: 'Client', value: 'customer' },
          { label: 'Membre', value: 'member' },
          { label: 'Contact', value: 'contact' },
        ],
      },
    }),
  },
  async run(context) {
    const { id, type } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.GET,
      endpoint: `/categories/${id}/objects`,
      queryParams: { type },
    });
  },
});
