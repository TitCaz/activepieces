import { createDolibarrTrigger } from '../common/webhooks';

export const invoicePaid = createDolibarrTrigger({
  name: 'invoice_paid',
  displayName: 'Facture payée',
  description: 'Se déclenche instantanément lorsqu\'une facture est marquée comme payée.',
  triggerType: 'BILL_PAYED',
  sampleData: {
    id: '42',
    ref: 'FA2024-0042',
    socid: '5',
    total_ttc: '120.00',
    statut: '2',
    date: '1704067200',
  },
});
