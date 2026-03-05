import { createDolibarrTrigger } from '../common/webhooks';

export const orderValidated = createDolibarrTrigger({
  name: 'order_validated',
  displayName: 'Commande validée',
  description: 'Se déclenche instantanément lorsqu\'une commande est confirmée/validée.',
  triggerType: 'ORDER_VALIDATE',
  sampleData: {
    id: '12',
    ref: 'CO2024-0012',
    socid: '5',
    total_ttc: '250.00',
    statut: '1',
    date: '1704067200',
  },
});
