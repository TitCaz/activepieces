import { PieceAuth, Property } from '@activepieces/pieces-framework';
import { httpClient, HttpMethod } from '@activepieces/pieces-common';

export type DolibarrAuthType = {
  base_url: string;
  api_key: string;
};

export const dolibarrAuth = PieceAuth.CustomAuth({
  description: 'Connexion à votre instance Dolibarr via l\'API REST',
  required: true,
  props: {
    base_url: Property.ShortText({
      displayName: 'URL de base de l\'API',
      description: 'Ex: https://mondomaine.com/api/index.php',
      required: true,
    }),
    api_key: PieceAuth.SecretText({
      displayName: 'Clé API (DOLAPIKEY)',
      description: 'Votre clé API Dolibarr (Accueil > Mes paramètres > Générer une clé API)',
      required: true,
    }),
  },
  validate: async ({ auth }) => {
    try {
      const response = await httpClient.sendRequest({
        method: HttpMethod.GET,
        url: `${auth.base_url}/status`,
        headers: { DOLAPIKEY: auth.api_key },
      });
      return response.status === 200
        ? { valid: true }
        : { valid: false, error: 'Connexion échouée — vérifiez votre URL et clé API.' };
    } catch {
      return { valid: false, error: 'URL ou clé API invalide.' };
    }
  },
});
