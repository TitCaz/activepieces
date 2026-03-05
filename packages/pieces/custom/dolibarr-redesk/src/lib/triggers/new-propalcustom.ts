import { createDolibarrTrigger } from '../common/webhooks';

export const newPropalcustom = createDolibarrTrigger({
  name: 'new_propalcustom',
  displayName: 'Nouveau devis (PropalCustom)',
  description: 'Se déclenche instantanément lorsqu\'un nouveau devis PropalCustom est créé dans Dolibarr.',
  triggerType: 'PROPALCUSTOM_CREATE',
  sampleData: {
    id: '22',
    ref: 'PR2024-0022',
    socid: '5',
    total_ttc: '3500.00',
    status: '0',
    datep: '1704067200',
  },
});
