import { createDolibarrTrigger } from '../common/webhooks';

export const newCommandedmg = createDolibarrTrigger({
  name: 'new_commandedmg',
  displayName: 'Nouvelle commande interne (CommandeDMG)',
  description: 'Se déclenche instantanément lorsqu\'une nouvelle commande interne CommandeDMG est créée dans Dolibarr.',
  triggerType: 'COMMANDEDMG_CREATE',
  sampleData: {
    id: '14',
    ref: 'CO_DMG2024-0014',
    socid: '5',
    total_ttc: '2200.00',
    statut: '0',
    date_commande: '1704067200',
  },
});
