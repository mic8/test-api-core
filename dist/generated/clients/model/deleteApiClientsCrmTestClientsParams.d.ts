/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { DeleteApiClientsCrmTestClientsSourceOfCreationInItem } from "./deleteApiClientsCrmTestClientsSourceOfCreationInItem";
import type { DeleteApiClientsCrmTestClientsSourceOfCreationNotinItem } from "./deleteApiClientsCrmTestClientsSourceOfCreationNotinItem";
export declare type DeleteApiClientsCrmTestClientsParams = {
    archived?: boolean;
    id?: string;
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
    is_email_confirmed?: boolean;
    source_of_creation_in?: DeleteApiClientsCrmTestClientsSourceOfCreationInItem[];
    source_of_creation_notin?: DeleteApiClientsCrmTestClientsSourceOfCreationNotinItem[];
};
