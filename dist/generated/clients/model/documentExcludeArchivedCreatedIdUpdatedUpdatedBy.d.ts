/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedByAddress } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedByAddress";
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentExtra } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentExtra";
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentType } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentType";
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedByGender } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedByGender";
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedBySessionType } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedBySessionType";
import type { DocumentExcludeArchivedCreatedIdUpdatedUpdatedByVerification } from "./documentExcludeArchivedCreatedIdUpdatedUpdatedByVerification";
export interface DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy {
    address?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedByAddress;
    client_id?: string;
    date_of_birth?: string | null;
    document_extra?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentExtra;
    document_number?: string | null;
    document_type?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedByDocumentType;
    document_type_id?: string | null;
    expiration_date?: string | null;
    full_name?: string | null;
    gender?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedByGender;
    issue_date?: string | null;
    issue_place?: string | null;
    session_id?: string | null;
    session_type?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBySessionType;
    verification?: DocumentExcludeArchivedCreatedIdUpdatedUpdatedByVerification;
}
