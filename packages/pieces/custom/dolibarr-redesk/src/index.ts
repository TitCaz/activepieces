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

// Actions — Contacts
import { createContact } from './lib/actions/create-contact';
import { getContact } from './lib/actions/get-contact';
import { updateContact } from './lib/actions/update-contact';
import { listContacts } from './lib/actions/list-contacts';

// Actions — Factures
import { createInvoice } from './lib/actions/create-invoice';
import { getInvoice } from './lib/actions/get-invoice';
import { validateInvoice } from './lib/actions/validate-invoice';
import { updateInvoice } from './lib/actions/update-invoice';
import { listInvoices } from './lib/actions/list-invoices';
import { deleteInvoice } from './lib/actions/delete-invoice';

// Actions — Commandes
import { createOrder } from './lib/actions/create-order';
import { getOrder } from './lib/actions/get-order';
import { updateOrder } from './lib/actions/update-order';
import { validateOrder } from './lib/actions/validate-order';
import { listOrders } from './lib/actions/list-orders';
import { deleteOrder } from './lib/actions/delete-order';

// Actions — Produits
import { getProduct } from './lib/actions/get-product';
import { listProducts } from './lib/actions/list-products';
import { createProduct } from './lib/actions/create-product';
import { updateProduct } from './lib/actions/update-product';
import { deleteProduct } from './lib/actions/delete-product';

// Actions — Devis
import { createPropal } from './lib/actions/create-propal';
import { getPropal } from './lib/actions/get-propal';
import { validatePropal } from './lib/actions/validate-propal';
import { listPropals } from './lib/actions/list-propals';

// Actions — Projets
import { getProject } from './lib/actions/get-project';
import { listProjects } from './lib/actions/list-projects';

// Actions — Tickets
import { createTicket } from './lib/actions/create-ticket';
import { getTicket } from './lib/actions/get-ticket';
import { updateTicket } from './lib/actions/update-ticket';
import { listTickets } from './lib/actions/list-tickets';

// Triggers — Tiers & Contacts
import { newThirdParty } from './lib/triggers/new-third-party';
import { thirdPartyModified } from './lib/triggers/third-party-modified';
import { thirdPartyDeleted } from './lib/triggers/third-party-deleted';
import { newContact } from './lib/triggers/new-contact';
import { contactModified } from './lib/triggers/contact-modified';
import { contactDeleted } from './lib/triggers/contact-deleted';

// Triggers — Factures
import { newInvoice } from './lib/triggers/new-invoice';
import { invoiceValidated } from './lib/triggers/invoice-validated';
import { invoicePaid } from './lib/triggers/invoice-paid';
import { invoiceModified } from './lib/triggers/invoice-modified';
import { invoiceUnvalidated } from './lib/triggers/invoice-unvalidated';
import { invoiceCancelled } from './lib/triggers/invoice-cancelled';
import { invoiceDeleted } from './lib/triggers/invoice-deleted';

// Triggers — Commandes
import { newOrder } from './lib/triggers/new-order';
import { orderValidated } from './lib/triggers/order-validated';
import { orderModified } from './lib/triggers/order-modified';
import { orderDelivered } from './lib/triggers/order-delivered';
import { orderCancelled } from './lib/triggers/order-cancelled';

// Triggers — Produits
import { newProduct } from './lib/triggers/new-product';
import { productModified } from './lib/triggers/product-modified';
import { productDeleted } from './lib/triggers/product-deleted';

// Triggers — Devis standard (Propal)
import { propalValidated } from './lib/triggers/propal-validated';
import { propalSigned } from './lib/triggers/propal-signed';
import { propalRefused } from './lib/triggers/propal-refused';

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

// Triggers — Expéditions
import { shippingValidated } from './lib/triggers/shipping-validated';
import { shippingClosed } from './lib/triggers/shipping-closed';

// Triggers — Tickets
import { newTicket } from './lib/triggers/new-ticket';
import { ticketModified } from './lib/triggers/ticket-modified';
import { ticketAssigned } from './lib/triggers/ticket-assigned';
import { ticketClosed } from './lib/triggers/ticket-closed';

// Triggers — Projets
import { newProject } from './lib/triggers/new-project';
import { projectValidated } from './lib/triggers/project-validated';
import { projectClosed } from './lib/triggers/project-closed';

export const dolibarrRedesk = createPiece({
  displayName: 'Dolibarr',
  description: 'ERP & CRM open-source — gérez vos tiers, factures, commandes et produits.',
  auth: dolibarrAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://dolibarr.redesk.fr/theme/dolibarr.png',
  categories: [PieceCategory.SALES_AND_CRM],
  authors: [],
  actions: [
    // Tiers
    createThirdParty,
    getThirdParty,
    updateThirdParty,
    searchThirdParties,
    // Contacts
    createContact,
    getContact,
    updateContact,
    listContacts,
    // Factures
    createInvoice,
    getInvoice,
    validateInvoice,
    updateInvoice,
    listInvoices,
    deleteInvoice,
    // Commandes
    createOrder,
    getOrder,
    updateOrder,
    validateOrder,
    listOrders,
    deleteOrder,
    // Produits
    createProduct,
    getProduct,
    updateProduct,
    listProducts,
    deleteProduct,
    // Devis
    createPropal,
    getPropal,
    validatePropal,
    listPropals,
    // Projets
    getProject,
    listProjects,
    // Tickets
    createTicket,
    getTicket,
    updateTicket,
    listTickets,
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
    thirdPartyDeleted,
    newContact,
    contactModified,
    contactDeleted,
    // Factures
    newInvoice,
    invoiceValidated,
    invoicePaid,
    invoiceModified,
    invoiceUnvalidated,
    invoiceCancelled,
    invoiceDeleted,
    // Commandes
    newOrder,
    orderValidated,
    orderModified,
    orderDelivered,
    orderCancelled,
    // Produits
    newProduct,
    productModified,
    productDeleted,
    // Devis standard
    propalValidated,
    propalSigned,
    propalRefused,
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
    // Expéditions
    shippingValidated,
    shippingClosed,
    // Tickets
    newTicket,
    ticketModified,
    ticketAssigned,
    ticketClosed,
    // Projets
    newProject,
    projectValidated,
    projectClosed,
  ],
});
