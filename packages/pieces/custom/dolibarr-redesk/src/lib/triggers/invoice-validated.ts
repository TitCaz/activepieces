import { createDolibarrTrigger } from '../common/webhooks';

export const invoiceValidated = createDolibarrTrigger({
  name: 'invoice_validated',
  displayName: 'Facture validée',
  description: 'Se déclenche instantanément lorsqu\'une facture passe en statut "Validé".',
  triggerType: 'BILL_VALIDATE',
  sampleData: {
    id: '42',
    ref: 'FA2024-0042',
    socid: '5',
    total_ttc: '120.00',
    statut: '1',
    date: '1704067200',
  },
});
