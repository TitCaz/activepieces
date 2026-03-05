import { createDolibarrTrigger } from '../common/webhooks';

export const orderCancelled = createDolibarrTrigger({
  name: 'order_cancelled',
  displayName: 'Commande annulée',
  description: 'Se déclenche instantanément lorsqu\'une commande client est annulée dans Dolibarr.',
  triggerType: 'ORDER_CANCEL',
  sampleData: {
    id: '12',
    ref: 'CO2024-0012',
    socid: '5',
    total_ttc: '250.00',
    statut: '-1',
    date: '1704067200',
  },
});
