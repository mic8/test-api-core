/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiPaymentProcessingCrmDisbursementsStatus } from "./getApiPaymentProcessingCrmDisbursementsStatus";
import type { GetApiPaymentProcessingCrmDisbursementsOrderBy } from "./getApiPaymentProcessingCrmDisbursementsOrderBy";
export declare type GetApiPaymentProcessingCrmDisbursementsParams = {
    limit?: number;
    offset?: number;
    id?: string;
    client_id?: string;
    created?: string;
    updated?: string;
    archived?: boolean;
    amount?: number;
    external_id?: string;
    contract_id?: number;
    operation_id?: number;
    provider_id?: string;
    status?: GetApiPaymentProcessingCrmDisbursementsStatus;
    order_by?: GetApiPaymentProcessingCrmDisbursementsOrderBy;
    retry_attempt?: number;
    next_retry_dt?: string;
    created_ge?: string;
    created_le?: string;
    updated_ge?: string;
    updated_le?: string;
    amount_ge?: number;
    amount_le?: number;
    retry_attempt_ge?: number;
    retry_attempt_le?: number;
    next_retry_dt_ge?: string;
    next_retry_dt_le?: string;
};
