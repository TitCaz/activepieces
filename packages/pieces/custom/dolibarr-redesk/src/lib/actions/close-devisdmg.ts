import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const closeDevisdmg = createAction({
  auth: dolibarrAuth,
  name: 'close_devisdmg',
  displayName: 'Clôturer un devis DMG',
  description: 'Clôture un devis DMG (Redesk) comme signé ou refusé.',
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
      endpoint: `/devisdmgapi/${id}/close`,
      body: { status: Number(status) },
    });
  },
});
