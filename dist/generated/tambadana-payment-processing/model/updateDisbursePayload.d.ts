/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { UpdateDisbursePayloadPayoutStatusCode } from "./updateDisbursePayloadPayoutStatusCode";
export interface UpdateDisbursePayload {
    account_holder_name?: string;
    amount?: number;
    batch_id?: string;
    debiting_method?: string;
    internal_reference: string;
    payee_name?: string;
    payout_date?: string;
    payout_details?: string | null;
    payout_status?: string;
    payout_status_code?: UpdateDisbursePayloadPayoutStatusCode;
    recipient_reference?: string;
    status_reason?: string | null;
    [key: string]: any;
}
