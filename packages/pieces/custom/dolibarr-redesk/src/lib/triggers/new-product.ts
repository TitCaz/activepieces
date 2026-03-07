import { createDolibarrTrigger } from '../common/webhooks';

export const newProduct = createDolibarrTrigger({
  name: 'new_product',
  displayName: 'Nouveau produit',
  description: 'Se déclenche lorsqu\'un nouveau produit ou service est créé dans Dolibarr.',
  triggerType: 'PRODUCT_CREATE',
  sampleData: { id: '5', ref: 'PROD-0001', label: 'Bureau standing', price: '299.00', tva_tx: '20' },
});
