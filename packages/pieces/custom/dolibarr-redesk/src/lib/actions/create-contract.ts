import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const createContract = createAction({
  auth: dolibarrAuth,
  name: 'create_contract',
  displayName: 'Créer un contrat',
  description: 'Crée un nouveau contrat dans Dolibarr.',
  props: {
    socid: Property.ShortText({ displayName: 'ID du tiers', required: true }),
    ref: Property.ShortText({ displayName: 'Référence', required: false }),
    note_private: Property.LongText({ displayName: 'Note privée', required: false }),
    note_public: Property.LongText({ displayName: 'Note publique', required: false }),
  },
  async run(context) {
    const { socid, ref, note_private, note_public } = context.propsValue;
    const body: Record<string, unknown> = { socid };
    if (ref) body['ref'] = ref;
    if (note_private) body['note_private'] = note_private;
    if (note_public) body['note_public'] = note_public;
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/contracts', body });
  },
});
