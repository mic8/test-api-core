/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * collection service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiCollectionBlacklistOrderBy } from "./getApiCollectionBlacklistOrderBy";
export declare type GetApiCollectionBlacklistParams = {
    limit?: number;
    created_gt?: string;
    contract_key?: string;
    offset?: number;
    purpose_ilike?: string;
    client_id?: string;
    contract_number?: string;
    order_by?: GetApiCollectionBlacklistOrderBy;
    client_id_in?: string[];
    created_lt?: string;
    archived?: boolean;
};
