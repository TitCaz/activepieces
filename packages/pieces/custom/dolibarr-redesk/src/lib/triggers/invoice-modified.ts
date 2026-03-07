import { createDolibarrTrigger } from '../common/webhooks';

export const invoiceModified = createDolibarrTrigger({
  name: 'invoice_modified',
  displayName: 'Facture modifiée',
  description: 'Se déclenche lorsqu\'une facture est modifiée dans Dolibarr.',
  triggerType: 'BILL_MODIFY',
  sampleData: { id: '42', ref: 'FA2024-0042', socid: '5', total_ttc: '120.00', statut: '0' },
});
