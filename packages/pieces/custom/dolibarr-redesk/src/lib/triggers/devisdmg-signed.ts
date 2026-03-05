import { createDolibarrTrigger } from '../common/webhooks';

export const devisdmgSigned = createDolibarrTrigger({
  name: 'devisdmg_signed',
  displayName: 'Devis DMG signé',
  description: 'Se déclenche instantanément lorsqu\'un devis DevisDMG est signé/accepté par le client.',
  triggerType: 'DEVISDMG_CLOSE_SIGNED',
  sampleData: {
    id: '30',
    ref: 'D_DMG2024-0030',
    socid: '5',
    total_ttc: '1800.00',
    status: '2',
    date_signature: '1704067200',
    datep: '1704067200',
  },
});
