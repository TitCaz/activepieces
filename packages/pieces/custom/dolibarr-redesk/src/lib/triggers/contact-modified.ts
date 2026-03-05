import { createDolibarrTrigger } from '../common/webhooks';

export const contactModified = createDolibarrTrigger({
  name: 'contact_modified',
  displayName: 'Contact modifié',
  description: 'Se déclenche instantanément lorsqu\'un contact/adresse est modifié dans Dolibarr.',
  triggerType: 'CONTACT_MODIFY',
  sampleData: {
    id: '15',
    lastname: 'Dupont',
    firstname: 'Jean',
    email: 'jean.dupont@acme.com',
    phone_pro: '0123456789',
    socid: '8',
  },
});
