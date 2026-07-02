import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth } from '../auth';
import { dolibarrRequest } from '../common/client';

export const uploadDocument = createAction({
  auth: dolibarrAuth,
  name: 'upload_document',
  displayName: 'Téléverser un document',
  description: 'Téléverse un document (base64) vers Dolibarr.',
  props: {
    filename: Property.ShortText({ displayName: 'Nom du fichier', required: true }),
    modulepart: Property.ShortText({ displayName: 'Module (ex: invoice, order)', required: true }),
    ref: Property.ShortText({ displayName: 'Référence de l\'objet', required: true }),
    filecontent: Property.LongText({ displayName: 'Contenu du fichier (base64)', required: true }),
    fileencoding: Property.ShortText({ displayName: 'Encodage du fichier', required: false, defaultValue: 'base64' }),
    overwriteifexists: Property.Number({ displayName: 'Écraser si existant (0=non, 1=oui)', required: false, defaultValue: 0 }),
  },
  async run(context) {
    const { filename, modulepart, ref, filecontent, fileencoding, overwriteifexists } = context.propsValue;
    const body: Record<string, unknown> = { filename, modulepart, ref, filecontent, fileencoding: fileencoding ?? 'base64', overwriteifexists: overwriteifexists ?? 0 };
    return dolibarrRequest({ auth: context.auth.props, method: HttpMethod.POST, endpoint: '/documents/upload', body });
  },
});
