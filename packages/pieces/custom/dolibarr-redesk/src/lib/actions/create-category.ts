import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createCategory = createAction({
  auth: dolibarrAuth,
  name: 'create_category',
  displayName: 'Créer une catégorie',
  description: 'Crée une nouvelle catégorie dans Dolibarr.',
  props: {
    label: Property.ShortText({ displayName: 'Libellé', required: true }),
    type: Property.StaticDropdown({
      displayName: 'Type de catégorie',
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
    description: Property.LongText({ displayName: 'Description', required: false }),
    fk_parent: Property.ShortText({ displayName: 'ID catégorie parente', required: false }),
  },
  async run(context) {
    const { label, type, description, fk_parent } = context.propsValue;
    const body: Record<string, unknown> = { label, type };
    if (description) body['description'] = description;
    if (fk_parent) body['fk_parent'] = fk_parent;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/categories', body });
  },
});
