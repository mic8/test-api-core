/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiContractProcessingWebStrategiesPaginatedOrderBy } from "./getApiContractProcessingWebStrategiesPaginatedOrderBy";
export declare type GetApiContractProcessingWebStrategiesPaginatedParams = {
    /**
     * Unique identifier of the entity.
     */
    id?: number;
    /**
     * List of unique entity identifiers for filtering.
     */
    id_in?: number[];
    /**
     * Strategy code.
     */
    code?: string;
    /**
     * List of strategy codes for filtering.
     */
    code_in?: string[];
    /**
     * Pattern string for case-insensitive search of strategy codes.
     */
    code_ilike?: string;
    /**
     * Pattern string for search by strategy description.
     */
    description_ilike?: string;
    /**
     * Is strategy archived
     */
    archived?: boolean;
    created_le?: string;
    created_ge?: string;
    /**
     * Maximum number of results to return. Defaults to 100.
     */
    limit?: number;
    /**
     * Number of records to skip before starting to return results. Defaults to 0.
     */
    offset?: number;
    /**
     * Field by which to sort the results. Prefix with '-' for descending order. Options are 'created', '-created', 'updated', '-updated', 'id', '-id'.
     */
    order_by?: GetApiContractProcessingWebStrategiesPaginatedOrderBy;
};
