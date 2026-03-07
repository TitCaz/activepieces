import { createDolibarrTrigger } from '../common/webhooks';

export const invoiceDeleted = createDolibarrTrigger({
  name: 'invoice_deleted',
  displayName: 'Facture supprimée',
  description: 'Se déclenche lorsqu\'une facture est supprimée dans Dolibarr.',
  triggerType: 'BILL_DELETE',
  sampleData: { id: '42', ref: 'FA2024-0042', socid: '5' },
});
