import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const deleteBom = createAction({
  auth: dolibarrAuth,
  name: 'delete_bom',
  displayName: 'Supprimer une nomenclature (BOM)',
  description: 'Supprime une nomenclature par son ID.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
  },
  async run(context) {
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.DELETE, endpoint: `/boms/${context.propsValue.id}` });
  },
});
