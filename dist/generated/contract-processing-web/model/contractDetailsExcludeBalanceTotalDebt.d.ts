/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * contract-processing-web
 * OpenAPI spec version: 0.0.1
 */
import type { AmountToPay } from "./amountToPay";
import type { ContractDetailsExcludeBalanceTotalDebtCountryCode } from "./contractDetailsExcludeBalanceTotalDebtCountryCode";
import type { FeeOperationMany } from "./feeOperationMany";
import type { PaymentOnlyAmountExternalIdPaymentDatePaymentType } from "./paymentOnlyAmountExternalIdPaymentDatePaymentType";
import type { ProlongationOptionMany } from "./prolongationOptionMany";
import type { PaymentScheduleWithUnpaidFeesMany } from "./paymentScheduleWithUnpaidFeesMany";
import type { ContractDetailsExcludeBalanceTotalDebtScheduleAggregates } from "./contractDetailsExcludeBalanceTotalDebtScheduleAggregates";
import type { Period } from "./period";
export interface ContractDetailsExcludeBalanceTotalDebt {
    account_balance?: number;
    amount_to_pay?: AmountToPay;
    application_id?: string | null;
    bc_count?: number | null;
    calc_id?: number | null;
    client_uid?: string;
    contract_number?: string;
    count_repayments?: number;
    country_code?: ContractDetailsExcludeBalanceTotalDebtCountryCode;
    created?: string;
    days_before_due_date?: number | null;
    days_before_state_end_date?: number | null;
    days_from_state_changed?: number;
    disbursement_date?: string;
    disbursement_sum?: number;
    discount?: number | null;
    dpd?: number;
    due_date?: string;
    full_repayment: number | null;
    guid?: string | null;
    id?: number;
    is_restruct_possible?: boolean;
    is_test?: boolean | null;
    last_repayment_date?: string;
    loan_amount?: number;
    next_check_date?: string | null;
    offer_code?: string;
    offer_id?: number | null;
    paid_fees?: FeeOperationMany[];
    payday?: string | null;
    payments?: PaymentOnlyAmountExternalIdPaymentDatePaymentType[];
    possible_payday?: string | null;
    product_type?: string;
    prolongations?: ProlongationOptionMany[];
    public_state_name?: string;
    schedule: PaymentScheduleWithUnpaidFeesMany[] | null;
    schedule_aggregates: ContractDetailsExcludeBalanceTotalDebtScheduleAggregates;
    state_end_date?: string;
    state_id?: number | null;
    sum_client_payments?: number;
    sum_fees?: number;
    sum_paid_fees?: number;
    sum_unpaid_fees?: number;
    term?: Period;
    total_limit?: number | null;
    total_repayment_sum: number | null;
    unpaid_amount_by_schedule: number | null;
    unpaid_amount_total: number | null;
    unpaid_fees?: FeeOperationMany[];
    updated?: string;
}
