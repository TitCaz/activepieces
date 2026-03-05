import { createDolibarrTrigger } from '../common/webhooks';

export const invoiceCancelled = createDolibarrTrigger({
  name: 'invoice_cancelled',
  displayName: 'Facture annulée',
  description: 'Se déclenche instantanément lorsqu\'une facture est annulée dans Dolibarr.',
  triggerType: 'BILL_CANCEL',
  sampleData: {
    id: '42',
    ref: 'FA2024-0042',
    socid: '5',
    total_ttc: '120.00',
    statut: '-1',
    date: '1704067200',
  },
});
