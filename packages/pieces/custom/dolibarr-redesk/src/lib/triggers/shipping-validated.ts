import { createDolibarrTrigger } from '../common/webhooks';

export const shippingValidated = createDolibarrTrigger({
  name: 'shipping_validated',
  displayName: 'Expédition validée',
  description: 'Se déclenche lorsqu\'une expédition est validée dans Dolibarr.',
  triggerType: 'SHIPPING_VALIDATE',
  sampleData: { id: '3', ref: 'EXP2024-0003', socid: '5', statut: '1' },
});
