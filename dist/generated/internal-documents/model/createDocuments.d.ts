/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * internal-documents
 * OpenAPI spec version: 0.0.1
 */
import type { CreateDocOptions } from "./createDocOptions";
import type { CreateDocumentsStatus } from "./createDocumentsStatus";
export interface CreateDocuments {
    client_id: string;
    doc_template_ids: string[];
    options?: CreateDocOptions;
    status?: CreateDocumentsStatus;
}
