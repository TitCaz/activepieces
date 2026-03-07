import { createDolibarrTrigger } from '../common/webhooks';

export const shippingClosed = createDolibarrTrigger({
  name: 'shipping_closed',
  displayName: 'Expédition fermée',
  description: 'Se déclenche lorsqu\'une expédition est clôturée dans Dolibarr.',
  triggerType: 'SHIPPING_CLOSED',
  sampleData: { id: '3', ref: 'EXP2024-0003', socid: '5', statut: '2' },
});
