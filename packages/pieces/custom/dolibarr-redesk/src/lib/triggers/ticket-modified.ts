import { createDolibarrTrigger } from '../common/webhooks';

export const ticketModified = createDolibarrTrigger({
  name: 'ticket_modified',
  displayName: 'Ticket modifié',
  description: 'Se déclenche lorsqu\'un ticket est modifié dans Dolibarr.',
  triggerType: 'TICKET_MODIFY',
  sampleData: { id: '9', ref: 'TK2024-0009', socid: '5', subject: 'Problème livraison', statut: '1' },
});
