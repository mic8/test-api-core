/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { AttachmentsManyMeta } from "./attachmentsManyMeta";
import type { AttachmentsManyType } from "./attachmentsManyType";
export interface AttachmentsMany {
    archived?: boolean;
    communication_id?: string;
    created?: string;
    id: string;
    meta: AttachmentsManyMeta;
    name: string;
    type: AttachmentsManyType;
    updated?: string;
}
