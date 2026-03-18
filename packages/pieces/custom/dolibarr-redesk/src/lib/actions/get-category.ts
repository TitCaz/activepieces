import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getCategory = createAction({
  auth: dolibarrAuth,
  name: 'get_category',
  displayName: 'Récupérer une catégorie',
  description: "Récupère les détails d'une catégorie par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/categories/${context.propsValue.id}` });
  },
});
