import { createCustomApiCallAction } from '@activepieces/pieces-common';
import { createPiece } from '@activepieces/pieces-framework';
import { PieceCategory } from '@activepieces/shared';

// Auth
import { dolibarrAuth } from './lib/auth';

// Actions — Tiers
import { createThirdParty } from './lib/actions/create-third-party';
import { getThirdParty } from './lib/actions/get-third-party';
import { updateThirdParty } from './lib/actions/update-third-party';
import { searchThirdParties } from './lib/actions/search-third-parties';

// Actions — Factures
import { createInvoice } from './lib/actions/create-invoice';
import { getInvoice } from './lib/actions/get-invoice';
import { validateInvoice } from './lib/actions/validate-invoice';
import { listInvoices } from './lib/actions/list-invoices';

// Actions — Commandes
import { createOrder } from './lib/actions/create-order';
import { getOrder } from './lib/actions/get-order';
import { listOrders } from './lib/actions/list-orders';

// Actions — Produits
import { getProduct } from './lib/actions/get-product';
import { listProducts } from './lib/actions/list-products';
import { createProduct } from './lib/actions/create-product';

// Triggers — Tiers & Contacts
import { newThirdParty } from './lib/triggers/new-third-party';
import { thirdPartyModified } from './lib/triggers/third-party-modified';
import { newContact } from './lib/triggers/new-contact';
import { contactModified } from './lib/triggers/contact-modified';

// Triggers — Factures
import { newInvoice } from './lib/triggers/new-invoice';
import { invoiceValidated } from './lib/triggers/invoice-validated';
import { invoicePaid } from './lib/triggers/invoice-paid';
import { invoiceCancelled } from './lib/triggers/invoice-cancelled';

// Triggers — Commandes
import { newOrder } from './lib/triggers/new-order';
import { orderValidated } from './lib/triggers/order-validated';
import { orderCancelled } from './lib/triggers/order-cancelled';

// Triggers — Devis PropalCustom (Redesk)
import { newPropalcustom } from './lib/triggers/new-propalcustom';
import { propalcustomValidated } from './lib/triggers/propalcustom-validated';
import { propalcustomSigned } from './lib/triggers/propalcustom-signed';
import { propalcustomRefused } from './lib/triggers/propalcustom-refused';

// Triggers — Devis DMG (Redesk)
import { newDevisdmg } from './lib/triggers/new-devisdmg';
import { devisdmgValidated } from './lib/triggers/devisdmg-validated';
import { devisdmgSigned } from './lib/triggers/devisdmg-signed';

// Triggers — Commande interne DMG (Redesk)
import { newCommandedmg } from './lib/triggers/new-commandedmg';
import { commandedmgValidated } from './lib/triggers/commandedmg-validated';

export const dolibarrRedesk = createPiece({
  displayName: 'Dolibarr',
  description: 'ERP & CRM open-source — gérez vos tiers, factures, commandes et produits.',
  auth: dolibarrAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/dolibarr-redesk.png',
  categories: [PieceCategory.SALES_AND_CRM],
  authors: [],
  actions: [
    // Tiers
    createThirdParty,
    getThirdParty,
    updateThirdParty,
    searchThirdParties,
    // Factures
    createInvoice,
    getInvoice,
    validateInvoice,
    listInvoices,
    // Commandes
    createOrder,
    getOrder,
    listOrders,
    // Produits
    getProduct,
    listProducts,
    createProduct,
    // Appel API personnalisé
    createCustomApiCallAction({
      baseUrl: (auth) => (auth as unknown as { props: { base_url: string } }).props.base_url,
      auth: dolibarrAuth,
      authMapping: async (auth) => ({
        DOLAPIKEY: (auth as unknown as { props: { api_key: string } }).props.api_key,
      }),
    }),
  ],
  triggers: [
    // Tiers & Contacts
    newThirdParty,
    thirdPartyModified,
    newContact,
    contactModified,
    // Factures
    newInvoice,
    invoiceValidated,
    invoicePaid,
    invoiceCancelled,
    // Commandes
    newOrder,
    orderValidated,
    orderCancelled,
    // Devis PropalCustom (Redesk)
    newPropalcustom,
    propalcustomValidated,
    propalcustomSigned,
    propalcustomRefused,
    // Devis DMG (Redesk)
    newDevisdmg,
    devisdmgValidated,
    devisdmgSigned,
    // Commande interne DMG (Redesk)
    newCommandedmg,
    commandedmgValidated,
  ],
});
