import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const linkObjectToCategory = createAction({
  auth: dolibarrAuth,
  name: 'link_object_to_category',
  displayName: 'Catégorie — Lier un objet',
  description: 'Lie un objet à une catégorie.',
  props: {
    id: Property.ShortText({ displayName: 'ID catégorie', required: true }),
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
    object_id: Property.ShortText({ displayName: 'ID objet', required: true }),
  },
  async run(context) {
    const { id, type, object_id } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/categories/${id}/objects/${type}/${object_id}`,
    });
  },
});
