import { createDolibarrTrigger } from '../common/webhooks';

export const devisdmgValidated = createDolibarrTrigger({
  name: 'devisdmg_validated',
  displayName: 'Devis DMG validé',
  description: 'Se déclenche instantanément lorsqu\'un devis DevisDMG est validé dans Dolibarr.',
  triggerType: 'DEVISDMG_VALIDATE',
  sampleData: {
    id: '30',
    ref: 'D_DMG2024-0030',
    socid: '5',
    total_ttc: '1800.00',
    status: '1',
    datep: '1704067200',
  },
});
