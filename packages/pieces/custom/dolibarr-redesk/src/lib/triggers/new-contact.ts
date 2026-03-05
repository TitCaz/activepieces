import { createDolibarrTrigger } from '../common/webhooks';

export const newContact = createDolibarrTrigger({
  name: 'new_contact',
  displayName: 'Nouveau contact',
  description: 'Se déclenche instantanément lorsqu\'un nouveau contact/adresse est créé dans Dolibarr.',
  triggerType: 'CONTACT_CREATE',
  sampleData: {
    id: '15',
    lastname: 'Dupont',
    firstname: 'Jean',
    email: 'jean.dupont@acme.com',
    phone_pro: '0123456789',
    socid: '8',
  },
});
