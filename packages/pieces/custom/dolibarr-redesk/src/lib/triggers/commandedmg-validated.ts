import { createDolibarrTrigger } from '../common/webhooks';

export const commandedmgValidated = createDolibarrTrigger({
  name: 'commandedmg_validated',
  displayName: 'Commande interne validée (CommandeDMG)',
  description: 'Se déclenche instantanément lorsqu\'une commande interne CommandeDMG est validée dans Dolibarr.',
  triggerType: 'COMMANDEDMG_VALIDATE',
  sampleData: {
    id: '14',
    ref: 'CO_DMG2024-0014',
    socid: '5',
    total_ttc: '2200.00',
    statut: '1',
    date_commande: '1704067200',
  },
});
