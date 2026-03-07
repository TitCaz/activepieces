import { createDolibarrTrigger } from '../common/webhooks';

export const orderDelivered = createDolibarrTrigger({
  name: 'order_delivered',
  displayName: 'Commande livrée',
  description: 'Se déclenche lorsqu\'une commande client est classée livrée dans Dolibarr.',
  triggerType: 'ORDER_CLOSE',
  sampleData: { id: '12', ref: 'CO2024-0012', socid: '5', total_ttc: '250.00', statut: '2' },
});
