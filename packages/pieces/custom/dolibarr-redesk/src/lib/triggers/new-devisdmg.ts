import { createDolibarrTrigger } from '../common/webhooks';

export const newDevisdmg = createDolibarrTrigger({
  name: 'new_devisdmg',
  displayName: 'Nouveau devis DMG',
  description: 'Se déclenche instantanément lorsqu\'un nouveau devis DevisDMG est créé dans Dolibarr.',
  triggerType: 'DEVISDMG_CREATE',
  sampleData: {
    id: '30',
    ref: 'D_DMG2024-0030',
    socid: '5',
    total_ttc: '1800.00',
    status: '0',
    datep: '1704067200',
  },
});
