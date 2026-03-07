import { createDolibarrTrigger } from '../common/webhooks';

export const propalValidated = createDolibarrTrigger({
  name: 'propal_validated',
  displayName: 'Devis standard validé',
  description: 'Se déclenche lorsqu\'un devis standard (Propal) est validé dans Dolibarr.',
  triggerType: 'PROPAL_VALIDATE',
  sampleData: { id: '17', ref: 'PR2024-0017', socid: '5', total_ttc: '1500.00', statut: '1' },
});
