/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * merchants
 * OpenAPI spec version: 0.0.1
 */
import type { AmountToPay } from "./amountToPay";
import type { PaymentSchedule } from "./paymentSchedule";
export interface BillingDetails {
    dpd: number;
    full_repayment: number;
    late_payment_fee_percent: number;
    next_payment: number;
    next_payment_details: AmountToPay;
    payday: string;
    regular_payment: number;
    schedule: PaymentSchedule[];
    sum_client_payments: number;
    sum_fees: number;
    sum_paid_fees: number;
    sum_unpaid_fees: number;
}
