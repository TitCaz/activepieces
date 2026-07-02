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

// Actions — Devis (Propals)
import { updatePropal } from './lib/actions/update-propal';
import { deletePropal } from './lib/actions/delete-propal';
import { closePropal } from './lib/actions/close-propal';
import { propalToDraft } from './lib/actions/propal-to-draft';

// Actions — Projets (CRUD complet)
import { createProject } from './lib/actions/create-project';
import { updateProject } from './lib/actions/update-project';
import { deleteProject } from './lib/actions/delete-project';
import { validateProject } from './lib/actions/validate-project';
import { getProjectTasks } from './lib/actions/get-project-tasks';
import { createProjectTask } from './lib/actions/create-project-task';
import { updateProjectTask } from './lib/actions/update-project-task';

// Actions — Tickets (CRUD complet)
import { deleteTicket } from './lib/actions/delete-ticket';
import { addTicketMessage } from './lib/actions/add-ticket-message';

// Actions — Expéditions
import { getShipment } from './lib/actions/get-shipment';
import { listShipments } from './lib/actions/list-shipments';
import { createShipment } from './lib/actions/create-shipment';
import { updateShipment } from './lib/actions/update-shipment';
import { validateShipment } from './lib/actions/validate-shipment';
import { closeShipment } from './lib/actions/close-shipment';
import { deleteShipment } from './lib/actions/delete-shipment';

// Actions — Contrats
import { getContract } from './lib/actions/get-contract';
import { listContracts } from './lib/actions/list-contracts';
import { createContract } from './lib/actions/create-contract';
import { updateContract } from './lib/actions/update-contract';
import { validateContract } from './lib/actions/validate-contract';
import { closeContract } from './lib/actions/close-contract';
import { deleteContract } from './lib/actions/delete-contract';

// Actions — Factures fournisseur
import { getSupplierInvoice } from './lib/actions/get-supplier-invoice';
import { listSupplierInvoices } from './lib/actions/list-supplier-invoices';
import { createSupplierInvoice } from './lib/actions/create-supplier-invoice';
import { updateSupplierInvoice } from './lib/actions/update-supplier-invoice';
import { validateSupplierInvoice } from './lib/actions/validate-supplier-invoice';
import { deleteSupplierInvoice } from './lib/actions/delete-supplier-invoice';

// Actions — Commandes fournisseur
import { getSupplierOrder } from './lib/actions/get-supplier-order';
import { listSupplierOrders } from './lib/actions/list-supplier-orders';
import { createSupplierOrder } from './lib/actions/create-supplier-order';
import { updateSupplierOrder } from './lib/actions/update-supplier-order';
import { validateSupplierOrder } from './lib/actions/validate-supplier-order';
import { deleteSupplierOrder } from './lib/actions/delete-supplier-order';

// Actions — Entrepôts
import { getWarehouse } from './lib/actions/get-warehouse';
import { listWarehouses } from './lib/actions/list-warehouses';
import { createWarehouse } from './lib/actions/create-warehouse';
import { updateWarehouse } from './lib/actions/update-warehouse';
import { deleteWarehouse } from './lib/actions/delete-warehouse';

// Actions — Comptes bancaires
import { getBankAccount } from './lib/actions/get-bank-account';
import { listBankAccounts } from './lib/actions/list-bank-accounts';
import { createBankAccount } from './lib/actions/create-bank-account';
import { getBankTransactions } from './lib/actions/get-bank-transactions';

// Actions — Agenda
import { getAgendaEvent } from './lib/actions/get-agenda-event';
import { listAgendaEvents } from './lib/actions/list-agenda-events';
import { createAgendaEvent } from './lib/actions/create-agenda-event';
import { updateAgendaEvent } from './lib/actions/update-agenda-event';
import { deleteAgendaEvent } from './lib/actions/delete-agenda-event';

// Actions — Catégories
import { getCategory } from './lib/actions/get-category';
import { listCategories } from './lib/actions/list-categories';
import { createCategory } from './lib/actions/create-category';
import { updateCategory } from './lib/actions/update-category';

// Actions — Utilisateurs
import { getUser } from './lib/actions/get-user';
import { listUsers } from './lib/actions/list-users';
import { createUser } from './lib/actions/create-user';

// Actions — PropalCustom (Redesk)
import { getPropalcustom } from './lib/actions/get-propalcustom';
import { listPropalcustom } from './lib/actions/list-propalcustom';
import { createPropalcustom } from './lib/actions/create-propalcustom';
import { updatePropalcustom } from './lib/actions/update-propalcustom';
import { deletePropalcustom } from './lib/actions/delete-propalcustom';
import { validatePropalcustom } from './lib/actions/validate-propalcustom';
import { closePropalcustom } from './lib/actions/close-propalcustom';

// Actions — DevisDMG (Redesk)
import { getDevisdmg } from './lib/actions/get-devisdmg';
import { listDevisdmg } from './lib/actions/list-devisdmg';
import { createDevisdmg } from './lib/actions/create-devisdmg';
import { updateDevisdmg } from './lib/actions/update-devisdmg';
import { deleteDevisdmg } from './lib/actions/delete-devisdmg';
import { validateDevisdmg } from './lib/actions/validate-devisdmg';
import { closeDevisdmg } from './lib/actions/close-devisdmg';

// Actions — Commandes (lignes & contacts)
import { getOrderByRef } from './lib/actions/get-order-by-ref';
import { getOrderLines } from './lib/actions/get-order-lines';
import { addOrderLine } from './lib/actions/add-order-line';
import { updateOrderLine } from './lib/actions/update-order-line';
import { deleteOrderLine } from './lib/actions/delete-order-line';
import { getOrderContacts } from './lib/actions/get-order-contacts';
import { addOrderContact } from './lib/actions/add-order-contact';
import { deleteOrderContact } from './lib/actions/delete-order-contact';
import { reopenOrder } from './lib/actions/reopen-order';
import { setOrderInvoiced } from './lib/actions/set-order-invoiced';
import { closeOrder } from './lib/actions/close-order';
import { orderToDraft } from './lib/actions/order-to-draft';
import { createOrderFromProposal } from './lib/actions/create-order-from-proposal';
import { getOrderShipments } from './lib/actions/get-order-shipments';
import { createOrderShipment } from './lib/actions/create-order-shipment';

// Actions — Factures (lignes, paiements & contacts)
import { invoiceToDraft } from './lib/actions/invoice-to-draft';
import { setInvoicePaid } from './lib/actions/set-invoice-paid';
import { setInvoiceUnpaid } from './lib/actions/set-invoice-unpaid';
import { getInvoiceLines } from './lib/actions/get-invoice-lines';
import { addInvoiceLine } from './lib/actions/add-invoice-line';
import { updateInvoiceLine } from './lib/actions/update-invoice-line';
import { deleteInvoiceLine } from './lib/actions/delete-invoice-line';
import { getInvoicePayments } from './lib/actions/get-invoice-payments';
import { addInvoicePayment } from './lib/actions/add-invoice-payment';
import { createInvoiceFromOrder } from './lib/actions/create-invoice-from-order';
import { getInvoiceDiscount } from './lib/actions/get-invoice-discount';
import { addInvoiceContact } from './lib/actions/add-invoice-contact';
import { deleteInvoiceContact } from './lib/actions/delete-invoice-contact';

// Actions — Devis standard (lignes & contacts)
import { getPropalByRef } from './lib/actions/get-propal-by-ref';
import { getPropalLines } from './lib/actions/get-propal-lines';
import { addPropalLine } from './lib/actions/add-propal-line';
import { updatePropalLine } from './lib/actions/update-propal-line';
import { deletePropalLine } from './lib/actions/delete-propal-line';
import { addPropalContact } from './lib/actions/add-propal-contact';
import { deletePropalContact } from './lib/actions/delete-propal-contact';
import { setPropalInvoiced } from './lib/actions/set-propal-invoiced';

// Actions — Tiers (supplémentaires)
import { deleteThirdParty } from './lib/actions/delete-third-party';
import { getThirdPartyByEmail } from './lib/actions/get-third-party-by-email';
import { getOutstandingProposals } from './lib/actions/get-outstanding-proposals';
import { getOutstandingOrders } from './lib/actions/get-outstanding-orders';
import { getOutstandingInvoices } from './lib/actions/get-outstanding-invoices';
import { getThirdPartyBankAccounts } from './lib/actions/get-thirdparty-bank-accounts';

// Actions — Contacts (supplémentaires)
import { deleteContact } from './lib/actions/delete-contact';
import { getContactByEmail } from './lib/actions/get-contact-by-email';

// Actions — Produits (supplémentaires)
import { getProductByRef } from './lib/actions/get-product-by-ref';
import { getProductStock } from './lib/actions/get-product-stock';

// Actions — Expéditions (lignes)
import { getShipmentLines } from './lib/actions/get-shipment-lines';
import { addShipmentLine } from './lib/actions/add-shipment-line';
import { updateShipmentLine } from './lib/actions/update-shipment-line';
import { deleteShipmentLine } from './lib/actions/delete-shipment-line';
import { createShipmentFromOrder } from './lib/actions/create-shipment-from-order';

// Actions — Contrats (lignes)
import { getContractLines } from './lib/actions/get-contract-lines';
import { addContractLine } from './lib/actions/add-contract-line';
import { updateContractLine } from './lib/actions/update-contract-line';
import { deleteContractLine } from './lib/actions/delete-contract-line';
import { activateContractLine } from './lib/actions/activate-contract-line';
import { unactivateContractLine } from './lib/actions/unactivate-contract-line';

// Actions — Factures fournisseur (lignes & paiements)
import { getSupplierInvoiceLines } from './lib/actions/get-supplier-invoice-lines';
import { addSupplierInvoiceLine } from './lib/actions/add-supplier-invoice-line';
import { updateSupplierInvoiceLine } from './lib/actions/update-supplier-invoice-line';
import { deleteSupplierInvoiceLine } from './lib/actions/delete-supplier-invoice-line';
import { getSupplierInvoicePayments } from './lib/actions/get-supplier-invoice-payments';
import { addSupplierInvoicePayment } from './lib/actions/add-supplier-invoice-payment';

// Actions — Commandes fournisseur (statuts)
import { approveSupplierOrder } from './lib/actions/approve-supplier-order';
import { makeSupplierOrder } from './lib/actions/make-supplier-order';

// Actions — Comptes bancaires (supplémentaires)
import { updateBankAccount } from './lib/actions/update-bank-account';
import { deleteBankAccount } from './lib/actions/delete-bank-account';
import { transferBankAccount } from './lib/actions/transfer-bank-account';

// Actions — Catégories (supplémentaires)
import { deleteCategory } from './lib/actions/delete-category';
import { getCategoryObjects } from './lib/actions/get-category-objects';
import { linkObjectToCategory } from './lib/actions/link-object-to-category';
import { unlinkObjectFromCategory } from './lib/actions/unlink-object-from-category';

// Actions — Utilisateurs (supplémentaires)
import { updateUser } from './lib/actions/update-user';
import { deleteUser } from './lib/actions/delete-user';
import { getUserByLogin } from './lib/actions/get-user-by-login';

// Actions — PropalCustom (lignes)
import { getPropalcustomLines } from './lib/actions/get-propalcustom-lines';
import { addPropalcustomLine } from './lib/actions/add-propalcustom-line';
import { updatePropalcustomLine } from './lib/actions/update-propalcustom-line';
import { deletePropalcustomLine } from './lib/actions/delete-propalcustom-line';
import { setPropalcustomInvoiced } from './lib/actions/set-propalcustom-invoiced';

// Actions — DevisDMG (lignes)
import { getDevisdmgLines } from './lib/actions/get-devisdmg-lines';
import { addDevisdmgLine } from './lib/actions/add-devisdmg-line';
import { updateDevisdmgLine } from './lib/actions/update-devisdmg-line';
import { deleteDevisdmgLine } from './lib/actions/delete-devisdmg-line';
import { setDevisdmgInvoiced } from './lib/actions/set-devisdmg-invoiced';

// Actions — Tâches
import { getTask } from './lib/actions/get-task';
import { listTasks } from './lib/actions/list-tasks';
import { createTask } from './lib/actions/create-task';
import { updateTask } from './lib/actions/update-task';
import { deleteTask } from './lib/actions/delete-task';
import { getTaskLines } from './lib/actions/get-task-lines';
import { addTaskLine } from './lib/actions/add-task-line';
import { addTaskTimespent } from './lib/actions/add-task-timespent';

// Actions — Mouvements de stock
import { getStockMovement } from './lib/actions/get-stock-movement';
import { listStockMovements } from './lib/actions/list-stock-movements';
import { createStockMovement } from './lib/actions/create-stock-movement';

// Actions — Notes de frais
import { getExpenseReport } from './lib/actions/get-expense-report';
import { listExpenseReports } from './lib/actions/list-expense-reports';
import { createExpenseReport } from './lib/actions/create-expense-report';
import { updateExpenseReport } from './lib/actions/update-expense-report';
import { deleteExpenseReport } from './lib/actions/delete-expense-report';
import { validateExpenseReport } from './lib/actions/validate-expense-report';
import { getExpenseReportLines } from './lib/actions/get-expense-report-lines';
import { addExpenseReportLine } from './lib/actions/add-expense-report-line';
import { updateExpenseReportLine } from './lib/actions/update-expense-report-line';
import { deleteExpenseReportLine } from './lib/actions/delete-expense-report-line';

// Actions — Adhérents
import { getMember } from './lib/actions/get-member';
import { listMembers } from './lib/actions/list-members';
import { createMember } from './lib/actions/create-member';
import { updateMember } from './lib/actions/update-member';
import { deleteMember } from './lib/actions/delete-member';
import { getMemberSubscriptions } from './lib/actions/get-member-subscriptions';
import { createMemberSubscription } from './lib/actions/create-member-subscription';

// Actions — Types d'adhérents
import { getMemberType } from './lib/actions/get-member-type';
import { listMemberTypes } from './lib/actions/list-member-types';
import { createMemberType } from './lib/actions/create-member-type';
import { updateMemberType } from './lib/actions/update-member-type';
import { deleteMemberType } from './lib/actions/delete-member-type';

// Actions — Cotisations
import { getSubscription } from './lib/actions/get-subscription';
import { listSubscriptions } from './lib/actions/list-subscriptions';
import { createSubscription } from './lib/actions/create-subscription';
import { updateSubscription } from './lib/actions/update-subscription';
import { deleteSubscription } from './lib/actions/delete-subscription';

// Actions — Devis fournisseur
import { getSupplierProposal } from './lib/actions/get-supplier-proposal';
import { listSupplierProposals } from './lib/actions/list-supplier-proposals';

// Actions — Fiches d'intervention
import { getIntervention } from './lib/actions/get-intervention';
import { listInterventions } from './lib/actions/list-interventions';
import { createIntervention } from './lib/actions/create-intervention';
import { deleteIntervention } from './lib/actions/delete-intervention';
import { validateIntervention } from './lib/actions/validate-intervention';
import { closeIntervention } from './lib/actions/close-intervention';
import { getInterventionLines } from './lib/actions/get-intervention-lines';
import { addInterventionLine } from './lib/actions/add-intervention-line';

// Actions — Nomenclatures (BOM)
import { getBom } from './lib/actions/get-bom';
import { listBoms } from './lib/actions/list-boms';
import { createBom } from './lib/actions/create-bom';
import { updateBom } from './lib/actions/update-bom';
import { deleteBom } from './lib/actions/delete-bom';
import { getBomLines } from './lib/actions/get-bom-lines';
import { addBomLine } from './lib/actions/add-bom-line';
import { updateBomLine } from './lib/actions/update-bom-line';
import { deleteBomLine } from './lib/actions/delete-bom-line';

// Actions — Ordres de fabrication (MO)
import { getMo } from './lib/actions/get-mo';
import { listMos } from './lib/actions/list-mos';
import { createMo } from './lib/actions/create-mo';
import { updateMo } from './lib/actions/update-mo';
import { deleteMo } from './lib/actions/delete-mo';

// Actions — Réceptions
import { getReception } from './lib/actions/get-reception';
import { listReceptions } from './lib/actions/list-receptions';
import { createReception } from './lib/actions/create-reception';
import { updateReception } from './lib/actions/update-reception';
import { deleteReception } from './lib/actions/delete-reception';
import { validateReception } from './lib/actions/validate-reception';
import { closeReception } from './lib/actions/close-reception';
import { getReceptionLines } from './lib/actions/get-reception-lines';
import { addReceptionLine } from './lib/actions/add-reception-line';
import { updateReceptionLine } from './lib/actions/update-reception-line';
import { deleteReceptionLine } from './lib/actions/delete-reception-line';

// Actions — Dons
import { getDonation } from './lib/actions/get-donation';
import { listDonations } from './lib/actions/list-donations';
import { createDonation } from './lib/actions/create-donation';
import { updateDonation } from './lib/actions/update-donation';
import { deleteDonation } from './lib/actions/delete-donation';
import { validateDonation } from './lib/actions/validate-donation';

// Actions — Devises
import { getCurrency } from './lib/actions/get-currency';
import { listCurrencies } from './lib/actions/list-currencies';
import { createCurrency } from './lib/actions/create-currency';
import { updateCurrency } from './lib/actions/update-currency';
import { deleteCurrency } from './lib/actions/delete-currency';

// Actions — Recrutement
import { getJobPosition } from './lib/actions/get-job-position';
import { listJobPositions } from './lib/actions/list-job-positions';
import { createJobPosition } from './lib/actions/create-job-position';
import { updateJobPosition } from './lib/actions/update-job-position';
import { deleteJobPosition } from './lib/actions/delete-job-position';
import { getCandidature } from './lib/actions/get-candidature';
import { listCandidatures } from './lib/actions/list-candidatures';
import { createCandidature } from './lib/actions/create-candidature';
import { updateCandidature } from './lib/actions/update-candidature';
import { deleteCandidature } from './lib/actions/delete-candidature';

// Actions — Base de connaissances
import { getKnowledgeRecord } from './lib/actions/get-knowledge-record';
import { listKnowledgeRecords } from './lib/actions/list-knowledge-records';
import { createKnowledgeRecord } from './lib/actions/create-knowledge-record';
import { updateKnowledgeRecord } from './lib/actions/update-knowledge-record';
import { deleteKnowledgeRecord } from './lib/actions/delete-knowledge-record';

// Actions — Documents
import { listDocuments } from './lib/actions/list-documents';
import { uploadDocument } from './lib/actions/upload-document';
import { deleteDocument } from './lib/actions/delete-document';
import { buildDocument } from './lib/actions/build-document';

// Actions — Paramétrage
import { getSetupCompany } from './lib/actions/get-setup-company';
import { listSetupCountries } from './lib/actions/list-setup-countries';
import { listSetupCurrencies } from './lib/actions/list-setup-currencies';
import { listSetupPaymentTypes } from './lib/actions/list-setup-payment-types';
import { listSetupContactTypes } from './lib/actions/list-setup-contact-types';
import { listSetupEventTypes } from './lib/actions/list-setup-event-types';
import { listSetupTicketTypes } from './lib/actions/list-setup-ticket-types';
import { listSetupTicketCategories } from './lib/actions/list-setup-ticket-categories';
import { listSetupTicketSeverities } from './lib/actions/list-setup-ticket-severities';

// Actions — ROs (Redesk)
import { getRo } from './lib/actions/get-ro';
import { listRos } from './lib/actions/list-ros';
import { createRo } from './lib/actions/create-ro';
import { updateRo } from './lib/actions/update-ro';
import { deleteRo } from './lib/actions/delete-ro';

// Actions — Partenariats
import { getPartnership } from './lib/actions/get-partnership';
import { listPartnerships } from './lib/actions/list-partnerships';
import { createPartnership } from './lib/actions/create-partnership';
import { updatePartnership } from './lib/actions/update-partnership';
import { deletePartnership } from './lib/actions/delete-partnership';

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
    // Devis (Propals)
    updatePropal,
    deletePropal,
    closePropal,
    propalToDraft,
    // Projets (CRUD complet)
    createProject,
    updateProject,
    deleteProject,
    validateProject,
    getProjectTasks,
    createProjectTask,
    updateProjectTask,
    // Tickets
    createTicket,
    getTicket,
    updateTicket,
    listTickets,
    deleteTicket,
    addTicketMessage,
    // Expéditions
    getShipment,
    listShipments,
    createShipment,
    updateShipment,
    validateShipment,
    closeShipment,
    deleteShipment,
    // Contrats
    getContract,
    listContracts,
    createContract,
    updateContract,
    validateContract,
    closeContract,
    deleteContract,
    // Factures fournisseur
    getSupplierInvoice,
    listSupplierInvoices,
    createSupplierInvoice,
    updateSupplierInvoice,
    validateSupplierInvoice,
    deleteSupplierInvoice,
    // Commandes fournisseur
    getSupplierOrder,
    listSupplierOrders,
    createSupplierOrder,
    updateSupplierOrder,
    validateSupplierOrder,
    deleteSupplierOrder,
    // Entrepôts
    getWarehouse,
    listWarehouses,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
    // Comptes bancaires
    getBankAccount,
    listBankAccounts,
    createBankAccount,
    getBankTransactions,
    // Agenda
    getAgendaEvent,
    listAgendaEvents,
    createAgendaEvent,
    updateAgendaEvent,
    deleteAgendaEvent,
    // Catégories
    getCategory,
    listCategories,
    createCategory,
    updateCategory,
    // Utilisateurs
    getUser,
    listUsers,
    createUser,
    // PropalCustom (Redesk)
    getPropalcustom,
    listPropalcustom,
    createPropalcustom,
    updatePropalcustom,
    deletePropalcustom,
    validatePropalcustom,
    closePropalcustom,
    // DevisDMG (Redesk)
    getDevisdmg,
    listDevisdmg,
    createDevisdmg,
    updateDevisdmg,
    deleteDevisdmg,
    validateDevisdmg,
    closeDevisdmg,
    // Commandes (lignes & contacts)
    getOrderByRef,
    getOrderLines,
    addOrderLine,
    updateOrderLine,
    deleteOrderLine,
    getOrderContacts,
    addOrderContact,
    deleteOrderContact,
    reopenOrder,
    setOrderInvoiced,
    closeOrder,
    orderToDraft,
    createOrderFromProposal,
    getOrderShipments,
    createOrderShipment,
    // Factures (lignes, paiements & contacts)
    invoiceToDraft,
    setInvoicePaid,
    setInvoiceUnpaid,
    getInvoiceLines,
    addInvoiceLine,
    updateInvoiceLine,
    deleteInvoiceLine,
    getInvoicePayments,
    addInvoicePayment,
    createInvoiceFromOrder,
    getInvoiceDiscount,
    addInvoiceContact,
    deleteInvoiceContact,
    // Devis standard (lignes & contacts)
    getPropalByRef,
    getPropalLines,
    addPropalLine,
    updatePropalLine,
    deletePropalLine,
    addPropalContact,
    deletePropalContact,
    setPropalInvoiced,
    // Tiers (supplémentaires)
    deleteThirdParty,
    getThirdPartyByEmail,
    getOutstandingProposals,
    getOutstandingOrders,
    getOutstandingInvoices,
    getThirdPartyBankAccounts,
    // Contacts (supplémentaires)
    deleteContact,
    getContactByEmail,
    // Produits (supplémentaires)
    getProductByRef,
    getProductStock,
    // Expéditions (lignes)
    getShipmentLines,
    addShipmentLine,
    updateShipmentLine,
    deleteShipmentLine,
    createShipmentFromOrder,
    // Contrats (lignes)
    getContractLines,
    addContractLine,
    updateContractLine,
    deleteContractLine,
    activateContractLine,
    unactivateContractLine,
    // Factures fournisseur (lignes & paiements)
    getSupplierInvoiceLines,
    addSupplierInvoiceLine,
    updateSupplierInvoiceLine,
    deleteSupplierInvoiceLine,
    getSupplierInvoicePayments,
    addSupplierInvoicePayment,
    // Commandes fournisseur (statuts)
    approveSupplierOrder,
    makeSupplierOrder,
    // Comptes bancaires (supplémentaires)
    updateBankAccount,
    deleteBankAccount,
    transferBankAccount,
    // Catégories (supplémentaires)
    deleteCategory,
    getCategoryObjects,
    linkObjectToCategory,
    unlinkObjectFromCategory,
    // Utilisateurs (supplémentaires)
    updateUser,
    deleteUser,
    getUserByLogin,
    // PropalCustom (lignes)
    getPropalcustomLines,
    addPropalcustomLine,
    updatePropalcustomLine,
    deletePropalcustomLine,
    setPropalcustomInvoiced,
    // DevisDMG (lignes)
    getDevisdmgLines,
    addDevisdmgLine,
    updateDevisdmgLine,
    deleteDevisdmgLine,
    setDevisdmgInvoiced,
    // Tâches
    getTask,
    listTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskLines,
    addTaskLine,
    addTaskTimespent,
    // Mouvements de stock
    getStockMovement,
    listStockMovements,
    createStockMovement,
    // Notes de frais
    getExpenseReport,
    listExpenseReports,
    createExpenseReport,
    updateExpenseReport,
    deleteExpenseReport,
    validateExpenseReport,
    getExpenseReportLines,
    addExpenseReportLine,
    updateExpenseReportLine,
    deleteExpenseReportLine,
    // Adhérents
    getMember,
    listMembers,
    createMember,
    updateMember,
    deleteMember,
    getMemberSubscriptions,
    createMemberSubscription,
    // Types d'adhérents
    getMemberType,
    listMemberTypes,
    createMemberType,
    updateMemberType,
    deleteMemberType,
    // Cotisations
    getSubscription,
    listSubscriptions,
    createSubscription,
    updateSubscription,
    deleteSubscription,
    // Devis fournisseur
    getSupplierProposal,
    listSupplierProposals,
    // Fiches d'intervention
    getIntervention,
    listInterventions,
    createIntervention,
    deleteIntervention,
    validateIntervention,
    closeIntervention,
    getInterventionLines,
    addInterventionLine,
    // Nomenclatures (BOM)
    getBom,
    listBoms,
    createBom,
    updateBom,
    deleteBom,
    getBomLines,
    addBomLine,
    updateBomLine,
    deleteBomLine,
    // Ordres de fabrication (MO)
    getMo,
    listMos,
    createMo,
    updateMo,
    deleteMo,
    // Réceptions
    getReception,
    listReceptions,
    createReception,
    updateReception,
    deleteReception,
    validateReception,
    closeReception,
    getReceptionLines,
    addReceptionLine,
    updateReceptionLine,
    deleteReceptionLine,
    // Dons
    getDonation,
    listDonations,
    createDonation,
    updateDonation,
    deleteDonation,
    validateDonation,
    // Devises
    getCurrency,
    listCurrencies,
    createCurrency,
    updateCurrency,
    deleteCurrency,
    // Recrutement
    getJobPosition,
    listJobPositions,
    createJobPosition,
    updateJobPosition,
    deleteJobPosition,
    getCandidature,
    listCandidatures,
    createCandidature,
    updateCandidature,
    deleteCandidature,
    // Base de connaissances
    getKnowledgeRecord,
    listKnowledgeRecords,
    createKnowledgeRecord,
    updateKnowledgeRecord,
    deleteKnowledgeRecord,
    // Documents
    listDocuments,
    uploadDocument,
    deleteDocument,
    buildDocument,
    // Paramétrage
    getSetupCompany,
    listSetupCountries,
    listSetupCurrencies,
    listSetupPaymentTypes,
    listSetupContactTypes,
    listSetupEventTypes,
    listSetupTicketTypes,
    listSetupTicketCategories,
    listSetupTicketSeverities,
    // ROs (Redesk)
    getRo,
    listRos,
    createRo,
    updateRo,
    deleteRo,
    // Partenariats
    getPartnership,
    listPartnerships,
    createPartnership,
    updatePartnership,
    deletePartnership,
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
