/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * merchants
 * OpenAPI spec version: 0.0.1
 */
import type { GetOrdersBillingDetailsMany } from "./getOrdersBillingDetailsMany";
import type { GetOrdersMany } from "./getOrdersMany";
import type { GetClientOrdersSummaryDraftOrder } from "./getClientOrdersSummaryDraftOrder";
export interface GetClientOrdersSummary {
    active_orders: GetOrdersBillingDetailsMany[];
    completed_orders: GetOrdersMany[];
    draft_order: GetClientOrdersSummaryDraftOrder;
}
