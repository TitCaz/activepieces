import { createDolibarrTrigger } from '../common/webhooks';

export const newTicket = createDolibarrTrigger({
  name: 'new_ticket',
  displayName: 'Nouveau ticket',
  description: 'Se déclenche lorsqu\'un nouveau ticket est créé dans Dolibarr.',
  triggerType: 'TICKET_CREATE',
  sampleData: { id: '9', ref: 'TK2024-0009', socid: '5', subject: 'Problème livraison', statut: '1' },
});
