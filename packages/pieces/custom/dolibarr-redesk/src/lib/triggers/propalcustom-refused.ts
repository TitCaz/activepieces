import { createDolibarrTrigger } from '../common/webhooks';

export const propalcustomRefused = createDolibarrTrigger({
  name: 'propalcustom_refused',
  displayName: 'Devis refusé (PropalCustom)',
  description: 'Se déclenche instantanément lorsqu\'un devis PropalCustom est refusé par le client.',
  triggerType: 'PROPALCUSTOM_CLOSE_REFUSED',
  sampleData: {
    id: '22',
    ref: 'PR2024-0022',
    socid: '5',
    total_ttc: '3500.00',
    status: '3',
    datep: '1704067200',
  },
});
