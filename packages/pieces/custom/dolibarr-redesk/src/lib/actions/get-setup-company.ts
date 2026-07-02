import { createAction } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getSetupCompany = createAction({
  auth: dolibarrAuth,
  name: 'get_setup_company',
  displayName: 'Récupérer les informations société',
  description: 'Récupère les informations de la société Dolibarr.',
  props: {},
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: '/setup/company' });
  },
});
