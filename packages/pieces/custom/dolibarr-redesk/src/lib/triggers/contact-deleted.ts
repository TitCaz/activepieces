import { createDolibarrTrigger } from '../common/webhooks';

export const contactDeleted = createDolibarrTrigger({
  name: 'contact_deleted',
  displayName: 'Contact supprimé',
  description: 'Se déclenche lorsqu\'un contact/adresse est supprimé dans Dolibarr.',
  triggerType: 'CONTACT_DELETE',
  sampleData: { id: '15', lastname: 'Dupont', firstname: 'Jean', socid: '8' },
});
