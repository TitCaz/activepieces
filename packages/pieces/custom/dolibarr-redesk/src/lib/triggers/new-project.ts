import { createDolibarrTrigger } from '../common/webhooks';

export const newProject = createDolibarrTrigger({
  name: 'new_project',
  displayName: 'Nouveau projet',
  description: 'Se déclenche lorsqu\'un nouveau projet est créé dans Dolibarr.',
  triggerType: 'PROJECT_CREATE',
  sampleData: { id: '6', ref: 'PROJ-2024-0006', title: 'Rénovation bureau', statut: '0' },
});
