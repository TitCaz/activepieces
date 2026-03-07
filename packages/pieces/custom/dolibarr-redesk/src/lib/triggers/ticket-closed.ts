import { createDolibarrTrigger } from '../common/webhooks';

export const ticketClosed = createDolibarrTrigger({
  name: 'ticket_closed',
  displayName: 'Ticket fermé',
  description: 'Se déclenche lorsqu\'un ticket est fermé dans Dolibarr.',
  triggerType: 'TICKET_CLOSE',
  sampleData: { id: '9', ref: 'TK2024-0009', socid: '5', subject: 'Problème livraison', statut: '8' },
});
