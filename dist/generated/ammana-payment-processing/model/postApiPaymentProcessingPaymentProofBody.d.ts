/// <reference types="node" />
/// <reference types="react-native" />
/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { PostApiPaymentProcessingPaymentProofBodyPaymentMethod } from "./postApiPaymentProcessingPaymentProofBodyPaymentMethod";
export declare type PostApiPaymentProcessingPaymentProofBody = {
    amount?: number;
    /** Proof of payment file */
    content: Blob;
    contract_id: number;
    payment_method: PostApiPaymentProcessingPaymentProofBodyPaymentMethod;
};
