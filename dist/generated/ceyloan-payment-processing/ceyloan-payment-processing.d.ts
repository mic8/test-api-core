import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { BanksOnlyAccountNumberRegexPriority, CancelPayment, CreateDirectDebitRequest, CreateDisbursePayloadBody, DataBanks, DataBanksMany, DataBanksManyPaginated, DataCountDisbursementsByStatusesResponseMany, DataDDEntitiesCountByStatusesResponseMany, DataDDRequestsCountByStatusesResponseMany, DataDirectDebitEntity, DataDirectDebitEntityManyPaginated, DataDirectDebitRequest, DataDirectDebitRequestManyPaginated, DataDirectPayInitiatePaymentResponse, DataDisbursement, DataDisbursementManyPaginated, DataDisbursementStatuses, DataGetPaymentRepose, DataLivenessResponse, DataPayment, DataPaymentInfoResponse, DataPaymentManyPaginated, DataPaymentMethodMany, DataPaymentProof, DataPaymentProofManyPaginated, DataPaymentProofOnlyIdStatus, DataPaymentResponse, DataPaymentStatsAggregatedResponseMany, DataPaymentStatsResponse, DataPaymentsResponse, DataProvidersMany, DataPurchase, DataReadinessResponse, DataRefundManyPaginated, DataSuccessResponse, DataValidateBankAccountResult, DataValidatePaymentInfoRepose, DataWebxpayInitiatePaymentResponse, DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams, DeleteApiPaymentProcessingDirectDebitEntitiesIdParams, DirectPayInitiatePaymentPayloadBody, DirectPayUpdatePaymentPayload, DisbursePayloadBody, DisbursementOnlyErrorDescription, FailDisburseByExtPayload, FailDisbursePayloadBody, GetApiPaymentProcessingBanksParams, GetApiPaymentProcessingBanksParentIdLocalBankCodesParams, GetApiPaymentProcessingCrmBanksPaginatedParams, GetApiPaymentProcessingCrmBanksParams, GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams, GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams, GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams, GetApiPaymentProcessingCrmDirectDebitEntitiesParams, GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams, GetApiPaymentProcessingCrmDirectDebitRequestsParams, GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams, GetApiPaymentProcessingCrmDisbursementsParams, GetApiPaymentProcessingCrmFullPaymentsParams, GetApiPaymentProcessingCrmPaymentProofParams, GetApiPaymentProcessingCrmPaymentsMethodsParams, GetApiPaymentProcessingCrmPaymentsParams, GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams, GetApiPaymentProcessingCrmPaymentsStatsParams, GetApiPaymentProcessingCrmProvidersParams, GetApiPaymentProcessingCrmRefundsParams, GetApiPaymentProcessingDirectDebitEntitiesDefaultParams, GetApiPaymentProcessingDirectDebitEntitiesParams, GetApiPaymentProcessingPaymentsMethodsParams, NDBBankPaymentPayload, PaymentInfoPayload, PaymentInfoPayload1, PaymentInfoPayload2, PaymentOnlyContractKey, PaymentPayload, PaymentPayload1, PaymentPayload2, PaymentPayload3, PaymentProofOnlyStatus, PostApiPaymentProcessingCrmPaymentProofBody, PostApiPaymentProcessingExcelFilePaymentsBody, PostApiPaymentProcessingNdbPaymentsValidateParams, PostApiPaymentProcessingPaymentProofBody, ProvidersFiltersOnlyId, PurchaseAddDetailsPayload, PurchaseOnlyExternalIdBody, ValidateBankAccountPayload, WebxpayInitiatePaymentPayloadBody } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiPaymentProcessingReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiPaymentProcessingReadinessQueryKey: () => readonly ["/api/payment-processing/readiness"];
export declare const getGetApiPaymentProcessingReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingReadiness>>>;
export declare type GetApiPaymentProcessingReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiPaymentProcessingReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiPaymentProcessingLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiPaymentProcessingLivenessQueryKey: () => readonly ["/api/payment-processing/liveness"];
export declare const getGetApiPaymentProcessingLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingLiveness>>>;
export declare type GetApiPaymentProcessingLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiPaymentProcessingLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiPaymentProcessingMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiPaymentProcessingMetricsQueryKey: () => readonly ["/api/payment-processing/metrics"];
export declare const getGetApiPaymentProcessingMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingMetrics>>>;
export declare type GetApiPaymentProcessingMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiPaymentProcessingMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Handle frontend callback & redirect
 */
export declare const postApiPaymentProcessingFrontendRedirect: (options?: AxiosRequestConfig) => Promise<AxiosResponse<unknown>>;
export declare const getPostApiPaymentProcessingFrontendRedirectMutationOptions: <TError = AxiosError<void, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<unknown, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<unknown, any>, TError, void, TContext>;
export declare type PostApiPaymentProcessingFrontendRedirectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingFrontendRedirect>>>;
export declare type PostApiPaymentProcessingFrontendRedirectMutationError = AxiosError<void>;
export declare const usePostApiPaymentProcessingFrontendRedirect: <TError = AxiosError<void, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<unknown, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<unknown, any>, TError, void, TContext>;
/**
 * @summary Complete Purchase
 */
export declare const postApiPaymentProcessingCrmPurchaseComplete: (purchaseOnlyExternalIdBody: PurchaseOnlyExternalIdBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPurchase>>;
export declare const getPostApiPaymentProcessingCrmPurchaseCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
        data: PurchaseOnlyExternalIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
    data: PurchaseOnlyExternalIdBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPurchaseCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPurchaseComplete>>>;
export declare type PostApiPaymentProcessingCrmPurchaseCompleteMutationBody = PurchaseOnlyExternalIdBody;
export declare type PostApiPaymentProcessingCrmPurchaseCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete Purchase
 */
export declare const usePostApiPaymentProcessingCrmPurchaseComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
        data: PurchaseOnlyExternalIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPurchase, any>, TError, {
    data: PurchaseOnlyExternalIdBody;
}, TContext>;
/**
 * @summary Fail Purchase
 */
export declare const postApiPaymentProcessingCrmPurchaseFail: (purchaseOnlyExternalIdBody: PurchaseOnlyExternalIdBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPurchase>>;
export declare const getPostApiPaymentProcessingCrmPurchaseFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
        data: PurchaseOnlyExternalIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
    data: PurchaseOnlyExternalIdBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPurchaseFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPurchaseFail>>>;
export declare type PostApiPaymentProcessingCrmPurchaseFailMutationBody = PurchaseOnlyExternalIdBody;
export declare type PostApiPaymentProcessingCrmPurchaseFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail Purchase
 */
export declare const usePostApiPaymentProcessingCrmPurchaseFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPurchase, any>, TError, {
        data: PurchaseOnlyExternalIdBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPurchase, any>, TError, {
    data: PurchaseOnlyExternalIdBody;
}, TContext>;
/**
 * @summary Add details to purchase
 */
export declare const postApiPaymentProcessingCrmPurchaseExternalIdAddDetails: (externalId: string, purchaseAddDetailsPayload: PurchaseAddDetailsPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentProcessingCrmPurchaseExternalIdAddDetailsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        externalId: string;
        data: PurchaseAddDetailsPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    externalId: string;
    data: PurchaseAddDetailsPayload;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPurchaseExternalIdAddDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPurchaseExternalIdAddDetails>>>;
export declare type PostApiPaymentProcessingCrmPurchaseExternalIdAddDetailsMutationBody = PurchaseAddDetailsPayload;
export declare type PostApiPaymentProcessingCrmPurchaseExternalIdAddDetailsMutationError = AxiosError<unknown>;
/**
 * @summary Add details to purchase
 */
export declare const usePostApiPaymentProcessingCrmPurchaseExternalIdAddDetails: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        externalId: string;
        data: PurchaseAddDetailsPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    externalId: string;
    data: PurchaseAddDetailsPayload;
}, TContext>;
/**
 * @summary Search disbursements
 */
export declare const getApiPaymentProcessingCrmDisbursements: (params?: GetApiPaymentProcessingCrmDisbursementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursementManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmDisbursementsQueryKey: (params?: GetApiPaymentProcessingCrmDisbursementsParams) => readonly ["/api/payment-processing/crm/disbursements", ...GetApiPaymentProcessingCrmDisbursementsParams[]];
export declare const getGetApiPaymentProcessingCrmDisbursementsQueryOptions: <TData = AxiosResponse<DataDisbursementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDisbursementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDisbursementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDisbursements>>>;
export declare type GetApiPaymentProcessingCrmDisbursementsQueryError = AxiosError<unknown>;
/**
 * @summary Search disbursements
 */
export declare const useGetApiPaymentProcessingCrmDisbursements: <TData = AxiosResponse<DataDisbursementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDisbursementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create disburse by clients contract
 */
export declare const postApiPaymentProcessingCrmDisbursements: (createDisbursePayloadBody: CreateDisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursements>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsMutationBody = CreateDisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisbursementsMutationError = AxiosError<unknown>;
/**
 * @summary Create disburse by clients contract
 */
export declare const usePostApiPaymentProcessingCrmDisbursements: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayloadBody;
}, TContext>;
/**
 * @summary Complete disburse by external id
 */
export declare const postApiPaymentProcessingCrmDisbursementsComplete: (disbursePayloadBody: DisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: DisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: DisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsComplete>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsCompleteMutationBody = DisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisbursementsCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete disburse by external id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: DisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: DisbursePayloadBody;
}, TContext>;
/**
 * @summary Fail disburse by external id
 */
export declare const postApiPaymentProcessingCrmDisbursementsFail: (failDisburseByExtPayload: FailDisburseByExtPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: FailDisburseByExtPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: FailDisburseByExtPayload;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsFail>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsFailMutationBody = FailDisburseByExtPayload;
export declare type PostApiPaymentProcessingCrmDisbursementsFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail disburse by external id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: FailDisburseByExtPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: FailDisburseByExtPayload;
}, TContext>;
/**
 * @summary Check disbursement by ID
 */
export declare const postApiPaymentProcessingCrmDisbursementsIdCheck: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsIdCheckMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdCheckMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsIdCheck>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdCheckMutationError = AxiosError<unknown>;
/**
 * @summary Check disbursement by ID
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsIdCheck: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Complete disburse by id
 */
export declare const postApiPaymentProcessingCrmDisbursementsIdComplete: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsIdCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsIdComplete>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsIdComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Fail disburse by id
 */
export declare const postApiPaymentProcessingCrmDisbursementsIdFail: (id: string, failDisbursePayloadBody: FailDisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsIdFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: FailDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: FailDisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsIdFail>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdFailMutationBody = FailDisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisbursementsIdFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsIdFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: FailDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: FailDisbursePayloadBody;
}, TContext>;
/**
 * @summary Retry disburse by id
 */
export declare const postApiPaymentProcessingCrmDisbursementsIdRetry: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsIdRetryMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdRetryMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsIdRetry>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdRetryMutationError = AxiosError<unknown>;
/**
 * @summary Retry disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsIdRetry: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Revert disburse by id
 */
export declare const postApiPaymentProcessingCrmDisbursementsIdRevert: (id: string, disbursementOnlyErrorDescription: DisbursementOnlyErrorDescription, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisbursementsIdRevertMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: DisbursementOnlyErrorDescription;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: DisbursementOnlyErrorDescription;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdRevertMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisbursementsIdRevert>>>;
export declare type PostApiPaymentProcessingCrmDisbursementsIdRevertMutationBody = DisbursementOnlyErrorDescription;
export declare type PostApiPaymentProcessingCrmDisbursementsIdRevertMutationError = AxiosError<unknown>;
/**
 * @summary Revert disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisbursementsIdRevert: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: DisbursementOnlyErrorDescription;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: DisbursementOnlyErrorDescription;
}, TContext>;
/**
 * @summary Count disbursements by their statuses
 */
export declare const getApiPaymentProcessingCrmDisbursementsCountByStatuses: (params?: GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountDisbursementsByStatusesResponseMany>>;
export declare const getGetApiPaymentProcessingCrmDisbursementsCountByStatusesQueryKey: (params?: GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams) => readonly ["/api/payment-processing/crm/disbursements/count/by_statuses", ...GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams[]];
export declare const getGetApiPaymentProcessingCrmDisbursementsCountByStatusesQueryOptions: <TData = AxiosResponse<DataCountDisbursementsByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountDisbursementsByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountDisbursementsByStatusesResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDisbursementsCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDisbursementsCountByStatuses>>>;
export declare type GetApiPaymentProcessingCrmDisbursementsCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Count disbursements by their statuses
 */
export declare const useGetApiPaymentProcessingCrmDisbursementsCountByStatuses: <TData = AxiosResponse<DataCountDisbursementsByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDisbursementsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountDisbursementsByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get payments methods
 */
export declare const getApiPaymentProcessingPaymentsMethods: (params?: GetApiPaymentProcessingPaymentsMethodsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentMethodMany>>;
export declare const getGetApiPaymentProcessingPaymentsMethodsQueryKey: (params?: GetApiPaymentProcessingPaymentsMethodsParams) => readonly ["/api/payment-processing/payments/methods", ...GetApiPaymentProcessingPaymentsMethodsParams[]];
export declare const getGetApiPaymentProcessingPaymentsMethodsQueryOptions: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingPaymentsMethodsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingPaymentsMethodsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingPaymentsMethods>>>;
export declare type GetApiPaymentProcessingPaymentsMethodsQueryError = AxiosError<unknown>;
/**
 * @summary Get payments methods
 */
export declare const useGetApiPaymentProcessingPaymentsMethods: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingPaymentsMethodsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search payments
 */
export declare const getApiPaymentProcessingCrmPayments: (params?: GetApiPaymentProcessingCrmPaymentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmPaymentsQueryKey: (params?: GetApiPaymentProcessingCrmPaymentsParams) => readonly ["/api/payment-processing/crm/payments", ...GetApiPaymentProcessingCrmPaymentsParams[]];
export declare const getGetApiPaymentProcessingCrmPaymentsQueryOptions: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPayments>>>;
export declare type GetApiPaymentProcessingCrmPaymentsQueryError = AxiosError<unknown>;
/**
 * @summary Search payments
 */
export declare const useGetApiPaymentProcessingCrmPayments: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get payment stats
 */
export declare const getApiPaymentProcessingCrmPaymentsStats: (params: GetApiPaymentProcessingCrmPaymentsStatsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentStatsResponse>>;
export declare const getGetApiPaymentProcessingCrmPaymentsStatsQueryKey: (params: GetApiPaymentProcessingCrmPaymentsStatsParams) => readonly ["/api/payment-processing/crm/payments/stats", ...GetApiPaymentProcessingCrmPaymentsStatsParams[]];
export declare const getGetApiPaymentProcessingCrmPaymentsStatsQueryOptions: <TData = AxiosResponse<DataPaymentStatsResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmPaymentsStatsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentStatsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentStatsResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentsStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentsStats>>>;
export declare type GetApiPaymentProcessingCrmPaymentsStatsQueryError = AxiosError<unknown>;
/**
 * @summary Get payment stats
 */
export declare const useGetApiPaymentProcessingCrmPaymentsStats: <TData = AxiosResponse<DataPaymentStatsResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmPaymentsStatsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentStatsResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get aggregated payment stats by payment source
 */
export declare const getApiPaymentProcessingCrmPaymentsStatsAggregateBySource: (params: GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentStatsAggregatedResponseMany>>;
export declare const getGetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceQueryKey: (params: GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams) => readonly ["/api/payment-processing/crm/payments/stats/aggregate_by_source", ...GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams[]];
export declare const getGetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceQueryOptions: <TData = AxiosResponse<DataPaymentStatsAggregatedResponseMany, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentStatsAggregatedResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentStatsAggregatedResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentsStatsAggregateBySource>>>;
export declare type GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceQueryError = AxiosError<unknown>;
/**
 * @summary Get aggregated payment stats by payment source
 */
export declare const useGetApiPaymentProcessingCrmPaymentsStatsAggregateBySource: <TData = AxiosResponse<DataPaymentStatsAggregatedResponseMany, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmPaymentsStatsAggregateBySourceParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentStatsAggregatedResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download uploaded payments file
 */
export declare const getApiPaymentProcessingCrmPaymentsUploadsS3Key: (s3Key: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiPaymentProcessingCrmPaymentsUploadsS3KeyQueryKey: (s3Key: string) => readonly [`/api/payment-processing/crm/payments/uploads/${string}`];
export declare const getGetApiPaymentProcessingCrmPaymentsUploadsS3KeyQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(s3Key: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentsUploadsS3KeyQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentsUploadsS3Key>>>;
export declare type GetApiPaymentProcessingCrmPaymentsUploadsS3KeyQueryError = AxiosError<unknown>;
/**
 * @summary Download uploaded payments file
 */
export declare const useGetApiPaymentProcessingCrmPaymentsUploadsS3Key: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(s3Key: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get payments methods
 */
export declare const getApiPaymentProcessingCrmPaymentsMethods: (params?: GetApiPaymentProcessingCrmPaymentsMethodsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentMethodMany>>;
export declare const getGetApiPaymentProcessingCrmPaymentsMethodsQueryKey: (params?: GetApiPaymentProcessingCrmPaymentsMethodsParams) => readonly ["/api/payment-processing/crm/payments/methods", ...GetApiPaymentProcessingCrmPaymentsMethodsParams[]];
export declare const getGetApiPaymentProcessingCrmPaymentsMethodsQueryOptions: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentsMethodsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentsMethodsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentsMethods>>>;
export declare type GetApiPaymentProcessingCrmPaymentsMethodsQueryError = AxiosError<unknown>;
/**
 * @summary Get payments methods
 */
export declare const useGetApiPaymentProcessingCrmPaymentsMethods: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentsMethodsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search payments
 */
export declare const getApiPaymentProcessingCrmFullPayments: (params?: GetApiPaymentProcessingCrmFullPaymentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmFullPaymentsQueryKey: (params?: GetApiPaymentProcessingCrmFullPaymentsParams) => readonly ["/api/payment-processing/crm/full_payments", ...GetApiPaymentProcessingCrmFullPaymentsParams[]];
export declare const getGetApiPaymentProcessingCrmFullPaymentsQueryOptions: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmFullPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmFullPaymentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmFullPayments>>>;
export declare type GetApiPaymentProcessingCrmFullPaymentsQueryError = AxiosError<unknown>;
/**
 * @summary Search payments
 */
export declare const useGetApiPaymentProcessingCrmFullPayments: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmFullPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create repayment
 */
export declare const postApiPaymentProcessingCrmPayment: (paymentPayload: PaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentProcessingCrmPaymentMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPaymentMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPayment>>>;
export declare type PostApiPaymentProcessingCrmPaymentMutationBody = PaymentPayload;
export declare type PostApiPaymentProcessingCrmPaymentMutationError = AxiosError<unknown>;
/**
 * @summary Create repayment
 */
export declare const usePostApiPaymentProcessingCrmPayment: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload;
}, TContext>;
/**
 * @summary Cancel Payment
 */
export declare const postApiPaymentProcessingCrmPaymentCancel: (cancelPayment: CancelPayment, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentProcessingCrmPaymentCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: CancelPayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: CancelPayment;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPaymentCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPaymentCancel>>>;
export declare type PostApiPaymentProcessingCrmPaymentCancelMutationBody = CancelPayment;
export declare type PostApiPaymentProcessingCrmPaymentCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel Payment
 */
export declare const usePostApiPaymentProcessingCrmPaymentCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: CancelPayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: CancelPayment;
}, TContext>;
/**
 * @summary Create direct debit payment
 */
export declare const postApiPaymentProcessingCrmPaymentDirectDebit: (createDirectDebitRequest: CreateDirectDebitRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitRequest>>;
export declare const getPostApiPaymentProcessingCrmPaymentDirectDebitMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectDebitRequest, any>, TError, {
        data: CreateDirectDebitRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDirectDebitRequest, any>, TError, {
    data: CreateDirectDebitRequest;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPaymentDirectDebitMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPaymentDirectDebit>>>;
export declare type PostApiPaymentProcessingCrmPaymentDirectDebitMutationBody = CreateDirectDebitRequest;
export declare type PostApiPaymentProcessingCrmPaymentDirectDebitMutationError = AxiosError<unknown>;
/**
 * @summary Create direct debit payment
 */
export declare const usePostApiPaymentProcessingCrmPaymentDirectDebit: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectDebitRequest, any>, TError, {
        data: CreateDirectDebitRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDirectDebitRequest, any>, TError, {
    data: CreateDirectDebitRequest;
}, TContext>;
/**
 * @summary Change payment by id
 */
export declare const patchApiPaymentProcessingCrmPaymentId: (id: string, paymentOnlyContractKey: PaymentOnlyContractKey, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPatchApiPaymentProcessingCrmPaymentIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
        data: PaymentOnlyContractKey;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    id: string;
    data: PaymentOnlyContractKey;
}, TContext>;
export declare type PatchApiPaymentProcessingCrmPaymentIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentProcessingCrmPaymentId>>>;
export declare type PatchApiPaymentProcessingCrmPaymentIdMutationBody = PaymentOnlyContractKey;
export declare type PatchApiPaymentProcessingCrmPaymentIdMutationError = AxiosError<unknown>;
/**
 * @summary Change payment by id
 */
export declare const usePatchApiPaymentProcessingCrmPaymentId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
        data: PaymentOnlyContractKey;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    id: string;
    data: PaymentOnlyContractKey;
}, TContext>;
/**
 * @summary Search refunds
 */
export declare const getApiPaymentProcessingCrmRefunds: (params?: GetApiPaymentProcessingCrmRefundsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRefundManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmRefundsQueryKey: (params?: GetApiPaymentProcessingCrmRefundsParams) => readonly ["/api/payment-processing/crm/refunds", ...GetApiPaymentProcessingCrmRefundsParams[]];
export declare const getGetApiPaymentProcessingCrmRefundsQueryOptions: <TData = AxiosResponse<DataRefundManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmRefundsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRefundManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataRefundManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmRefundsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmRefunds>>>;
export declare type GetApiPaymentProcessingCrmRefundsQueryError = AxiosError<unknown>;
/**
 * @summary Search refunds
 */
export declare const useGetApiPaymentProcessingCrmRefunds: <TData = AxiosResponse<DataRefundManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmRefundsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRefundManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create proof of payment
 */
export declare const postApiPaymentProcessingPaymentProof: (postApiPaymentProcessingPaymentProofBody: PostApiPaymentProcessingPaymentProofBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentProof>>;
export declare const getPostApiPaymentProcessingPaymentProofMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        data: PostApiPaymentProcessingPaymentProofBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
    data: PostApiPaymentProcessingPaymentProofBody;
}, TContext>;
export declare type PostApiPaymentProcessingPaymentProofMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingPaymentProof>>>;
export declare type PostApiPaymentProcessingPaymentProofMutationBody = PostApiPaymentProcessingPaymentProofBody;
export declare type PostApiPaymentProcessingPaymentProofMutationError = AxiosError<unknown>;
/**
 * @summary Create proof of payment
 */
export declare const usePostApiPaymentProcessingPaymentProof: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        data: PostApiPaymentProcessingPaymentProofBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentProof, any>, TError, {
    data: PostApiPaymentProcessingPaymentProofBody;
}, TContext>;
/**
 * @summary Create proof of payment
 */
export declare const postApiPaymentProcessingCrmPaymentProof: (postApiPaymentProcessingCrmPaymentProofBody: PostApiPaymentProcessingCrmPaymentProofBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentProof>>;
export declare const getPostApiPaymentProcessingCrmPaymentProofMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        data: PostApiPaymentProcessingCrmPaymentProofBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
    data: PostApiPaymentProcessingCrmPaymentProofBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmPaymentProofMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmPaymentProof>>>;
export declare type PostApiPaymentProcessingCrmPaymentProofMutationBody = PostApiPaymentProcessingCrmPaymentProofBody;
export declare type PostApiPaymentProcessingCrmPaymentProofMutationError = AxiosError<unknown>;
/**
 * @summary Create proof of payment
 */
export declare const usePostApiPaymentProcessingCrmPaymentProof: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        data: PostApiPaymentProcessingCrmPaymentProofBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentProof, any>, TError, {
    data: PostApiPaymentProcessingCrmPaymentProofBody;
}, TContext>;
/**
 * @summary Search proofs of payments
 */
export declare const getApiPaymentProcessingCrmPaymentProof: (params?: GetApiPaymentProcessingCrmPaymentProofParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentProofManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmPaymentProofQueryKey: (params?: GetApiPaymentProcessingCrmPaymentProofParams) => readonly ["/api/payment-processing/crm/payment_proof", ...GetApiPaymentProcessingCrmPaymentProofParams[]];
export declare const getGetApiPaymentProcessingCrmPaymentProofQueryOptions: <TData = AxiosResponse<DataPaymentProofManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentProofParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentProofManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentProofManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentProofQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentProof>>>;
export declare type GetApiPaymentProcessingCrmPaymentProofQueryError = AxiosError<unknown>;
/**
 * @summary Search proofs of payments
 */
export declare const useGetApiPaymentProcessingCrmPaymentProof: <TData = AxiosResponse<DataPaymentProofManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmPaymentProofParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentProofManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update proof of payment
 */
export declare const patchApiPaymentProcessingCrmPaymentProofId: (id: string, paymentProofOnlyStatus: PaymentProofOnlyStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentProofOnlyIdStatus>>;
export declare const getPatchApiPaymentProcessingCrmPaymentProofIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProofOnlyIdStatus, any>, TError, {
        id: string;
        data: PaymentProofOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentProofOnlyIdStatus, any>, TError, {
    id: string;
    data: PaymentProofOnlyStatus;
}, TContext>;
export declare type PatchApiPaymentProcessingCrmPaymentProofIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentProcessingCrmPaymentProofId>>>;
export declare type PatchApiPaymentProcessingCrmPaymentProofIdMutationBody = PaymentProofOnlyStatus;
export declare type PatchApiPaymentProcessingCrmPaymentProofIdMutationError = AxiosError<unknown>;
/**
 * @summary Update proof of payment
 */
export declare const usePatchApiPaymentProcessingCrmPaymentProofId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProofOnlyIdStatus, any>, TError, {
        id: string;
        data: PaymentProofOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentProofOnlyIdStatus, any>, TError, {
    id: string;
    data: PaymentProofOnlyStatus;
}, TContext>;
/**
 * @summary Delete proof of payment
 */
export declare const deleteApiPaymentProcessingCrmPaymentProofId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentProof>>;
export declare const getDeleteApiPaymentProcessingCrmPaymentProofIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiPaymentProcessingCrmPaymentProofIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPaymentProcessingCrmPaymentProofId>>>;
export declare type DeleteApiPaymentProcessingCrmPaymentProofIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete proof of payment
 */
export declare const useDeleteApiPaymentProcessingCrmPaymentProofId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentProof, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentProof, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Download proof of payment
 */
export declare const getApiPaymentProcessingCrmPaymentProofIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiPaymentProcessingCrmPaymentProofIdDownloadQueryKey: (id: string) => readonly [`/api/payment-processing/crm/payment_proof/${string}/download`];
export declare const getGetApiPaymentProcessingCrmPaymentProofIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmPaymentProofIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmPaymentProofIdDownload>>>;
export declare type GetApiPaymentProcessingCrmPaymentProofIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download proof of payment
 */
export declare const useGetApiPaymentProcessingCrmPaymentProofIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get default direct debit entity
 */
export declare const getApiPaymentProcessingDirectDebitEntitiesDefault: (params: GetApiPaymentProcessingDirectDebitEntitiesDefaultParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitEntity>>;
export declare const getGetApiPaymentProcessingDirectDebitEntitiesDefaultQueryKey: (params: GetApiPaymentProcessingDirectDebitEntitiesDefaultParams) => readonly ["/api/payment-processing/direct_debit/entities/default", ...GetApiPaymentProcessingDirectDebitEntitiesDefaultParams[]];
export declare const getGetApiPaymentProcessingDirectDebitEntitiesDefaultQueryOptions: <TData = AxiosResponse<DataDirectDebitEntity, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingDirectDebitEntitiesDefaultParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingDirectDebitEntitiesDefaultQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingDirectDebitEntitiesDefault>>>;
export declare type GetApiPaymentProcessingDirectDebitEntitiesDefaultQueryError = AxiosError<unknown>;
/**
 * @summary Get default direct debit entity
 */
export declare const useGetApiPaymentProcessingDirectDebitEntitiesDefault: <TData = AxiosResponse<DataDirectDebitEntity, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingDirectDebitEntitiesDefaultParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search direct debit entities
 */
export declare const getApiPaymentProcessingDirectDebitEntities: (params?: GetApiPaymentProcessingDirectDebitEntitiesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitEntityManyPaginated>>;
export declare const getGetApiPaymentProcessingDirectDebitEntitiesQueryKey: (params?: GetApiPaymentProcessingDirectDebitEntitiesParams) => readonly ["/api/payment-processing/direct_debit/entities", ...GetApiPaymentProcessingDirectDebitEntitiesParams[]];
export declare const getGetApiPaymentProcessingDirectDebitEntitiesQueryOptions: <TData = AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingDirectDebitEntitiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingDirectDebitEntitiesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingDirectDebitEntities>>>;
export declare type GetApiPaymentProcessingDirectDebitEntitiesQueryError = AxiosError<unknown>;
/**
 * @summary Search direct debit entities
 */
export declare const useGetApiPaymentProcessingDirectDebitEntities: <TData = AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingDirectDebitEntitiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete direct debit entity
 */
export declare const deleteApiPaymentProcessingDirectDebitEntitiesId: (id: string, params: DeleteApiPaymentProcessingDirectDebitEntitiesIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getDeleteApiPaymentProcessingDirectDebitEntitiesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        params: DeleteApiPaymentProcessingDirectDebitEntitiesIdParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    params: DeleteApiPaymentProcessingDirectDebitEntitiesIdParams;
}, TContext>;
export declare type DeleteApiPaymentProcessingDirectDebitEntitiesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPaymentProcessingDirectDebitEntitiesId>>>;
export declare type DeleteApiPaymentProcessingDirectDebitEntitiesIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete direct debit entity
 */
export declare const useDeleteApiPaymentProcessingDirectDebitEntitiesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        params: DeleteApiPaymentProcessingDirectDebitEntitiesIdParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    params: DeleteApiPaymentProcessingDirectDebitEntitiesIdParams;
}, TContext>;
/**
 * @summary Set default direct debit entity
 */
export declare const patchApiPaymentProcessingDirectDebitEntitiesIdSetDefault: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPatchApiPaymentProcessingDirectDebitEntitiesIdSetDefaultMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PatchApiPaymentProcessingDirectDebitEntitiesIdSetDefaultMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentProcessingDirectDebitEntitiesIdSetDefault>>>;
export declare type PatchApiPaymentProcessingDirectDebitEntitiesIdSetDefaultMutationError = AxiosError<unknown>;
/**
 * @summary Set default direct debit entity
 */
export declare const usePatchApiPaymentProcessingDirectDebitEntitiesIdSetDefault: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search direct debit entities
 */
export declare const getApiPaymentProcessingCrmDirectDebitEntities: (params?: GetApiPaymentProcessingCrmDirectDebitEntitiesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitEntityManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesQueryKey: (params?: GetApiPaymentProcessingCrmDirectDebitEntitiesParams) => readonly ["/api/payment-processing/crm/direct_debit/entities", ...GetApiPaymentProcessingCrmDirectDebitEntitiesParams[]];
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesQueryOptions: <TData = AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitEntitiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDirectDebitEntities>>>;
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesQueryError = AxiosError<unknown>;
/**
 * @summary Search direct debit entities
 */
export declare const useGetApiPaymentProcessingCrmDirectDebitEntities: <TData = AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitEntitiesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntityManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Set default direct debit entity
 */
export declare const patchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefault: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPatchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefaultMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PatchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefaultMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefault>>>;
export declare type PatchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefaultMutationError = AxiosError<unknown>;
/**
 * @summary Set default direct debit entity
 */
export declare const usePatchApiPaymentProcessingCrmDirectDebitEntitiesIdSetDefault: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get default direct debit entity
 */
export declare const getApiPaymentProcessingCrmDirectDebitEntitiesDefault: (params: GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitEntity>>;
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesDefaultQueryKey: (params: GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams) => readonly ["/api/payment-processing/crm/direct_debit/entities/default", ...GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams[]];
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesDefaultQueryOptions: <TData = AxiosResponse<DataDirectDebitEntity, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDirectDebitEntitiesDefault>>>;
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultQueryError = AxiosError<unknown>;
/**
 * @summary Get default direct debit entity
 */
export declare const useGetApiPaymentProcessingCrmDirectDebitEntitiesDefault: <TData = AxiosResponse<DataDirectDebitEntity, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentProcessingCrmDirectDebitEntitiesDefaultParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitEntity, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search direct debit requests
 */
export declare const getApiPaymentProcessingCrmDirectDebitRequests: (params?: GetApiPaymentProcessingCrmDirectDebitRequestsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectDebitRequestManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmDirectDebitRequestsQueryKey: (params?: GetApiPaymentProcessingCrmDirectDebitRequestsParams) => readonly ["/api/payment-processing/crm/direct_debit/requests", ...GetApiPaymentProcessingCrmDirectDebitRequestsParams[]];
export declare const getGetApiPaymentProcessingCrmDirectDebitRequestsQueryOptions: <TData = AxiosResponse<DataDirectDebitRequestManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitRequestsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitRequestManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDirectDebitRequestManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDirectDebitRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDirectDebitRequests>>>;
export declare type GetApiPaymentProcessingCrmDirectDebitRequestsQueryError = AxiosError<unknown>;
/**
 * @summary Search direct debit requests
 */
export declare const useGetApiPaymentProcessingCrmDirectDebitRequests: <TData = AxiosResponse<DataDirectDebitRequestManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitRequestsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDirectDebitRequestManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get direct debit requests count by statuses
 */
export declare const getApiPaymentProcessingCrmDirectDebitRequestsCountByStatuses: (params?: GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDDRequestsCountByStatusesResponseMany>>;
export declare const getGetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesQueryKey: (params?: GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams) => readonly ["/api/payment-processing/crm/direct_debit/requests/count/by_statuses", ...GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams[]];
export declare const getGetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesQueryOptions: <TData = AxiosResponse<DataDDRequestsCountByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDDRequestsCountByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDDRequestsCountByStatusesResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDirectDebitRequestsCountByStatuses>>>;
export declare type GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get direct debit requests count by statuses
 */
export declare const useGetApiPaymentProcessingCrmDirectDebitRequestsCountByStatuses: <TData = AxiosResponse<DataDDRequestsCountByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitRequestsCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDDRequestsCountByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete direct debit entity
 */
export declare const deleteApiPaymentProcessingCrmDirectDebitEntitiesId: (id: string, params: DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getDeleteApiPaymentProcessingCrmDirectDebitEntitiesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        params: DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    params: DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams;
}, TContext>;
export declare type DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPaymentProcessingCrmDirectDebitEntitiesId>>>;
export declare type DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete direct debit entity
 */
export declare const useDeleteApiPaymentProcessingCrmDirectDebitEntitiesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        params: DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    params: DeleteApiPaymentProcessingCrmDirectDebitEntitiesIdParams;
}, TContext>;
/**
 * @summary Get direct debit entities count by statuses
 */
export declare const getApiPaymentProcessingCrmDirectDebitEntitiesCountByStatuses: (params?: GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDDEntitiesCountByStatusesResponseMany>>;
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesQueryKey: (params?: GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams) => readonly ["/api/payment-processing/crm/direct_debit/entities/count/by_statuses", ...GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams[]];
export declare const getGetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesQueryOptions: <TData = AxiosResponse<DataDDEntitiesCountByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDDEntitiesCountByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDDEntitiesCountByStatusesResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmDirectDebitEntitiesCountByStatuses>>>;
export declare type GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get direct debit entities count by statuses
 */
export declare const useGetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatuses: <TData = AxiosResponse<DataDDEntitiesCountByStatusesResponseMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmDirectDebitEntitiesCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDDEntitiesCountByStatusesResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Return full information about searched banks
 */
export declare const getApiPaymentProcessingBanks: (params?: GetApiPaymentProcessingBanksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksMany>>;
export declare const getGetApiPaymentProcessingBanksQueryKey: (params?: GetApiPaymentProcessingBanksParams) => readonly ["/api/payment-processing/banks", ...GetApiPaymentProcessingBanksParams[]];
export declare const getGetApiPaymentProcessingBanksQueryOptions: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingBanksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingBanks>>>;
export declare type GetApiPaymentProcessingBanksQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched banks
 */
export declare const useGetApiPaymentProcessingBanks: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search banks by local bank code
 */
export declare const getApiPaymentProcessingBanksParentIdLocalBankCodes: (parentId: string, params: GetApiPaymentProcessingBanksParentIdLocalBankCodesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksManyPaginated>>;
export declare const getGetApiPaymentProcessingBanksParentIdLocalBankCodesQueryKey: (parentId: string, params: GetApiPaymentProcessingBanksParentIdLocalBankCodesParams) => readonly [`/api/payment-processing/banks/${string}/local_bank_codes`, ...GetApiPaymentProcessingBanksParentIdLocalBankCodesParams[]];
export declare const getGetApiPaymentProcessingBanksParentIdLocalBankCodesQueryOptions: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(parentId: string, params: GetApiPaymentProcessingBanksParentIdLocalBankCodesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingBanksParentIdLocalBankCodesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingBanksParentIdLocalBankCodes>>>;
export declare type GetApiPaymentProcessingBanksParentIdLocalBankCodesQueryError = AxiosError<unknown>;
/**
 * @summary Search banks by local bank code
 */
export declare const useGetApiPaymentProcessingBanksParentIdLocalBankCodes: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(parentId: string, params: GetApiPaymentProcessingBanksParentIdLocalBankCodesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Return full information about searched banks with pagination
 */
export declare const getApiPaymentProcessingCrmBanksPaginated: (params?: GetApiPaymentProcessingCrmBanksPaginatedParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmBanksPaginatedQueryKey: (params?: GetApiPaymentProcessingCrmBanksPaginatedParams) => readonly ["/api/payment-processing/crm/banks/paginated", ...GetApiPaymentProcessingCrmBanksPaginatedParams[]];
export declare const getGetApiPaymentProcessingCrmBanksPaginatedQueryOptions: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmBanksPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmBanksPaginatedQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmBanksPaginated>>>;
export declare type GetApiPaymentProcessingCrmBanksPaginatedQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched banks with pagination
 */
export declare const useGetApiPaymentProcessingCrmBanksPaginated: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmBanksPaginatedParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update bank by id
 */
export declare const patchApiPaymentProcessingCrmBanksId: (id: string, banksOnlyAccountNumberRegexPriority: BanksOnlyAccountNumberRegexPriority, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanks>>;
export declare const getPatchApiPaymentProcessingCrmBanksIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
        id: string;
        data: BanksOnlyAccountNumberRegexPriority;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
    id: string;
    data: BanksOnlyAccountNumberRegexPriority;
}, TContext>;
export declare type PatchApiPaymentProcessingCrmBanksIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentProcessingCrmBanksId>>>;
export declare type PatchApiPaymentProcessingCrmBanksIdMutationBody = BanksOnlyAccountNumberRegexPriority;
export declare type PatchApiPaymentProcessingCrmBanksIdMutationError = AxiosError<unknown>;
/**
 * @summary Update bank by id
 */
export declare const usePatchApiPaymentProcessingCrmBanksId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
        id: string;
        data: BanksOnlyAccountNumberRegexPriority;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBanks, any>, TError, {
    id: string;
    data: BanksOnlyAccountNumberRegexPriority;
}, TContext>;
/**
 * @summary Search banks by local bank code
 */
export declare const getApiPaymentProcessingCrmBanksParentIdLocalBankCodes: (parentId: string, params: GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksManyPaginated>>;
export declare const getGetApiPaymentProcessingCrmBanksParentIdLocalBankCodesQueryKey: (parentId: string, params: GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams) => readonly [`/api/payment-processing/crm/banks/${string}/local_bank_codes`, ...GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams[]];
export declare const getGetApiPaymentProcessingCrmBanksParentIdLocalBankCodesQueryOptions: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(parentId: string, params: GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmBanksParentIdLocalBankCodes>>>;
export declare type GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesQueryError = AxiosError<unknown>;
/**
 * @summary Search banks by local bank code
 */
export declare const useGetApiPaymentProcessingCrmBanksParentIdLocalBankCodes: <TData = AxiosResponse<DataBanksManyPaginated, any>, TError = AxiosError<unknown, any>>(parentId: string, params: GetApiPaymentProcessingCrmBanksParentIdLocalBankCodesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Return full information about searched banks
 */
export declare const getApiPaymentProcessingCrmBanks: (params?: GetApiPaymentProcessingCrmBanksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksMany>>;
export declare const getGetApiPaymentProcessingCrmBanksQueryKey: (params?: GetApiPaymentProcessingCrmBanksParams) => readonly ["/api/payment-processing/crm/banks", ...GetApiPaymentProcessingCrmBanksParams[]];
export declare const getGetApiPaymentProcessingCrmBanksQueryOptions: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmBanksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmBanks>>>;
export declare type GetApiPaymentProcessingCrmBanksQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched banks
 */
export declare const useGetApiPaymentProcessingCrmBanks: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Return full information about searched providers
 */
export declare const getApiPaymentProcessingCrmProviders: (params?: GetApiPaymentProcessingCrmProvidersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProvidersMany>>;
export declare const getGetApiPaymentProcessingCrmProvidersQueryKey: (params?: GetApiPaymentProcessingCrmProvidersParams) => readonly ["/api/payment-processing/crm/providers", ...GetApiPaymentProcessingCrmProvidersParams[]];
export declare const getGetApiPaymentProcessingCrmProvidersQueryOptions: <TData = AxiosResponse<DataProvidersMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmProvidersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProvidersMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataProvidersMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmProvidersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmProviders>>>;
export declare type GetApiPaymentProcessingCrmProvidersQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched providers
 */
export declare const useGetApiPaymentProcessingCrmProviders: <TData = AxiosResponse<DataProvidersMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentProcessingCrmProvidersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataProvidersMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Deactivate current disbursement provider & activate another by id
 */
export declare const postApiPaymentProcessingCrmProvidersDisbursementsActivate: (providersFiltersOnlyId: ProvidersFiltersOnlyId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataProvidersMany>>;
export declare const getPostApiPaymentProcessingCrmProvidersDisbursementsActivateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProvidersMany, any>, TError, {
        data: ProvidersFiltersOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataProvidersMany, any>, TError, {
    data: ProvidersFiltersOnlyId;
}, TContext>;
export declare type PostApiPaymentProcessingCrmProvidersDisbursementsActivateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmProvidersDisbursementsActivate>>>;
export declare type PostApiPaymentProcessingCrmProvidersDisbursementsActivateMutationBody = ProvidersFiltersOnlyId;
export declare type PostApiPaymentProcessingCrmProvidersDisbursementsActivateMutationError = AxiosError<unknown>;
/**
 * @summary Deactivate current disbursement provider & activate another by id
 */
export declare const usePostApiPaymentProcessingCrmProvidersDisbursementsActivate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataProvidersMany, any>, TError, {
        data: ProvidersFiltersOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataProvidersMany, any>, TError, {
    data: ProvidersFiltersOnlyId;
}, TContext>;
/**
 * @summary Validate bank account by number
 */
export declare const postApiPaymentProcessingCrmValidatorsAccount: (validateBankAccountPayload: ValidateBankAccountPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataValidateBankAccountResult>>;
export declare const getPostApiPaymentProcessingCrmValidatorsAccountMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataValidateBankAccountResult, any>, TError, {
        data: ValidateBankAccountPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataValidateBankAccountResult, any>, TError, {
    data: ValidateBankAccountPayload;
}, TContext>;
export declare type PostApiPaymentProcessingCrmValidatorsAccountMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmValidatorsAccount>>>;
export declare type PostApiPaymentProcessingCrmValidatorsAccountMutationBody = ValidateBankAccountPayload;
export declare type PostApiPaymentProcessingCrmValidatorsAccountMutationError = AxiosError<unknown>;
/**
 * @summary Validate bank account by number
 */
export declare const usePostApiPaymentProcessingCrmValidatorsAccount: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataValidateBankAccountResult, any>, TError, {
        data: ValidateBankAccountPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataValidateBankAccountResult, any>, TError, {
    data: ValidateBankAccountPayload;
}, TContext>;
/**
 * @summary Get disbursement possible statuses
 */
export declare const getApiPaymentProcessingCrmReferencesDisbursementStatuses: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursementStatuses>>;
export declare const getGetApiPaymentProcessingCrmReferencesDisbursementStatusesQueryKey: () => readonly ["/api/payment-processing/crm/references/disbursement-statuses"];
export declare const getGetApiPaymentProcessingCrmReferencesDisbursementStatusesQueryOptions: <TData = AxiosResponse<DataDisbursementStatuses, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementStatuses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDisbursementStatuses, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingCrmReferencesDisbursementStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingCrmReferencesDisbursementStatuses>>>;
export declare type GetApiPaymentProcessingCrmReferencesDisbursementStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get disbursement possible statuses
 */
export declare const useGetApiPaymentProcessingCrmReferencesDisbursementStatuses: <TData = AxiosResponse<DataDisbursementStatuses, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementStatuses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create disburse by clients contract
 */
export declare const postApiPaymentProcessingCrmDisburse: (createDisbursePayloadBody: CreateDisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisburseMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisburseMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisburse>>>;
export declare type PostApiPaymentProcessingCrmDisburseMutationBody = CreateDisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisburseMutationError = AxiosError<unknown>;
/**
 * @summary Create disburse by clients contract
 */
export declare const usePostApiPaymentProcessingCrmDisburse: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayloadBody;
}, TContext>;
/**
 * @summary Complete disburse by external id
 */
export declare const postApiPaymentProcessingCrmDisburseComplete: (disbursePayloadBody: DisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisburseCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: DisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: DisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisburseCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisburseComplete>>>;
export declare type PostApiPaymentProcessingCrmDisburseCompleteMutationBody = DisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisburseCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete disburse by external id
 */
export declare const usePostApiPaymentProcessingCrmDisburseComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: DisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: DisbursePayloadBody;
}, TContext>;
/**
 * @summary Check disbursement by ID
 */
export declare const postApiPaymentProcessingCrmDisburseIdCheck: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisburseIdCheckMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisburseIdCheckMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisburseIdCheck>>>;
export declare type PostApiPaymentProcessingCrmDisburseIdCheckMutationError = AxiosError<unknown>;
/**
 * @summary Check disbursement by ID
 */
export declare const usePostApiPaymentProcessingCrmDisburseIdCheck: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Complete disburse by id
 */
export declare const postApiPaymentProcessingCrmDisburseIdComplete: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisburseIdCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisburseIdCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisburseIdComplete>>>;
export declare type PostApiPaymentProcessingCrmDisburseIdCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisburseIdComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Fail disburse by id
 */
export declare const postApiPaymentProcessingCrmDisburseIdFail: (id: string, failDisbursePayloadBody: FailDisbursePayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentProcessingCrmDisburseIdFailMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: FailDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: FailDisbursePayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDisburseIdFailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDisburseIdFail>>>;
export declare type PostApiPaymentProcessingCrmDisburseIdFailMutationBody = FailDisbursePayloadBody;
export declare type PostApiPaymentProcessingCrmDisburseIdFailMutationError = AxiosError<unknown>;
/**
 * @summary Fail disburse by id
 */
export declare const usePostApiPaymentProcessingCrmDisburseIdFail: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        id: string;
        data: FailDisbursePayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    id: string;
    data: FailDisbursePayloadBody;
}, TContext>;
/**
 * @summary Validate contract number
 */
export declare const postApiPaymentProcessingDirectPayPaymentsValidate: (paymentInfoPayload: PaymentInfoPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentProcessingDirectPayPaymentsValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: PaymentInfoPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: PaymentInfoPayload;
}, TContext>;
export declare type PostApiPaymentProcessingDirectPayPaymentsValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingDirectPayPaymentsValidate>>>;
export declare type PostApiPaymentProcessingDirectPayPaymentsValidateMutationBody = PaymentInfoPayload;
export declare type PostApiPaymentProcessingDirectPayPaymentsValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate contract number
 */
export declare const usePostApiPaymentProcessingDirectPayPaymentsValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: PaymentInfoPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: PaymentInfoPayload;
}, TContext>;
/**
 * @summary Initiate payment
 */
export declare const postApiPaymentProcessingDirectPayPaymentsInitiate: (directPayInitiatePaymentPayloadBody: DirectPayInitiatePaymentPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectPayInitiatePaymentResponse>>;
export declare const getPostApiPaymentProcessingDirectPayPaymentsInitiateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
        data: DirectPayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
    data: DirectPayInitiatePaymentPayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingDirectPayPaymentsInitiateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingDirectPayPaymentsInitiate>>>;
export declare type PostApiPaymentProcessingDirectPayPaymentsInitiateMutationBody = DirectPayInitiatePaymentPayloadBody;
export declare type PostApiPaymentProcessingDirectPayPaymentsInitiateMutationError = AxiosError<unknown>;
/**
 * @summary Initiate payment
 */
export declare const usePostApiPaymentProcessingDirectPayPaymentsInitiate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
        data: DirectPayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
    data: DirectPayInitiatePaymentPayloadBody;
}, TContext>;
/**
 * @summary Initiate payment
 */
export declare const postApiPaymentProcessingCrmDirectPayPaymentsInitiate: (directPayInitiatePaymentPayloadBody: DirectPayInitiatePaymentPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDirectPayInitiatePaymentResponse>>;
export declare const getPostApiPaymentProcessingCrmDirectPayPaymentsInitiateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
        data: DirectPayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
    data: DirectPayInitiatePaymentPayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmDirectPayPaymentsInitiateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmDirectPayPaymentsInitiate>>>;
export declare type PostApiPaymentProcessingCrmDirectPayPaymentsInitiateMutationBody = DirectPayInitiatePaymentPayloadBody;
export declare type PostApiPaymentProcessingCrmDirectPayPaymentsInitiateMutationError = AxiosError<unknown>;
/**
 * @summary Initiate payment
 */
export declare const usePostApiPaymentProcessingCrmDirectPayPaymentsInitiate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
        data: DirectPayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDirectPayInitiatePaymentResponse, any>, TError, {
    data: DirectPayInitiatePaymentPayloadBody;
}, TContext>;
/**
 * @summary Update payment
 */
export declare const postApiPaymentProcessingDirectPayPaymentsUpdate: (directPayUpdatePaymentPayload: DirectPayUpdatePaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentProcessingDirectPayPaymentsUpdateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: DirectPayUpdatePaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: DirectPayUpdatePaymentPayload;
}, TContext>;
export declare type PostApiPaymentProcessingDirectPayPaymentsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingDirectPayPaymentsUpdate>>>;
export declare type PostApiPaymentProcessingDirectPayPaymentsUpdateMutationBody = DirectPayUpdatePaymentPayload;
export declare type PostApiPaymentProcessingDirectPayPaymentsUpdateMutationError = AxiosError<unknown>;
/**
 * @summary Update payment
 */
export declare const usePostApiPaymentProcessingDirectPayPaymentsUpdate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: DirectPayUpdatePaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: DirectPayUpdatePaymentPayload;
}, TContext>;
/**
 * @summary Create repayment
 */
export declare const postApiPaymentProcessingDirectPayPayments: (paymentPayload1: PaymentPayload1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentProcessingDirectPayPaymentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload1;
}, TContext>;
export declare type PostApiPaymentProcessingDirectPayPaymentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingDirectPayPayments>>>;
export declare type PostApiPaymentProcessingDirectPayPaymentsMutationBody = PaymentPayload1;
export declare type PostApiPaymentProcessingDirectPayPaymentsMutationError = AxiosError<unknown>;
/**
 * @summary Create repayment
 */
export declare const usePostApiPaymentProcessingDirectPayPayments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload1;
}, TContext>;
/**
 * @summary Initiate payment
 */
export declare const postApiPaymentProcessingWebxpayPaymentsInitiate: (webxpayInitiatePaymentPayloadBody: WebxpayInitiatePaymentPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWebxpayInitiatePaymentResponse>>;
export declare const getPostApiPaymentProcessingWebxpayPaymentsInitiateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
        data: WebxpayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
    data: WebxpayInitiatePaymentPayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingWebxpayPaymentsInitiateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingWebxpayPaymentsInitiate>>>;
export declare type PostApiPaymentProcessingWebxpayPaymentsInitiateMutationBody = WebxpayInitiatePaymentPayloadBody;
export declare type PostApiPaymentProcessingWebxpayPaymentsInitiateMutationError = AxiosError<unknown>;
/**
 * @summary Initiate payment
 */
export declare const usePostApiPaymentProcessingWebxpayPaymentsInitiate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
        data: WebxpayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
    data: WebxpayInitiatePaymentPayloadBody;
}, TContext>;
/**
 * @summary Initiate payment
 */
export declare const postApiPaymentProcessingCrmWebxpayPaymentsInitiate: (webxpayInitiatePaymentPayloadBody: WebxpayInitiatePaymentPayloadBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWebxpayInitiatePaymentResponse>>;
export declare const getPostApiPaymentProcessingCrmWebxpayPaymentsInitiateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
        data: WebxpayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
    data: WebxpayInitiatePaymentPayloadBody;
}, TContext>;
export declare type PostApiPaymentProcessingCrmWebxpayPaymentsInitiateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCrmWebxpayPaymentsInitiate>>>;
export declare type PostApiPaymentProcessingCrmWebxpayPaymentsInitiateMutationBody = WebxpayInitiatePaymentPayloadBody;
export declare type PostApiPaymentProcessingCrmWebxpayPaymentsInitiateMutationError = AxiosError<unknown>;
/**
 * @summary Initiate payment
 */
export declare const usePostApiPaymentProcessingCrmWebxpayPaymentsInitiate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
        data: WebxpayInitiatePaymentPayloadBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWebxpayInitiatePaymentResponse, any>, TError, {
    data: WebxpayInitiatePaymentPayloadBody;
}, TContext>;
/**
 * @summary Validate contract number
 */
export declare const postApiPaymentProcessingCargillsPaymentsValidate: (paymentInfoPayload1: PaymentInfoPayload1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentInfoResponse>>;
export declare const getPostApiPaymentProcessingCargillsPaymentsValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentInfoResponse, any>, TError, {
        data: PaymentInfoPayload1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentInfoResponse, any>, TError, {
    data: PaymentInfoPayload1;
}, TContext>;
export declare type PostApiPaymentProcessingCargillsPaymentsValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCargillsPaymentsValidate>>>;
export declare type PostApiPaymentProcessingCargillsPaymentsValidateMutationBody = PaymentInfoPayload1;
export declare type PostApiPaymentProcessingCargillsPaymentsValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate contract number
 */
export declare const usePostApiPaymentProcessingCargillsPaymentsValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentInfoResponse, any>, TError, {
        data: PaymentInfoPayload1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentInfoResponse, any>, TError, {
    data: PaymentInfoPayload1;
}, TContext>;
/**
 * @summary Create repayment
 */
export declare const postApiPaymentProcessingCargillsPayments: (paymentPayload2: PaymentPayload2, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentResponse>>;
export declare const getPostApiPaymentProcessingCargillsPaymentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentResponse, any>, TError, {
        data: PaymentPayload2;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentResponse, any>, TError, {
    data: PaymentPayload2;
}, TContext>;
export declare type PostApiPaymentProcessingCargillsPaymentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingCargillsPayments>>>;
export declare type PostApiPaymentProcessingCargillsPaymentsMutationBody = PaymentPayload2;
export declare type PostApiPaymentProcessingCargillsPaymentsMutationError = AxiosError<unknown>;
/**
 * @summary Create repayment
 */
export declare const usePostApiPaymentProcessingCargillsPayments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentResponse, any>, TError, {
        data: PaymentPayload2;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentResponse, any>, TError, {
    data: PaymentPayload2;
}, TContext>;
/**
 * @summary Validate contract number
 */
export declare const postApiPaymentProcessingNdbPaymentsValidate: (params: PostApiPaymentProcessingNdbPaymentsValidateParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentProcessingNdbPaymentsValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        params: PostApiPaymentProcessingNdbPaymentsValidateParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    params: PostApiPaymentProcessingNdbPaymentsValidateParams;
}, TContext>;
export declare type PostApiPaymentProcessingNdbPaymentsValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingNdbPaymentsValidate>>>;
export declare type PostApiPaymentProcessingNdbPaymentsValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate contract number
 */
export declare const usePostApiPaymentProcessingNdbPaymentsValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        params: PostApiPaymentProcessingNdbPaymentsValidateParams;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    params: PostApiPaymentProcessingNdbPaymentsValidateParams;
}, TContext>;
/**
 * @summary Create payment
 */
export declare const postApiPaymentProcessingNdbPayments: (nDBBankPaymentPayload: NDBBankPaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentProcessingNdbPaymentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: NDBBankPaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    data: NDBBankPaymentPayload;
}, TContext>;
export declare type PostApiPaymentProcessingNdbPaymentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingNdbPayments>>>;
export declare type PostApiPaymentProcessingNdbPaymentsMutationBody = NDBBankPaymentPayload;
export declare type PostApiPaymentProcessingNdbPaymentsMutationError = AxiosError<unknown>;
/**
 * @summary Create payment
 */
export declare const usePostApiPaymentProcessingNdbPayments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: NDBBankPaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    data: NDBBankPaymentPayload;
}, TContext>;
/**
 * @summary Validate contract number
 */
export declare const postApiPaymentProcessingPayAndGoPaymentsValidate: (paymentInfoPayload2: PaymentInfoPayload2, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataValidatePaymentInfoRepose>>;
export declare const getPostApiPaymentProcessingPayAndGoPaymentsValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataValidatePaymentInfoRepose, any>, TError, {
        data: PaymentInfoPayload2;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataValidatePaymentInfoRepose, any>, TError, {
    data: PaymentInfoPayload2;
}, TContext>;
export declare type PostApiPaymentProcessingPayAndGoPaymentsValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingPayAndGoPaymentsValidate>>>;
export declare type PostApiPaymentProcessingPayAndGoPaymentsValidateMutationBody = PaymentInfoPayload2;
export declare type PostApiPaymentProcessingPayAndGoPaymentsValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate contract number
 */
export declare const usePostApiPaymentProcessingPayAndGoPaymentsValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataValidatePaymentInfoRepose, any>, TError, {
        data: PaymentInfoPayload2;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataValidatePaymentInfoRepose, any>, TError, {
    data: PaymentInfoPayload2;
}, TContext>;
/**
 * @summary Create repayment
 */
export declare const postApiPaymentProcessingPayAndGoPayments: (paymentPayload3: PaymentPayload3, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentProcessingPayAndGoPaymentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload3;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload3;
}, TContext>;
export declare type PostApiPaymentProcessingPayAndGoPaymentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingPayAndGoPayments>>>;
export declare type PostApiPaymentProcessingPayAndGoPaymentsMutationBody = PaymentPayload3;
export declare type PostApiPaymentProcessingPayAndGoPaymentsMutationError = AxiosError<unknown>;
/**
 * @summary Create repayment
 */
export declare const usePostApiPaymentProcessingPayAndGoPayments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload3;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload3;
}, TContext>;
/**
 * @summary Get payment by external id
 */
export declare const getApiPaymentProcessingPayAndGoPaymentsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetPaymentRepose>>;
export declare const getGetApiPaymentProcessingPayAndGoPaymentsIdQueryKey: (id: string) => readonly [`/api/payment-processing/pay_and_go/payments/${string}`];
export declare const getGetApiPaymentProcessingPayAndGoPaymentsIdQueryOptions: <TData = AxiosResponse<DataGetPaymentRepose, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetPaymentRepose, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetPaymentRepose, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentProcessingPayAndGoPaymentsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentProcessingPayAndGoPaymentsId>>>;
export declare type GetApiPaymentProcessingPayAndGoPaymentsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get payment by external id
 */
export declare const useGetApiPaymentProcessingPayAndGoPaymentsId: <TData = AxiosResponse<DataGetPaymentRepose, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetPaymentRepose, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload file with payments
 */
export declare const postApiPaymentProcessingExcelFilePayments: (postApiPaymentProcessingExcelFilePaymentsBody: PostApiPaymentProcessingExcelFilePaymentsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentsResponse>>;
export declare const getPostApiPaymentProcessingExcelFilePaymentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentsResponse, any>, TError, {
        data: PostApiPaymentProcessingExcelFilePaymentsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPaymentsResponse, any>, TError, {
    data: PostApiPaymentProcessingExcelFilePaymentsBody;
}, TContext>;
export declare type PostApiPaymentProcessingExcelFilePaymentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentProcessingExcelFilePayments>>>;
export declare type PostApiPaymentProcessingExcelFilePaymentsMutationBody = PostApiPaymentProcessingExcelFilePaymentsBody;
export declare type PostApiPaymentProcessingExcelFilePaymentsMutationError = AxiosError<unknown>;
/**
 * @summary Upload file with payments
 */
export declare const usePostApiPaymentProcessingExcelFilePayments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPaymentsResponse, any>, TError, {
        data: PostApiPaymentProcessingExcelFilePaymentsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPaymentsResponse, any>, TError, {
    data: PostApiPaymentProcessingExcelFilePaymentsBody;
}, TContext>;
