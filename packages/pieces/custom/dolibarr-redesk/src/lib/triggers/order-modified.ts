import { createDolibarrTrigger } from '../common/webhooks';

export const orderModified = createDolibarrTrigger({
  name: 'order_modified',
  displayName: 'Commande modifiée',
  description: 'Se déclenche lorsqu\'une commande client est modifiée dans Dolibarr.',
  triggerType: 'ORDER_MODIFY',
  sampleData: { id: '12', ref: 'CO2024-0012', socid: '5', total_ttc: '250.00', statut: '0' },
});
