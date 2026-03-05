import { createDolibarrTrigger } from '../common/webhooks';

export const newInvoice = createDolibarrTrigger({
  name: 'new_invoice',
  displayName: 'Nouvelle facture',
  description: 'Se déclenche instantanément lorsqu\'une nouvelle facture est créée dans Dolibarr.',
  triggerType: 'BILL_CREATE',
  sampleData: {
    id: '42',
    ref: 'FA2024-0042',
    socid: '5',
    total_ttc: '120.00',
    statut: '0',
    date: '1704067200',
  },
});
