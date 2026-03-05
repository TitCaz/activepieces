import { createDolibarrTrigger } from '../common/webhooks';

export const propalcustomValidated = createDolibarrTrigger({
  name: 'propalcustom_validated',
  displayName: 'Devis validé (PropalCustom)',
  description: 'Se déclenche instantanément lorsqu\'un devis PropalCustom est validé/envoyé dans Dolibarr.',
  triggerType: 'PROPALCUSTOM_VALIDATE',
  sampleData: {
    id: '22',
    ref: 'PR2024-0022',
    socid: '5',
    total_ttc: '3500.00',
    status: '1',
    datep: '1704067200',
  },
});
