import { createDolibarrTrigger } from '../common/webhooks';

export const projectClosed = createDolibarrTrigger({
  name: 'project_closed',
  displayName: 'Projet fermé',
  description: 'Se déclenche lorsqu\'un projet est clôturé dans Dolibarr.',
  triggerType: 'PROJECT_CLOSE',
  sampleData: { id: '6', ref: 'PROJ-2024-0006', title: 'Rénovation bureau', statut: '2' },
});
