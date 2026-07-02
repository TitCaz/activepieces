import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const getBom = createAction({
  auth: dolibarrAuth,
  name: 'get_bom',
  displayName: 'Récupérer une nomenclature (BOM)',
  description: "Récupère les détails d'une nomenclature par son ID.",
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.GET, endpoint: `/boms/${context.propsValue.id}` });
  },
});
