/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { IndrivePaymentPayloadMeta } from "./indrivePaymentPayloadMeta";
export interface IndrivePaymentPayload {
    amount: number;
    client_id: string;
    contract_id: number;
    external_id: string;
    meta: IndrivePaymentPayloadMeta;
    payment_date?: string | null;
    source: string;
    status: string;
    [key: string]: any;
}
