/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { AddressWithReferenceFieldsExcludeClientId } from "./addressWithReferenceFieldsExcludeClientId";
import type { BankAccountExcludeClientId } from "./bankAccountExcludeClientId";
import type { CRMClientInfoClientDetails } from "./cRMClientInfoClientDetails";
import type { ContactPersonMany } from "./contactPersonMany";
import type { DocumentWithReferenceFieldsExcludeClientId } from "./documentWithReferenceFieldsExcludeClientId";
import type { CRMClientInfoExtra } from "./cRMClientInfoExtra";
import type { PhoneExcludeClientIdId } from "./phoneExcludeClientIdId";
import type { CRMClientInfoSessionType } from "./cRMClientInfoSessionType";
import type { CRMClientInfoSourceOfCreation } from "./cRMClientInfoSourceOfCreation";
import type { WorkInformationWithReferenceFieldsExcludeClientId } from "./workInformationWithReferenceFieldsExcludeClientId";
export interface CRMClientInfo {
    addresses?: AddressWithReferenceFieldsExcludeClientId[];
    archived?: boolean;
    bank_accounts?: BankAccountExcludeClientId[];
    client_details?: CRMClientInfoClientDetails;
    contact_persons?: ContactPersonMany[];
    created?: string;
    documents?: DocumentWithReferenceFieldsExcludeClientId[];
    email?: string | null;
    extra?: CRMClientInfoExtra;
    first_name?: string | null;
    id?: string;
    is_email_confirmed?: boolean | null;
    is_repeat?: boolean | null;
    is_test?: boolean | null;
    last_name?: string | null;
    middle_name?: string | null;
    phones?: PhoneExcludeClientIdId[];
    session_id?: string | null;
    session_type?: CRMClientInfoSessionType;
    source_of_creation?: CRMClientInfoSourceOfCreation;
    updated?: string;
    work_information?: WorkInformationWithReferenceFieldsExcludeClientId[];
}
