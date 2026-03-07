import { createDolibarrTrigger } from '../common/webhooks';

export const propalRefused = createDolibarrTrigger({
  name: 'propal_refused',
  displayName: 'Devis standard refusé',
  description: 'Se déclenche lorsqu\'un devis standard (Propal) est refusé par le client.',
  triggerType: 'PROPAL_CLOSE_REFUSED',
  sampleData: { id: '17', ref: 'PR2024-0017', socid: '5', total_ttc: '1500.00', statut: '3' },
});
