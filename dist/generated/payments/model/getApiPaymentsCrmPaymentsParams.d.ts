/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { GetApiPaymentsCrmPaymentsStatus } from "./getApiPaymentsCrmPaymentsStatus";
import type { GetApiPaymentsCrmPaymentsOrderBy } from "./getApiPaymentsCrmPaymentsOrderBy";
export declare type GetApiPaymentsCrmPaymentsParams = {
    limit?: number;
    offset?: number;
    id?: string;
    created?: string;
    updated?: string;
    archived?: boolean;
    amount?: number;
    order_id?: string;
    external_id?: string;
    status?: GetApiPaymentsCrmPaymentsStatus;
    order_by?: GetApiPaymentsCrmPaymentsOrderBy;
    created_ge?: string;
    created_le?: string;
    updated_ge?: string;
    updated_le?: string;
    amount_ge?: number;
    amount_le?: number;
    contract_id?: number;
};
