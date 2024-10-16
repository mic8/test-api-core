/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { PaymentScheduleWithUnpaidFeesManyStatus } from "./paymentScheduleWithUnpaidFeesManyStatus";
import type { MonthlyPaymentOperationMany } from "./monthlyPaymentOperationMany";
export interface PaymentScheduleWithUnpaidFeesMany {
    interest_amount: number | null;
    outstanding_principal_amount?: number | null;
    paid_delay_in_days: number | null;
    payday: string | null;
    principal_amount: number | null;
    status: PaymentScheduleWithUnpaidFeesManyStatus;
    total_amount: number | null;
    unpaid_amount: number | null;
    unpaid_fees?: MonthlyPaymentOperationMany[];
    unpaid_interest_amount: number | null;
    unpaid_principal_amount: number | null;
}
