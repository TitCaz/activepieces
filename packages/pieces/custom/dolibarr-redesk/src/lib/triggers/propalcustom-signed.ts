import { createDolibarrTrigger } from '../common/webhooks';

export const propalcustomSigned = createDolibarrTrigger({
  name: 'propalcustom_signed',
  displayName: 'Devis signé (PropalCustom)',
  description: 'Se déclenche instantanément lorsqu\'un devis PropalCustom est signé/accepté par le client.',
  triggerType: 'PROPALCUSTOM_CLOSE_SIGNED',
  sampleData: {
    id: '22',
    ref: 'PR2024-0022',
    socid: '5',
    total_ttc: '3500.00',
    status: '2',
    date_signature: '1704067200',
    datep: '1704067200',
  },
});
