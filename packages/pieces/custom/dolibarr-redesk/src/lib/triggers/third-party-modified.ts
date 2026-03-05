import { createDolibarrTrigger } from '../common/webhooks';

export const thirdPartyModified = createDolibarrTrigger({
  name: 'third_party_modified',
  displayName: 'Tiers modifié',
  description: 'Se déclenche instantanément lorsqu\'un tiers (client/fournisseur) est modifié dans Dolibarr.',
  triggerType: 'COMPANY_MODIFY',
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
