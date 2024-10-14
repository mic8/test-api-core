/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiContractProcessingWebBillingEventTypesOrderBy } from "./getApiContractProcessingWebBillingEventTypesOrderBy";
export declare type GetApiContractProcessingWebBillingEventTypesParams = {
    /**
     * Unique identifier of the entity.
     */
    id?: number;
    /**
     * List of unique entity identifiers for filtering.
     */
    id_in?: number[];
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
    order_by?: GetApiContractProcessingWebBillingEventTypesOrderBy;
};
