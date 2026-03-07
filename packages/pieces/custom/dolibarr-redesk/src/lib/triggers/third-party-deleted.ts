import { createDolibarrTrigger } from '../common/webhooks';

export const thirdPartyDeleted = createDolibarrTrigger({
  name: 'third_party_deleted',
  displayName: 'Tiers supprimé',
  description: 'Se déclenche lorsqu\'un tiers est supprimé dans Dolibarr.',
  triggerType: 'COMPANY_DELETE',
  sampleData: { id: '8', name: 'Acme Corp' },
});
