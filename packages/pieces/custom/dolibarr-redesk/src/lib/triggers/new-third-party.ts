import { createDolibarrTrigger } from '../common/webhooks';

export const newThirdParty = createDolibarrTrigger({
  name: 'new_third_party',
  displayName: 'Nouveau tiers',
  description: 'Se déclenche instantanément lorsqu\'un nouveau tiers (client/fournisseur) est créé dans Dolibarr.',
  triggerType: 'COMPANY_CREATE',
  sampleData: {
    id: '8',
    name: 'Acme Corp',
    email: 'contact@acme.com',
    client: '1',
    fournisseur: '0',
    zip: '75001',
    town: 'Paris',
  },
});
