import { createDolibarrTrigger } from '../common/webhooks';

export const productModified = createDolibarrTrigger({
  name: 'product_modified',
  displayName: 'Produit modifié',
  description: 'Se déclenche lorsqu\'un produit ou service est modifié dans Dolibarr.',
  triggerType: 'PRODUCT_MODIFY',
  sampleData: { id: '5', ref: 'PROD-0001', label: 'Bureau standing', price: '329.00', tva_tx: '20' },
});
