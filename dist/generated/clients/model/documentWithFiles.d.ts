/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { DocumentWithFilesAddress } from "./documentWithFilesAddress";
import type { DocumentWithFilesDocumentExtra } from "./documentWithFilesDocumentExtra";
import type { DocumentWithFilesDocumentType } from "./documentWithFilesDocumentType";
import type { ExtendedFilesExcludeImgUrlS3LinkThumbUrl } from "./extendedFilesExcludeImgUrlS3LinkThumbUrl";
import type { DocumentWithFilesGender } from "./documentWithFilesGender";
import type { DocumentWithFilesSessionType } from "./documentWithFilesSessionType";
import type { DocumentWithFilesVerification } from "./documentWithFilesVerification";
export interface DocumentWithFiles {
    address: DocumentWithFilesAddress;
    archived?: boolean;
    client_id: string;
    created?: string;
    date_of_birth: string | null;
    document_extra?: DocumentWithFilesDocumentExtra;
    document_number: string | null;
    document_type?: DocumentWithFilesDocumentType;
    document_type_id?: string | null;
    expiration_date: string | null;
    files?: ExtendedFilesExcludeImgUrlS3LinkThumbUrl[];
    full_name: string | null;
    gender?: DocumentWithFilesGender;
    id: string;
    issue_date?: string | null;
    issue_place?: string | null;
    session_id?: string | null;
    session_type?: DocumentWithFilesSessionType;
    updated?: string;
    updated_by?: string | null;
    verification?: DocumentWithFilesVerification;
}
