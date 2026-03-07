import { createDolibarrTrigger } from '../common/webhooks';

export const ticketAssigned = createDolibarrTrigger({
  name: 'ticket_assigned',
  displayName: 'Ticket assigné',
  description: 'Se déclenche lorsqu\'un ticket est assigné à un utilisateur dans Dolibarr.',
  triggerType: 'TICKET_ASSIGNED',
  sampleData: { id: '9', ref: 'TK2024-0009', socid: '5', subject: 'Problème livraison', statut: '1' },
});
