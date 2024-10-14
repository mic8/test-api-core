/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiContractProcessingWebContractsOrderBy } from "./getApiContractProcessingWebContractsOrderBy";
import type { GetApiContractProcessingWebContractsPublicStateName } from "./getApiContractProcessingWebContractsPublicStateName";
import type { GetApiContractProcessingWebContractsPublicStateNameInItem } from "./getApiContractProcessingWebContractsPublicStateNameInItem";
import type { GetApiContractProcessingWebContractsPublicStateNameNotinItem } from "./getApiContractProcessingWebContractsPublicStateNameNotinItem";
import type { GetApiContractProcessingWebContractsCustomerType } from "./getApiContractProcessingWebContractsCustomerType";
export declare type GetApiContractProcessingWebContractsParams = {
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
    order_by?: GetApiContractProcessingWebContractsOrderBy;
    client_uid?: string;
    client_uid_in?: string[];
    public_state_name?: GetApiContractProcessingWebContractsPublicStateName;
    public_state_name_in?: GetApiContractProcessingWebContractsPublicStateNameInItem[];
    public_state_name_notin?: GetApiContractProcessingWebContractsPublicStateNameNotinItem[];
    product_type?: string;
    offer_id?: number;
    application_id_in?: string[];
    payday?: string;
    payday_ge?: string;
    payday_le?: string;
    dpd?: number;
    dpd_le?: number;
    dpd_ge?: number;
    dpd_in?: number[];
    offer_id_in?: number[];
    created_le?: string;
    created_ge?: string;
    updated_le?: string;
    updated_ge?: string;
    product_id?: number;
    contract_number?: string;
    contract_number_ilike?: string;
    account_balance_gt?: number;
    account_balance_lt?: number;
    is_test?: boolean;
    customer_type?: GetApiContractProcessingWebContractsCustomerType;
};
