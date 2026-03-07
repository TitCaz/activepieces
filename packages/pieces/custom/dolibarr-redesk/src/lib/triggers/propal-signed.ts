import { createDolibarrTrigger } from '../common/webhooks';

export const propalSigned = createDolibarrTrigger({
  name: 'propal_signed',
  displayName: 'Devis standard signé',
  description: 'Se déclenche lorsqu\'un devis standard (Propal) est accepté/signé par le client.',
  triggerType: 'PROPAL_CLOSE_SIGNED',
  sampleData: { id: '17', ref: 'PR2024-0017', socid: '5', total_ttc: '1500.00', statut: '2' },
});
