import { createDolibarrTrigger } from '../common/webhooks';

export const projectValidated = createDolibarrTrigger({
  name: 'project_validated',
  displayName: 'Projet validé',
  description: 'Se déclenche lorsqu\'un projet est validé dans Dolibarr.',
  triggerType: 'PROJECT_VALIDATE',
  sampleData: { id: '6', ref: 'PROJ-2024-0006', title: 'Rénovation bureau', statut: '1' },
});
