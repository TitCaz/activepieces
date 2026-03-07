import { createDolibarrTrigger } from '../common/webhooks';

export const productDeleted = createDolibarrTrigger({
  name: 'product_deleted',
  displayName: 'Produit supprimé',
  description: 'Se déclenche lorsqu\'un produit ou service est supprimé dans Dolibarr.',
  triggerType: 'PRODUCT_DELETE',
  sampleData: { id: '5', ref: 'PROD-0001', label: 'Bureau standing' },
});
