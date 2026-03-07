import { createDolibarrTrigger } from '../common/webhooks';

export const invoiceUnvalidated = createDolibarrTrigger({
  name: 'invoice_unvalidated',
  displayName: 'Facture repassée en brouillon',
  description: 'Se déclenche lorsqu\'une facture repasse au statut brouillon dans Dolibarr.',
  triggerType: 'BILL_UNVALIDATE',
  sampleData: { id: '42', ref: 'FA2024-0042', socid: '5', total_ttc: '120.00', statut: '0' },
});
