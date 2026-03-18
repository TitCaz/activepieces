import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closePropal = createAction({
  auth: dolibarrAuth,
  name: 'close_propal',
  displayName: 'Clôturer un devis',
  description: 'Clôture un devis (signé ou refusé) dans Dolibarr.',
  props: {
    id: Property.ShortText({ displayName: 'ID', required: true }),
    status: Property.StaticDropdown({
      displayName: 'Statut de clôture',
      required: true,
      options: {
        options: [
          { label: 'Signé', value: '1' },
          { label: 'Refusé', value: '2' },
        ],
      },
    }),
    note_private: Property.LongText({ displayName: 'Note privée', required: false }),
  },
  async run(context) {
    const { id, status, note_private } = context.propsValue;
    const body: Record<string, unknown> = { status: Number(status) };
    if (note_private) body['note_private'] = note_private;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/proposals/${id}/close`,
      body,
    });
  },
});
