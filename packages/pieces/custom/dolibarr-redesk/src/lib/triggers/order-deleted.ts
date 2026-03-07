import { createDolibarrTrigger } from '../common/webhooks';

export const orderDeleted = createDolibarrTrigger({
  name: 'order_deleted',
  displayName: 'Commande supprimée',
  description: 'Se déclenche instantanément lorsqu\'une commande client est supprimée dans Dolibarr.',
  triggerType: 'ORDER_DELETE',
  sampleData: { id: '12', ref: 'CO2024-0012', socid: '5' },
});
