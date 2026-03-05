import { createDolibarrTrigger } from '../common/webhooks';

export const newOrder = createDolibarrTrigger({
  name: 'new_order',
  displayName: 'Nouvelle commande',
  description: 'Se déclenche instantanément lorsqu\'une nouvelle commande est créée dans Dolibarr.',
  triggerType: 'ORDER_CREATE',
  sampleData: {
    id: '12',
    ref: 'CO2024-0012',
    socid: '5',
    total_ttc: '250.00',
    statut: '0',
    date: '1704067200',
  },
});
