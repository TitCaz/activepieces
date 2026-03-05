import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { dolibarrAuth, DolibarrAuthType } from '../auth';
import { dolibarrRequest } from './client';

const WEBHOOK_ID_KEY = 'dolibarr_webhook_id';

async function registerWebhook({
  auth,
  webhookUrl,
  triggerCodes,
  label,
}: {
  auth: DolibarrAuthType;
  webhookUrl: string;
  triggerCodes: string;
  label: string;
}): Promise<number> {
  // POST /webhook returns the integer ID of the created webhook target.
  return dolibarrRequest<number>({
    auth,
    method: HttpMethod.POST,
    endpoint: '/webhook',
    body: {
      url: webhookUrl,
      trigger_codes: triggerCodes,
      label,
      description: 'Créé automatiquement par Activepieces',
      status: 1,
    },
  });
}

async function unregisterWebhook({
  auth,
  webhookId,
}: {
  auth: DolibarrAuthType;
  webhookId: number;
}): Promise<void> {
  await dolibarrRequest({
    auth,
    method: HttpMethod.DELETE,
    endpoint: `/webhook/${webhookId}`,
  });
}

/**
 * Usine à triggers webhook Dolibarr.
 *
 * Dolibarr envoie un POST sur l'URL Activepieces à chaque événement.
 * Le payload reçu contient : { triggercode, object }
 * (format envoyé par interface_95_modWebhook_WebhookTriggers.class.php)
 *
 * Codes d'événement Dolibarr (module Webhooks, v16+) :
 *   BILL_CREATE, BILL_VALIDATE, BILL_PAYED, BILL_CANCEL, BILL_UNVALIDATE, BILL_DELETE
 *   ORDER_CREATE, ORDER_VALIDATE, ORDER_CLOSE, ORDER_CANCEL, ORDER_CLASSIFY_BILLED, ORDER_DELETE
 *   COMPANY_CREATE, COMPANY_MODIFY, COMPANY_DELETE
 *   CONTACT_CREATE, CONTACT_MODIFY, CONTACT_DELETE
 *   PRODUCT_CREATE, PRODUCT_MODIFY, PRODUCT_DELETE
 *   PROPAL_VALIDATE, PROPAL_CLOSE_SIGNED, PROPAL_CLOSE_REFUSED, PROPAL_DELETE
 *   SHIPPING_CREATE, SHIPPING_VALIDATE, SHIPPING_CLOSED, SHIPPING_CANCEL, SHIPPING_DELETE
 *   TICKET_CREATE, TICKET_MODIFY, TICKET_ASSIGNED, TICKET_CLOSE, TICKET_DELETE
 * Codes personnalisés Redesk :
 *   PROPALCUSTOM_CREATE, PROPALCUSTOM_VALIDATE, PROPALCUSTOM_CLOSE_SIGNED, PROPALCUSTOM_CLOSE_REFUSED, PROPALCUSTOM_DELETE
 *   DEVISDMG_CREATE, DEVISDMG_VALIDATE, DEVISDMG_CLOSE_SIGNED, DEVISDMG_CLOSE_REFUSED, DEVISDMG_DELETE
 *   COMMANDEDMG_CREATE, COMMANDEDMG_VALIDATE, COMMANDEDMG_CLOSE, COMMANDEDMG_CANCEL, COMMANDEDMG_DELETE
 */
export function createDolibarrTrigger({
  name,
  displayName,
  description,
  triggerType,
  sampleData,
}: {
  name: string;
  displayName: string;
  description: string;
  triggerType: string;
  sampleData: unknown;
}) {
  return createTrigger({
    auth: dolibarrAuth,
    name,
    displayName,
    description,
    props: {},
    type: TriggerStrategy.WEBHOOK,
    sampleData,

    async onEnable(context) {
      const webhookId = await registerWebhook({
        auth: context.auth.props,
        webhookUrl: context.webhookUrl,
        triggerCodes: triggerType,
        label: `Activepieces — ${displayName}`,
      });
      await context.store.put<number>(WEBHOOK_ID_KEY, webhookId);
    },

    async onDisable(context) {
      const webhookId = await context.store.get<number>(WEBHOOK_ID_KEY);
      if (webhookId != null) {
        await unregisterWebhook({ auth: context.auth.props, webhookId });
      }
    },

    async run(context) {
      const body = context.payload.body as Record<string, unknown>;
      // Dolibarr enveloppe le payload dans { triggercode, object }
      // On retourne l'objet métier si présent, sinon tout le body
      const payload = body['object'] ?? body;
      return [payload];
    },
  });
}
