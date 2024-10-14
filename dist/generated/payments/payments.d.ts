import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AmmanaBillUpdate, BanksOnlyAccountNumberRegexPriority, ClientPayloadRepayOrder, CompleteDisbursePayload, CreateDisbursePayload, DataBankAccount, DataBanks, DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, DataBanksMany, DataBill, DataBillInquiryResponse, DataBillManyPaginated, DataClientPaymentManyPaginated, DataClientPaymentMethodMany, DataDebitCard, DataDebitCardExcludeExternalIdRegisterRespValidateResp, DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, DataDebitCardManyPaginated, DataDisbursement, DataDisbursementManyPaginated, DataEcommerceNumberInquiryResponse, DataLivenessResponse, DataPackageInquiryResponse, DataPayment, DataPaymentManyPaginated, DataPaymentMethodMany, DataPurchaseCategoryMany, DataPurchaseServiceMany, DataQRBalance, DataQRClient, DataQRClientExcludeExternalIdMeta, DataQRInfoResponse, DataQRPayment, DataQRPaymentManyPaginated, DataReadinessResponse, DataRepayOrder, DataRepayOrderManyPaginated, DataSuccessResponse, DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour, DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId, ForceCompletePaymentPayload, GetApiPaymentsCrmBankAccountParams, GetApiPaymentsCrmBanksParams, GetApiPaymentsCrmDebitCardsParams, GetApiPaymentsCrmDisburseParams, GetApiPaymentsCrmFullPaymentsParams, GetApiPaymentsCrmPaymentsParams, GetApiPaymentsCrmPurchaseParams, GetApiPaymentsCrmPurchaseQrPaymentParams, GetApiPaymentsCrmRepayOrdersParams, GetApiPaymentsDebitCardsParams, GetApiPaymentsOrdersParams, GetApiPaymentsPurchaseAvailableServicesParams, GetApiPaymentsPurchaseInquiryBillParams, GetApiPaymentsPurchaseInquiryEcommerceNumberParams, GetApiPaymentsPurchaseInquiryPackagesElectricityParams, GetApiPaymentsPurchaseInquiryPackagesParams, GetApiPaymentsPurchaseQrInfoParams, InitiateQRPayment, PaymentPayload, PurchasePayload, QRClientUpdate, QRPaymentOnlyOtp, QRPaymentUpdate, RepayOrderPayload, ValidateCardRequestBody } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiPaymentsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiPaymentsReadinessQueryKey: () => readonly ["/api/payments/readiness"];
export declare const getGetApiPaymentsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsReadiness>>>;
export declare type GetApiPaymentsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiPaymentsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiPaymentsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiPaymentsLivenessQueryKey: () => readonly ["/api/payments/liveness"];
export declare const getGetApiPaymentsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsLiveness>>>;
export declare type GetApiPaymentsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiPaymentsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiPaymentsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiPaymentsMetricsQueryKey: () => readonly ["/api/payments/metrics"];
export declare const getGetApiPaymentsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsMetrics>>>;
export declare type GetApiPaymentsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiPaymentsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List of banks
 */
export declare const getApiPaymentsBanks: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated>>;
export declare const getGetApiPaymentsBanksQueryKey: () => readonly ["/api/payments/banks"];
export declare const getGetApiPaymentsBanksQueryOptions: <TData = AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsBanksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsBanks>>>;
export declare type GetApiPaymentsBanksQueryError = AxiosError<unknown>;
/**
 * @summary List of banks
 */
export declare const useGetApiPaymentsBanks: <TData = AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksExcludeAdvanceAiCodeArchivedCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create repay orders
 */
export declare const postApiPaymentsOrders: (clientPayloadRepayOrder: ClientPayloadRepayOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrder>>;
export declare const getPostApiPaymentsOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        data: ClientPayloadRepayOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
    data: ClientPayloadRepayOrder;
}, TContext>;
export declare type PostApiPaymentsOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsOrders>>>;
export declare type PostApiPaymentsOrdersMutationBody = ClientPayloadRepayOrder;
export declare type PostApiPaymentsOrdersMutationError = AxiosError<unknown>;
/**
 * @summary create repay orders
 */
export declare const usePostApiPaymentsOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        data: ClientPayloadRepayOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRepayOrder, any>, TError, {
    data: ClientPayloadRepayOrder;
}, TContext>;
/**
 * @summary search own repay orders
 */
export declare const getApiPaymentsOrders: (params?: GetApiPaymentsOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrderManyPaginated>>;
export declare const getGetApiPaymentsOrdersQueryKey: (params?: GetApiPaymentsOrdersParams) => readonly ["/api/payments/orders", ...GetApiPaymentsOrdersParams[]];
export declare const getGetApiPaymentsOrdersQueryOptions: <TData = AxiosResponse<DataRepayOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsOrders>>>;
export declare type GetApiPaymentsOrdersQueryError = AxiosError<unknown>;
/**
 * @summary search own repay orders
 */
export declare const useGetApiPaymentsOrders: <TData = AxiosResponse<DataRepayOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search available payment methods
 */
export declare const getApiPaymentsPaymentsAvailable: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientPaymentMethodMany>>;
export declare const getGetApiPaymentsPaymentsAvailableQueryKey: () => readonly ["/api/payments/payments/available"];
export declare const getGetApiPaymentsPaymentsAvailableQueryOptions: <TData = AxiosResponse<DataClientPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientPaymentMethodMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPaymentsAvailableQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPaymentsAvailable>>>;
export declare type GetApiPaymentsPaymentsAvailableQueryError = AxiosError<unknown>;
/**
 * @summary Search available payment methods
 */
export declare const useGetApiPaymentsPaymentsAvailable: <TData = AxiosResponse<DataClientPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get purchase categories
 */
export declare const getApiPaymentsPurchaseCategory: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPurchaseCategoryMany>>;
export declare const getGetApiPaymentsPurchaseCategoryQueryKey: () => readonly ["/api/payments/purchase/category"];
export declare const getGetApiPaymentsPurchaseCategoryQueryOptions: <TData = AxiosResponse<DataPurchaseCategoryMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseCategoryMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPurchaseCategoryMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseCategory>>>;
export declare type GetApiPaymentsPurchaseCategoryQueryError = AxiosError<unknown>;
/**
 * @summary Get purchase categories
 */
export declare const useGetApiPaymentsPurchaseCategory: <TData = AxiosResponse<DataPurchaseCategoryMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseCategoryMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get available services for purchase category
 */
export declare const getApiPaymentsPurchaseAvailableServices: (params: GetApiPaymentsPurchaseAvailableServicesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPurchaseServiceMany>>;
export declare const getGetApiPaymentsPurchaseAvailableServicesQueryKey: (params: GetApiPaymentsPurchaseAvailableServicesParams) => readonly ["/api/payments/purchase/available_services", ...GetApiPaymentsPurchaseAvailableServicesParams[]];
export declare const getGetApiPaymentsPurchaseAvailableServicesQueryOptions: <TData = AxiosResponse<DataPurchaseServiceMany, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseAvailableServicesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseAvailableServicesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseAvailableServices>>>;
export declare type GetApiPaymentsPurchaseAvailableServicesQueryError = AxiosError<unknown>;
/**
 * @summary Get available services for purchase category
 */
export declare const useGetApiPaymentsPurchaseAvailableServices: <TData = AxiosResponse<DataPurchaseServiceMany, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseAvailableServicesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get ecommerce stores
 */
export declare const getApiPaymentsPurchaseEcommerceStores: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPurchaseServiceMany>>;
export declare const getGetApiPaymentsPurchaseEcommerceStoresQueryKey: () => readonly ["/api/payments/purchase/ecommerce_stores"];
export declare const getGetApiPaymentsPurchaseEcommerceStoresQueryOptions: <TData = AxiosResponse<DataPurchaseServiceMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseEcommerceStoresQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseEcommerceStores>>>;
export declare type GetApiPaymentsPurchaseEcommerceStoresQueryError = AxiosError<unknown>;
/**
 * @summary Get ecommerce stores
 */
export declare const useGetApiPaymentsPurchaseEcommerceStores: <TData = AxiosResponse<DataPurchaseServiceMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPurchaseServiceMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get available packages for service
 */
export declare const getApiPaymentsPurchaseInquiryPackages: (params: GetApiPaymentsPurchaseInquiryPackagesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPackageInquiryResponse>>;
export declare const getGetApiPaymentsPurchaseInquiryPackagesQueryKey: (params: GetApiPaymentsPurchaseInquiryPackagesParams) => readonly ["/api/payments/purchase/inquiry_packages", ...GetApiPaymentsPurchaseInquiryPackagesParams[]];
export declare const getGetApiPaymentsPurchaseInquiryPackagesQueryOptions: <TData = AxiosResponse<DataPackageInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryPackagesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseInquiryPackagesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseInquiryPackages>>>;
export declare type GetApiPaymentsPurchaseInquiryPackagesQueryError = AxiosError<unknown>;
/**
 * @summary Get available packages for service
 */
export declare const useGetApiPaymentsPurchaseInquiryPackages: <TData = AxiosResponse<DataPackageInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryPackagesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get available packages for electricity
 */
export declare const getApiPaymentsPurchaseInquiryPackagesElectricity: (params: GetApiPaymentsPurchaseInquiryPackagesElectricityParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPackageInquiryResponse>>;
export declare const getGetApiPaymentsPurchaseInquiryPackagesElectricityQueryKey: (params: GetApiPaymentsPurchaseInquiryPackagesElectricityParams) => readonly ["/api/payments/purchase/inquiry_packages/electricity", ...GetApiPaymentsPurchaseInquiryPackagesElectricityParams[]];
export declare const getGetApiPaymentsPurchaseInquiryPackagesElectricityQueryOptions: <TData = AxiosResponse<DataPackageInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryPackagesElectricityParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseInquiryPackagesElectricityQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseInquiryPackagesElectricity>>>;
export declare type GetApiPaymentsPurchaseInquiryPackagesElectricityQueryError = AxiosError<unknown>;
/**
 * @summary Get available packages for electricity
 */
export declare const useGetApiPaymentsPurchaseInquiryPackagesElectricity: <TData = AxiosResponse<DataPackageInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryPackagesElectricityParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPackageInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get bill for service
 */
export declare const getApiPaymentsPurchaseInquiryBill: (params: GetApiPaymentsPurchaseInquiryBillParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBillInquiryResponse>>;
export declare const getGetApiPaymentsPurchaseInquiryBillQueryKey: (params: GetApiPaymentsPurchaseInquiryBillParams) => readonly ["/api/payments/purchase/inquiry_bill", ...GetApiPaymentsPurchaseInquiryBillParams[]];
export declare const getGetApiPaymentsPurchaseInquiryBillQueryOptions: <TData = AxiosResponse<DataBillInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryBillParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBillInquiryResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseInquiryBillQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseInquiryBill>>>;
export declare type GetApiPaymentsPurchaseInquiryBillQueryError = AxiosError<unknown>;
/**
 * @summary Get bill for service
 */
export declare const useGetApiPaymentsPurchaseInquiryBill: <TData = AxiosResponse<DataBillInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryBillParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get number for ecommerce purchase
 */
export declare const getApiPaymentsPurchaseInquiryEcommerceNumber: (params: GetApiPaymentsPurchaseInquiryEcommerceNumberParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEcommerceNumberInquiryResponse>>;
export declare const getGetApiPaymentsPurchaseInquiryEcommerceNumberQueryKey: (params: GetApiPaymentsPurchaseInquiryEcommerceNumberParams) => readonly ["/api/payments/purchase/inquiry_ecommerce_number", ...GetApiPaymentsPurchaseInquiryEcommerceNumberParams[]];
export declare const getGetApiPaymentsPurchaseInquiryEcommerceNumberQueryOptions: <TData = AxiosResponse<DataEcommerceNumberInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryEcommerceNumberParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEcommerceNumberInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEcommerceNumberInquiryResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseInquiryEcommerceNumberQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseInquiryEcommerceNumber>>>;
export declare type GetApiPaymentsPurchaseInquiryEcommerceNumberQueryError = AxiosError<unknown>;
/**
 * @summary Get number for ecommerce purchase
 */
export declare const useGetApiPaymentsPurchaseInquiryEcommerceNumber: <TData = AxiosResponse<DataEcommerceNumberInquiryResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsPurchaseInquiryEcommerceNumberParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEcommerceNumberInquiryResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get qr client data by client auth
 */
export declare const getApiPaymentsPurchaseQrClient: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRClientExcludeExternalIdMeta>>;
export declare const getGetApiPaymentsPurchaseQrClientQueryKey: () => readonly ["/api/payments/purchase/qr/client"];
export declare const getGetApiPaymentsPurchaseQrClientQueryOptions: <TData = AxiosResponse<DataQRClientExcludeExternalIdMeta, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRClientExcludeExternalIdMeta, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQRClientExcludeExternalIdMeta, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseQrClientQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseQrClient>>>;
export declare type GetApiPaymentsPurchaseQrClientQueryError = AxiosError<unknown>;
/**
 * @summary Get qr client data by client auth
 */
export declare const useGetApiPaymentsPurchaseQrClient: <TData = AxiosResponse<DataQRClientExcludeExternalIdMeta, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRClientExcludeExternalIdMeta, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Customer registration for QR payments
 */
export declare const postApiPaymentsPurchaseQrRegisterCustomer: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRClient>>;
export declare const getPostApiPaymentsPurchaseQrRegisterCustomerMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRClient, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQRClient, any>, TError, void, TContext>;
export declare type PostApiPaymentsPurchaseQrRegisterCustomerMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsPurchaseQrRegisterCustomer>>>;
export declare type PostApiPaymentsPurchaseQrRegisterCustomerMutationError = AxiosError<unknown>;
/**
 * @summary Customer registration for QR payments
 */
export declare const usePostApiPaymentsPurchaseQrRegisterCustomer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRClient, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQRClient, any>, TError, void, TContext>;
/**
 * @summary Inquiry customer wallet balance for QR payments
 */
export declare const getApiPaymentsPurchaseQrInquiryBalance: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRBalance>>;
export declare const getGetApiPaymentsPurchaseQrInquiryBalanceQueryKey: () => readonly ["/api/payments/purchase/qr/inquiry_balance"];
export declare const getGetApiPaymentsPurchaseQrInquiryBalanceQueryOptions: <TData = AxiosResponse<DataQRBalance, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRBalance, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQRBalance, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseQrInquiryBalanceQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseQrInquiryBalance>>>;
export declare type GetApiPaymentsPurchaseQrInquiryBalanceQueryError = AxiosError<unknown>;
/**
 * @summary Inquiry customer wallet balance for QR payments
 */
export declare const useGetApiPaymentsPurchaseQrInquiryBalance: <TData = AxiosResponse<DataQRBalance, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRBalance, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get qr code info for QR payments
 */
export declare const getApiPaymentsPurchaseQrInfo: (params?: GetApiPaymentsPurchaseQrInfoParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRInfoResponse>>;
export declare const getGetApiPaymentsPurchaseQrInfoQueryKey: (params?: GetApiPaymentsPurchaseQrInfoParams) => readonly ["/api/payments/purchase/qr/info", ...GetApiPaymentsPurchaseQrInfoParams[]];
export declare const getGetApiPaymentsPurchaseQrInfoQueryOptions: <TData = AxiosResponse<DataQRInfoResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsPurchaseQrInfoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRInfoResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQRInfoResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsPurchaseQrInfoQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsPurchaseQrInfo>>>;
export declare type GetApiPaymentsPurchaseQrInfoQueryError = AxiosError<unknown>;
/**
 * @summary Get qr code info for QR payments
 */
export declare const useGetApiPaymentsPurchaseQrInfo: <TData = AxiosResponse<DataQRInfoResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsPurchaseQrInfoParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRInfoResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Initiate QR payment
 */
export declare const postApiPaymentsPurchaseQrPaymentInitiate: (initiateQRPayment: InitiateQRPayment, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRPayment>>;
export declare const getPostApiPaymentsPurchaseQrPaymentInitiateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
        data: InitiateQRPayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
    data: InitiateQRPayment;
}, TContext>;
export declare type PostApiPaymentsPurchaseQrPaymentInitiateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsPurchaseQrPaymentInitiate>>>;
export declare type PostApiPaymentsPurchaseQrPaymentInitiateMutationBody = InitiateQRPayment;
export declare type PostApiPaymentsPurchaseQrPaymentInitiateMutationError = AxiosError<unknown>;
/**
 * @summary Initiate QR payment
 */
export declare const usePostApiPaymentsPurchaseQrPaymentInitiate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
        data: InitiateQRPayment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQRPayment, any>, TError, {
    data: InitiateQRPayment;
}, TContext>;
/**
 * @summary Confirm QR payment
 */
export declare const postApiPaymentsPurchaseQrPaymentConfirmOtp: (qRPaymentOnlyOtp: QRPaymentOnlyOtp, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRPayment>>;
export declare const getPostApiPaymentsPurchaseQrPaymentConfirmOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
        data: QRPaymentOnlyOtp;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
    data: QRPaymentOnlyOtp;
}, TContext>;
export declare type PostApiPaymentsPurchaseQrPaymentConfirmOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsPurchaseQrPaymentConfirmOtp>>>;
export declare type PostApiPaymentsPurchaseQrPaymentConfirmOtpMutationBody = QRPaymentOnlyOtp;
export declare type PostApiPaymentsPurchaseQrPaymentConfirmOtpMutationError = AxiosError<unknown>;
/**
 * @summary Confirm QR payment
 */
export declare const usePostApiPaymentsPurchaseQrPaymentConfirmOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataQRPayment, any>, TError, {
        data: QRPaymentOnlyOtp;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataQRPayment, any>, TError, {
    data: QRPaymentOnlyOtp;
}, TContext>;
/**
 * @summary Return full information about searched purchases
 */
export declare const getApiPaymentsCrmPurchase: (params?: GetApiPaymentsCrmPurchaseParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBillManyPaginated>>;
export declare const getGetApiPaymentsCrmPurchaseQueryKey: (params?: GetApiPaymentsCrmPurchaseParams) => readonly ["/api/payments/crm/purchase", ...GetApiPaymentsCrmPurchaseParams[]];
export declare const getGetApiPaymentsCrmPurchaseQueryOptions: <TData = AxiosResponse<DataBillManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPurchaseParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBillManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmPurchaseQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmPurchase>>>;
export declare type GetApiPaymentsCrmPurchaseQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched purchases
 */
export declare const useGetApiPaymentsCrmPurchase: <TData = AxiosResponse<DataBillManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPurchaseParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBillManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Make Purchase
 */
export declare const postApiPaymentsCrmPurchase: (purchasePayload: PurchasePayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBill>>;
export declare const getPostApiPaymentsCrmPurchaseMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBill, any>, TError, {
        data: PurchasePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBill, any>, TError, {
    data: PurchasePayload;
}, TContext>;
export declare type PostApiPaymentsCrmPurchaseMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPurchase>>>;
export declare type PostApiPaymentsCrmPurchaseMutationBody = PurchasePayload;
export declare type PostApiPaymentsCrmPurchaseMutationError = AxiosError<unknown>;
/**
 * @summary Make Purchase
 */
export declare const usePostApiPaymentsCrmPurchase: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBill, any>, TError, {
        data: PurchasePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBill, any>, TError, {
    data: PurchasePayload;
}, TContext>;
/**
 * @summary Purchase Status Callback
 */
export declare const postApiPaymentsCrmPurchaseCallback: (ammanaBillUpdate: AmmanaBillUpdate, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsCrmPurchaseCallbackMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: AmmanaBillUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: AmmanaBillUpdate;
}, TContext>;
export declare type PostApiPaymentsCrmPurchaseCallbackMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPurchaseCallback>>>;
export declare type PostApiPaymentsCrmPurchaseCallbackMutationBody = AmmanaBillUpdate;
export declare type PostApiPaymentsCrmPurchaseCallbackMutationError = AxiosError<unknown>;
/**
 * @summary Purchase Status Callback
 */
export declare const usePostApiPaymentsCrmPurchaseCallback: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: AmmanaBillUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: AmmanaBillUpdate;
}, TContext>;
/**
 * @summary QR customer registration status callback
 */
export declare const postApiPaymentsCrmPurchaseQrRegisterCustomerCallback: (qRClientUpdate: QRClientUpdate, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsCrmPurchaseQrRegisterCustomerCallbackMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: QRClientUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: QRClientUpdate;
}, TContext>;
export declare type PostApiPaymentsCrmPurchaseQrRegisterCustomerCallbackMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPurchaseQrRegisterCustomerCallback>>>;
export declare type PostApiPaymentsCrmPurchaseQrRegisterCustomerCallbackMutationBody = QRClientUpdate;
export declare type PostApiPaymentsCrmPurchaseQrRegisterCustomerCallbackMutationError = AxiosError<unknown>;
/**
 * @summary QR customer registration status callback
 */
export declare const usePostApiPaymentsCrmPurchaseQrRegisterCustomerCallback: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: QRClientUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: QRClientUpdate;
}, TContext>;
/**
 * @summary Return full information about searched qr payments
 */
export declare const getApiPaymentsCrmPurchaseQrPayment: (params?: GetApiPaymentsCrmPurchaseQrPaymentParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataQRPaymentManyPaginated>>;
export declare const getGetApiPaymentsCrmPurchaseQrPaymentQueryKey: (params?: GetApiPaymentsCrmPurchaseQrPaymentParams) => readonly ["/api/payments/crm/purchase/qr/payment", ...GetApiPaymentsCrmPurchaseQrPaymentParams[]];
export declare const getGetApiPaymentsCrmPurchaseQrPaymentQueryOptions: <TData = AxiosResponse<DataQRPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPurchaseQrPaymentParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataQRPaymentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmPurchaseQrPaymentQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmPurchaseQrPayment>>>;
export declare type GetApiPaymentsCrmPurchaseQrPaymentQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched qr payments
 */
export declare const useGetApiPaymentsCrmPurchaseQrPayment: <TData = AxiosResponse<DataQRPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPurchaseQrPaymentParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataQRPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary QR payment status callback
 */
export declare const postApiPaymentsCrmPurchaseQrPaymentCallback: (qRPaymentUpdate: QRPaymentUpdate, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsCrmPurchaseQrPaymentCallbackMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: QRPaymentUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: QRPaymentUpdate;
}, TContext>;
export declare type PostApiPaymentsCrmPurchaseQrPaymentCallbackMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPurchaseQrPaymentCallback>>>;
export declare type PostApiPaymentsCrmPurchaseQrPaymentCallbackMutationBody = QRPaymentUpdate;
export declare type PostApiPaymentsCrmPurchaseQrPaymentCallbackMutationError = AxiosError<unknown>;
/**
 * @summary QR payment status callback
 */
export declare const usePostApiPaymentsCrmPurchaseQrPaymentCallback: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: QRPaymentUpdate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: QRPaymentUpdate;
}, TContext>;
/**
 * @summary Search client's debit cards
 */
export declare const getApiPaymentsDebitCards: (params?: GetApiPaymentsDebitCardsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated>>;
export declare const getGetApiPaymentsDebitCardsQueryKey: (params?: GetApiPaymentsDebitCardsParams) => readonly ["/api/payments/debit_cards", ...GetApiPaymentsDebitCardsParams[]];
export declare const getGetApiPaymentsDebitCardsQueryOptions: <TData = AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsDebitCardsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsDebitCardsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsDebitCards>>>;
export declare type GetApiPaymentsDebitCardsQueryError = AxiosError<unknown>;
/**
 * @summary Search client's debit cards
 */
export declare const useGetApiPaymentsDebitCards: <TData = AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsDebitCardsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateRespPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register debit card
 */
export declare const postApiPaymentsDebitCards: (debitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp>>;
export declare const getPostApiPaymentsDebitCardsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
        data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
    data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour;
}, TContext>;
export declare type PostApiPaymentsDebitCardsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsDebitCards>>>;
export declare type PostApiPaymentsDebitCardsMutationBody = DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour;
export declare type PostApiPaymentsDebitCardsMutationError = AxiosError<unknown>;
/**
 * @summary Register debit card
 */
export declare const usePostApiPaymentsDebitCards: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
        data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
    data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFour;
}, TContext>;
/**
 * @summary Validate debit card
 */
export declare const postApiPaymentsDebitCardsIdValidate: (id: string, validateCardRequestBody: ValidateCardRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsDebitCardsIdValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ValidateCardRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ValidateCardRequestBody;
}, TContext>;
export declare type PostApiPaymentsDebitCardsIdValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsDebitCardsIdValidate>>>;
export declare type PostApiPaymentsDebitCardsIdValidateMutationBody = ValidateCardRequestBody;
export declare type PostApiPaymentsDebitCardsIdValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate debit card
 */
export declare const usePostApiPaymentsDebitCardsIdValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ValidateCardRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ValidateCardRequestBody;
}, TContext>;
/**
 * @summary Resend card validation otp
 */
export declare const postApiPaymentsDebitCardsIdResendOtp: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsDebitCardsIdResendOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentsDebitCardsIdResendOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsDebitCardsIdResendOtp>>>;
export declare type PostApiPaymentsDebitCardsIdResendOtpMutationError = AxiosError<unknown>;
/**
 * @summary Resend card validation otp
 */
export declare const usePostApiPaymentsDebitCardsIdResendOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Delete debit card
 */
export declare const deleteApiPaymentsDebitCardsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp>>;
export declare const getDeleteApiPaymentsDebitCardsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiPaymentsDebitCardsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPaymentsDebitCardsId>>>;
export declare type DeleteApiPaymentsDebitCardsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete debit card
 */
export declare const useDeleteApiPaymentsDebitCardsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDebitCardExcludeExternalIdRegisterRespValidateResp, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search debit cards
 */
export declare const getApiPaymentsCrmDebitCards: (params?: GetApiPaymentsCrmDebitCardsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCardManyPaginated>>;
export declare const getGetApiPaymentsCrmDebitCardsQueryKey: (params?: GetApiPaymentsCrmDebitCardsParams) => readonly ["/api/payments/crm/debit_cards", ...GetApiPaymentsCrmDebitCardsParams[]];
export declare const getGetApiPaymentsCrmDebitCardsQueryOptions: <TData = AxiosResponse<DataDebitCardManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmDebitCardsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebitCardManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDebitCardManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmDebitCardsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmDebitCards>>>;
export declare type GetApiPaymentsCrmDebitCardsQueryError = AxiosError<unknown>;
/**
 * @summary Search debit cards
 */
export declare const useGetApiPaymentsCrmDebitCards: <TData = AxiosResponse<DataDebitCardManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmDebitCardsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebitCardManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register debit card
 */
export declare const postApiPaymentsCrmDebitCards: (debitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCard>>;
export declare const getPostApiPaymentsCrmDebitCardsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
        data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
    data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId;
}, TContext>;
export declare type PostApiPaymentsCrmDebitCardsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmDebitCards>>>;
export declare type PostApiPaymentsCrmDebitCardsMutationBody = DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId;
export declare type PostApiPaymentsCrmDebitCardsMutationError = AxiosError<unknown>;
/**
 * @summary Register debit card
 */
export declare const usePostApiPaymentsCrmDebitCards: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
        data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDebitCard, any>, TError, {
    data: DebitCardOnlyAccountEmailAccountMobilePhoneCardExpiryCardLastFourClientId;
}, TContext>;
/**
 * @summary Validate debit card
 */
export declare const postApiPaymentsCrmDebitCardsIdValidate: (id: string, validateCardRequestBody: ValidateCardRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsCrmDebitCardsIdValidateMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ValidateCardRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ValidateCardRequestBody;
}, TContext>;
export declare type PostApiPaymentsCrmDebitCardsIdValidateMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmDebitCardsIdValidate>>>;
export declare type PostApiPaymentsCrmDebitCardsIdValidateMutationBody = ValidateCardRequestBody;
export declare type PostApiPaymentsCrmDebitCardsIdValidateMutationError = AxiosError<unknown>;
/**
 * @summary Validate debit card
 */
export declare const usePostApiPaymentsCrmDebitCardsIdValidate: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ValidateCardRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ValidateCardRequestBody;
}, TContext>;
/**
 * @summary Resend card validation otp
 */
export declare const postApiPaymentsCrmDebitCardsIdResendOtp: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiPaymentsCrmDebitCardsIdResendOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentsCrmDebitCardsIdResendOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmDebitCardsIdResendOtp>>>;
export declare type PostApiPaymentsCrmDebitCardsIdResendOtpMutationError = AxiosError<unknown>;
/**
 * @summary Resend card validation otp
 */
export declare const usePostApiPaymentsCrmDebitCardsIdResendOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Delete debit card
 */
export declare const deleteApiPaymentsCrmDebitCardsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebitCard>>;
export declare const getDeleteApiPaymentsCrmDebitCardsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiPaymentsCrmDebitCardsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiPaymentsCrmDebitCardsId>>>;
export declare type DeleteApiPaymentsCrmDebitCardsIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete debit card
 */
export declare const useDeleteApiPaymentsCrmDebitCardsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDebitCard, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDebitCard, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Return full information about searched banks
 */
export declare const getApiPaymentsCrmBanks: (params?: GetApiPaymentsCrmBanksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanksMany>>;
export declare const getGetApiPaymentsCrmBanksQueryKey: (params?: GetApiPaymentsCrmBanksParams) => readonly ["/api/payments/crm/banks", ...GetApiPaymentsCrmBanksParams[]];
export declare const getGetApiPaymentsCrmBanksQueryOptions: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmBanksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmBanks>>>;
export declare type GetApiPaymentsCrmBanksQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched banks
 */
export declare const useGetApiPaymentsCrmBanks: <TData = AxiosResponse<DataBanksMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmBanksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBanksMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update bank by id
 */
export declare const patchApiPaymentsCrmBanksId: (id: number, banksOnlyAccountNumberRegexPriority: BanksOnlyAccountNumberRegexPriority, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBanks>>;
export declare const getPatchApiPaymentsCrmBanksIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
        id: number;
        data: BanksOnlyAccountNumberRegexPriority;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
    id: number;
    data: BanksOnlyAccountNumberRegexPriority;
}, TContext>;
export declare type PatchApiPaymentsCrmBanksIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentsCrmBanksId>>>;
export declare type PatchApiPaymentsCrmBanksIdMutationBody = BanksOnlyAccountNumberRegexPriority;
export declare type PatchApiPaymentsCrmBanksIdMutationError = AxiosError<unknown>;
/**
 * @summary Update bank by id
 */
export declare const usePatchApiPaymentsCrmBanksId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBanks, any>, TError, {
        id: number;
        data: BanksOnlyAccountNumberRegexPriority;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBanks, any>, TError, {
    id: number;
    data: BanksOnlyAccountNumberRegexPriority;
}, TContext>;
/**
 * @summary Return full information about searched disburses
 */
export declare const getApiPaymentsCrmDisburse: (params?: GetApiPaymentsCrmDisburseParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursementManyPaginated>>;
export declare const getGetApiPaymentsCrmDisburseQueryKey: (params?: GetApiPaymentsCrmDisburseParams) => readonly ["/api/payments/crm/disburse", ...GetApiPaymentsCrmDisburseParams[]];
export declare const getGetApiPaymentsCrmDisburseQueryOptions: <TData = AxiosResponse<DataDisbursementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmDisburseParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmDisburseQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmDisburse>>>;
export declare type GetApiPaymentsCrmDisburseQueryError = AxiosError<unknown>;
/**
 * @summary Return full information about searched disburses
 */
export declare const useGetApiPaymentsCrmDisburse: <TData = AxiosResponse<DataDisbursementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmDisburseParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create disburse by clients contract
 */
export declare const postApiPaymentsCrmDisburse: (createDisbursePayload: CreateDisbursePayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentsCrmDisburseMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayload;
}, TContext>;
export declare type PostApiPaymentsCrmDisburseMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmDisburse>>>;
export declare type PostApiPaymentsCrmDisburseMutationBody = CreateDisbursePayload;
export declare type PostApiPaymentsCrmDisburseMutationError = AxiosError<unknown>;
/**
 * @summary Create disburse by clients contract
 */
export declare const usePostApiPaymentsCrmDisburse: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CreateDisbursePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: CreateDisbursePayload;
}, TContext>;
/**
 * @summary Complete disburse
 */
export declare const postApiPaymentsCrmDisburseComplete: (completeDisbursePayload: CompleteDisbursePayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getPostApiPaymentsCrmDisburseCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CompleteDisbursePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
    data: CompleteDisbursePayload;
}, TContext>;
export declare type PostApiPaymentsCrmDisburseCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmDisburseComplete>>>;
export declare type PostApiPaymentsCrmDisburseCompleteMutationBody = CompleteDisbursePayload;
export declare type PostApiPaymentsCrmDisburseCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Complete disburse
 */
export declare const usePostApiPaymentsCrmDisburseComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDisbursement, any>, TError, {
        data: CompleteDisbursePayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDisbursement, any>, TError, {
    data: CompleteDisbursePayload;
}, TContext>;
/**
 * @summary Check disburse by ID
 */
export declare const getApiPaymentsCrmDisburseIdCheck: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDisbursement>>;
export declare const getGetApiPaymentsCrmDisburseIdCheckQueryKey: (id: string) => readonly [`/api/payments/crm/disburse/${string}/check`];
export declare const getGetApiPaymentsCrmDisburseIdCheckQueryOptions: <TData = AxiosResponse<DataDisbursement, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursement, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDisbursement, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmDisburseIdCheckQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmDisburseIdCheck>>>;
export declare type GetApiPaymentsCrmDisburseIdCheckQueryError = AxiosError<unknown>;
/**
 * @summary Check disburse by ID
 */
export declare const useGetApiPaymentsCrmDisburseIdCheck: <TData = AxiosResponse<DataDisbursement, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDisbursement, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get bank account by number
 */
export declare const getApiPaymentsCrmBankAccount: (params: GetApiPaymentsCrmBankAccountParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccount>>;
export declare const getGetApiPaymentsCrmBankAccountQueryKey: (params: GetApiPaymentsCrmBankAccountParams) => readonly ["/api/payments/crm/bank_account", ...GetApiPaymentsCrmBankAccountParams[]];
export declare const getGetApiPaymentsCrmBankAccountQueryOptions: <TData = AxiosResponse<DataBankAccount, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsCrmBankAccountParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankAccount, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBankAccount, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmBankAccountQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmBankAccount>>>;
export declare type GetApiPaymentsCrmBankAccountQueryError = AxiosError<unknown>;
/**
 * @summary Get bank account by number
 */
export declare const useGetApiPaymentsCrmBankAccount: <TData = AxiosResponse<DataBankAccount, any>, TError = AxiosError<unknown, any>>(params: GetApiPaymentsCrmBankAccountParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankAccount, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Check payment by ID
 */
export declare const getApiPaymentsCrmFullPayments: (params?: GetApiPaymentsCrmFullPaymentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientPaymentManyPaginated>>;
export declare const getGetApiPaymentsCrmFullPaymentsQueryKey: (params?: GetApiPaymentsCrmFullPaymentsParams) => readonly ["/api/payments/crm/full_payments", ...GetApiPaymentsCrmFullPaymentsParams[]];
export declare const getGetApiPaymentsCrmFullPaymentsQueryOptions: <TData = AxiosResponse<DataClientPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmFullPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientPaymentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmFullPaymentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmFullPayments>>>;
export declare type GetApiPaymentsCrmFullPaymentsQueryError = AxiosError<unknown>;
/**
 * @summary Check payment by ID
 */
export declare const useGetApiPaymentsCrmFullPayments: <TData = AxiosResponse<DataClientPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmFullPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search repay orders
 */
export declare const getApiPaymentsCrmRepayOrders: (params?: GetApiPaymentsCrmRepayOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrderManyPaginated>>;
export declare const getGetApiPaymentsCrmRepayOrdersQueryKey: (params?: GetApiPaymentsCrmRepayOrdersParams) => readonly ["/api/payments/crm/repay_orders", ...GetApiPaymentsCrmRepayOrdersParams[]];
export declare const getGetApiPaymentsCrmRepayOrdersQueryOptions: <TData = AxiosResponse<DataRepayOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmRepayOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmRepayOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmRepayOrders>>>;
export declare type GetApiPaymentsCrmRepayOrdersQueryError = AxiosError<unknown>;
/**
 * @summary search repay orders
 */
export declare const useGetApiPaymentsCrmRepayOrders: <TData = AxiosResponse<DataRepayOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmRepayOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order to repay
 */
export declare const postApiPaymentsCrmRepayOrder: (repayOrderPayload: RepayOrderPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrder>>;
export declare const getPostApiPaymentsCrmRepayOrderMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        data: RepayOrderPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
    data: RepayOrderPayload;
}, TContext>;
export declare type PostApiPaymentsCrmRepayOrderMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmRepayOrder>>>;
export declare type PostApiPaymentsCrmRepayOrderMutationBody = RepayOrderPayload;
export declare type PostApiPaymentsCrmRepayOrderMutationError = AxiosError<unknown>;
/**
 * @summary Create order to repay
 */
export declare const usePostApiPaymentsCrmRepayOrder: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        data: RepayOrderPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRepayOrder, any>, TError, {
    data: RepayOrderPayload;
}, TContext>;
/**
 * @summary Void repay order
 */
export declare const patchApiPaymentsCrmRepayOrderIdVoid: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrder>>;
export declare const getPatchApiPaymentsCrmRepayOrderIdVoidMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
    id: string;
}, TContext>;
export declare type PatchApiPaymentsCrmRepayOrderIdVoidMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentsCrmRepayOrderIdVoid>>>;
export declare type PatchApiPaymentsCrmRepayOrderIdVoidMutationError = AxiosError<unknown>;
/**
 * @summary Void repay order
 */
export declare const usePatchApiPaymentsCrmRepayOrderIdVoid: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRepayOrder, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRepayOrder, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Search payments
 */
export declare const getApiPaymentsCrmPayments: (params?: GetApiPaymentsCrmPaymentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentManyPaginated>>;
export declare const getGetApiPaymentsCrmPaymentsQueryKey: (params?: GetApiPaymentsCrmPaymentsParams) => readonly ["/api/payments/crm/payments", ...GetApiPaymentsCrmPaymentsParams[]];
export declare const getGetApiPaymentsCrmPaymentsQueryOptions: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmPaymentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmPayments>>>;
export declare type GetApiPaymentsCrmPaymentsQueryError = AxiosError<unknown>;
/**
 * @summary Search payments
 */
export declare const useGetApiPaymentsCrmPayments: <TData = AxiosResponse<DataPaymentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiPaymentsCrmPaymentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get external payment
 */
export declare const getApiPaymentsCrmPaymentsExternalExternalId: (externalId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiPaymentsCrmPaymentsExternalExternalIdQueryKey: (externalId: string) => readonly [`/api/payments/crm/payments/external/${string}`];
export declare const getGetApiPaymentsCrmPaymentsExternalExternalIdQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(externalId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmPaymentsExternalExternalIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmPaymentsExternalExternalId>>>;
export declare type GetApiPaymentsCrmPaymentsExternalExternalIdQueryError = AxiosError<unknown>;
/**
 * @summary Get external payment
 */
export declare const useGetApiPaymentsCrmPaymentsExternalExternalId: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(externalId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search available payment methods
 */
export declare const getApiPaymentsCrmPaymentsAvailable: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPaymentMethodMany>>;
export declare const getGetApiPaymentsCrmPaymentsAvailableQueryKey: () => readonly ["/api/payments/crm/payments/available"];
export declare const getGetApiPaymentsCrmPaymentsAvailableQueryOptions: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmPaymentsAvailableQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmPaymentsAvailable>>>;
export declare type GetApiPaymentsCrmPaymentsAvailableQueryError = AxiosError<unknown>;
/**
 * @summary Search available payment methods
 */
export declare const useGetApiPaymentsCrmPaymentsAvailable: <TData = AxiosResponse<DataPaymentMethodMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataPaymentMethodMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create repayment
 */
export declare const postApiPaymentsCrmPayment: (paymentPayload: PaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentsCrmPaymentMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        data: PaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    data: PaymentPayload;
}, TContext>;
export declare type PostApiPaymentsCrmPaymentMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPayment>>>;
export declare type PostApiPaymentsCrmPaymentMutationBody = PaymentPayload;
export declare type PostApiPaymentsCrmPaymentMutationError = AxiosError<unknown>;
/**
 * @summary Create repayment
 */
export declare const usePostApiPaymentsCrmPayment: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
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
export declare const patchApiPaymentsCrmPaymentIdCancel: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPatchApiPaymentsCrmPaymentIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    id: string;
}, TContext>;
export declare type PatchApiPaymentsCrmPaymentIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiPaymentsCrmPaymentIdCancel>>>;
export declare type PatchApiPaymentsCrmPaymentIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel Payment
 */
export declare const usePatchApiPaymentsCrmPaymentIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Check payment by ID
 */
export declare const postApiPaymentsCrmPaymentIdCheck: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentsCrmPaymentIdCheckMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiPaymentsCrmPaymentIdCheckMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPaymentIdCheck>>>;
export declare type PostApiPaymentsCrmPaymentIdCheckMutationError = AxiosError<unknown>;
/**
 * @summary Check payment by ID
 */
export declare const usePostApiPaymentsCrmPaymentIdCheck: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Force complete payment and repay order
 */
export declare const postApiPaymentsCrmPaymentIdForceComplete: (id: string, forceCompletePaymentPayload: ForceCompletePaymentPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPayment>>;
export declare const getPostApiPaymentsCrmPaymentIdForceCompleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
        data: ForceCompletePaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
    id: string;
    data: ForceCompletePaymentPayload;
}, TContext>;
export declare type PostApiPaymentsCrmPaymentIdForceCompleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiPaymentsCrmPaymentIdForceComplete>>>;
export declare type PostApiPaymentsCrmPaymentIdForceCompleteMutationBody = ForceCompletePaymentPayload;
export declare type PostApiPaymentsCrmPaymentIdForceCompleteMutationError = AxiosError<unknown>;
/**
 * @summary Force complete payment and repay order
 */
export declare const usePostApiPaymentsCrmPaymentIdForceComplete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPayment, any>, TError, {
        id: string;
        data: ForceCompletePaymentPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPayment, any>, TError, {
    id: string;
    data: ForceCompletePaymentPayload;
}, TContext>;
/**
 * @summary Get last internal repay order by client id
 */
export declare const getApiPaymentsCrmClientsClientIdRepayOrdersLastInternal: (clientId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRepayOrder>>;
export declare const getGetApiPaymentsCrmClientsClientIdRepayOrdersLastInternalQueryKey: (clientId: string) => readonly [`/api/payments/crm/clients/${string}/repay_orders/last_internal`];
export declare const getGetApiPaymentsCrmClientsClientIdRepayOrdersLastInternalQueryOptions: <TData = AxiosResponse<DataRepayOrder, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrder, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataRepayOrder, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiPaymentsCrmClientsClientIdRepayOrdersLastInternalQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPaymentsCrmClientsClientIdRepayOrdersLastInternal>>>;
export declare type GetApiPaymentsCrmClientsClientIdRepayOrdersLastInternalQueryError = AxiosError<unknown>;
/**
 * @summary Get last internal repay order by client id
 */
export declare const useGetApiPaymentsCrmClientsClientIdRepayOrdersLastInternal: <TData = AxiosResponse<DataRepayOrder, any>, TError = AxiosError<unknown, any>>(clientId: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataRepayOrder, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
