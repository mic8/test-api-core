/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiClientsClientsPreviewOrderBy } from "./getApiClientsClientsPreviewOrderBy";
import type { GetApiClientsClientsPreviewSourceOfCreationInItem } from "./getApiClientsClientsPreviewSourceOfCreationInItem";
import type { GetApiClientsClientsPreviewSourceOfCreationNotinItem } from "./getApiClientsClientsPreviewSourceOfCreationNotinItem";
export declare type GetApiClientsClientsPreviewParams = {
    limit?: number;
    offset?: number;
    archived?: boolean;
    id?: string;
    is_test?: boolean;
    created_date?: string;
    created_le?: string;
    created_ge?: string;
    email_like?: string;
    /**
     * Search in first, middle and second name
     */
    name_like?: string;
    list_ids?: string[];
    email_in?: string[];
    search_text?: string;
    is_repeat?: boolean;
    order_by?: GetApiClientsClientsPreviewOrderBy;
    is_email_confirmed?: boolean;
    source_of_creation_in?: GetApiClientsClientsPreviewSourceOfCreationInItem[];
    source_of_creation_notin?: GetApiClientsClientsPreviewSourceOfCreationNotinItem[];
};
