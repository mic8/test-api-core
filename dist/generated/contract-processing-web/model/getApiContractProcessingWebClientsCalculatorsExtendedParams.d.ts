/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
export declare type GetApiContractProcessingWebClientsCalculatorsExtendedParams = {
    /**
     * Unique identifier of the entity.
     */
    id?: number;
    /**
     * List of unique entity identifiers for filtering.
     */
    id_in?: number[];
    name?: string;
    name_in?: string[];
    name_ilike?: string;
    created_le?: string;
    created_ge?: string;
    /**
     * Is calculator archived
     */
    archived?: boolean;
};
