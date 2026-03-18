import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closePropalcustom = createAction({
  auth: dolibarrAuth,
  name: 'close_propalcustom',
  displayName: 'Clôturer un devis PropalCustom',
  description: 'Clôture un devis PropalCustom (Redesk) comme signé ou refusé.',
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
  },
  async run(context) {
    const { id, status } = context.propsValue;
    return dolibarrRequest({
      auth: context.auth.props,
      method: HttpMethod.POST,
      endpoint: `/propalscustom/${id}/close`,
      body: { status: Number(status) },
    });
  },
});
