import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AgreementOnlyMerchantIdNextSettlementDateSettlementDelay, BindCalcAgreements, BindEmployeeOutletsBody, BindMerchCategories, BlockMerchantSchema, CancelOrder, CancelOrderExcludeForce, ChangeSettlementOrders, ChangeSettlementStatus, ConfirmCodeRequest, ConfirmOrder, CreateBankDetail, CreateBusinessType, CreateDebt, CreateEmployee, CreateEmployeeExcludeMerchantId, CreateGoodsCategory, CreateMerchant, CreateOrderBody, CreateOrderExcludeClientId, CreateOrderPaymentBody, CreateSettlement, DataAgreement, DataAgreementManyPaginated, DataBankDetail, DataBankDetailManyPaginated, DataBusinessType, DataBusinessTypeManyPaginated, DataCalculatorAgreementMany, DataCalculatorAgreementManyPaginated, DataConfirmCodeResponse, DataCountOrdersByStatusesRespMany, DataCreateOrderResp, DataDebtCompensationMany, DataEmployee, DataEmployeeManyPaginated, DataEmployeeOutletMany, DataGetClientOrdersSummary, DataGetDataByLinkResponse, DataGetDebtResponse, DataGetDebtResponseManyPaginated, DataGetEmployeesNamesMany, DataGetExtendedOrder, DataGetExtendedOrderWithQr, DataGetExtendedTradeOutlet, DataGetMerchCategoriesRespMany, DataGetMerchCategoriesRespManyPaginated, DataGetOrdersBillingDetailsManyPaginated, DataGetOrdersManyPaginatedSummarized, DataGetOrdersOverviewChartResponse, DataGetOrdersStatuses, DataGetSettlementOrderManyPaginated, DataGetSettlementsManyPaginated, DataGetSettlementsManyPaginatedSummarized, DataGetTradeOutletsNamesMany, DataGetTradeOutletsResponseManyPaginated, DataGoodsCategory, DataGoodsCategoryManyPaginated, DataLivenessResponse, DataMerchant, DataMerchantApplicationForm, DataMerchantApplicationFormManyPaginated, DataMerchantExcludeIsBlocked, DataMerchantManyPaginated, DataOrder, DataReadinessResponse, DataSendCodeResponse, DataSettlement, DataSuccessResponse, DataTradeOutlet, DataTradeOutletExcludeArchivedCreatedUpdated, DataTradeOutletManyPaginated, DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, GetApiMerchantsServiceAgreementsParams, GetApiMerchantsServiceClientsOrdersDataByLinkParams, GetApiMerchantsServiceClientsOrdersParams, GetApiMerchantsServiceCrmAgreementsParams, GetApiMerchantsServiceCrmBankDetailsParams, GetApiMerchantsServiceCrmBusinessTypesParams, GetApiMerchantsServiceCrmCalculatorAgreementsParams, GetApiMerchantsServiceCrmDebtsParams, GetApiMerchantsServiceCrmEmployeeOutletsParams, GetApiMerchantsServiceCrmEmployeesParams, GetApiMerchantsServiceCrmGoodsCategoriesParams, GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams, GetApiMerchantsServiceCrmMerchCategoriesParams, GetApiMerchantsServiceCrmMerchantsParams, GetApiMerchantsServiceCrmOrdersBillingDetailsParams, GetApiMerchantsServiceCrmOrdersCountByStatusesParams, GetApiMerchantsServiceCrmOrdersParams, GetApiMerchantsServiceCrmSettlementsIdExportParams, GetApiMerchantsServiceCrmSettlementsIdOrdersParams, GetApiMerchantsServiceCrmSettlementsParams, GetApiMerchantsServiceCrmTradeOutletsParams, GetApiMerchantsServiceDebtsParams, GetApiMerchantsServiceEmployeeOrdersParams, GetApiMerchantsServiceEmployeeOutletsParams, GetApiMerchantsServiceEmployeeTradeOutletsParams, GetApiMerchantsServiceEmployeesParams, GetApiMerchantsServiceOrdersCountByStatusesParams, GetApiMerchantsServiceOrdersOverviewChartParams, GetApiMerchantsServiceOrdersParams, GetApiMerchantsServiceSettlementsIdExportParams, GetApiMerchantsServiceSettlementsIdOrdersParams, GetApiMerchantsServiceSettlementsParams, GetApiMerchantsServiceTradeOutletsParams, LogoutRequest, MerchantApplicationFormOnlyComment, MerchantsApplyFormData, PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody, RefreshSessionRequest, SelectOffer, SendCodeRequest, SendOrderLinkBody, TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName, TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName, UpdateAgreement, UpdateBankDetail, UpdateBusinessType, UpdateDebt, UpdateEmployeeBody, UpdateGoodsCategory, UpdateMerchant, UpdateMerchantSchema, UpdateOrder, UpdateOrderOnlyAmountReferenceNumberBody, UpdateTradeOutletBody } from "./model";
/**
 * @summary Get merchants
 */
export declare const getApiMerchantsServiceCrmMerchants: (params?: GetApiMerchantsServiceCrmMerchantsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmMerchantsQueryKey: (params?: GetApiMerchantsServiceCrmMerchantsParams) => readonly ["/api/merchants-service/crm/merchants", ...GetApiMerchantsServiceCrmMerchantsParams[]];
export declare const getGetApiMerchantsServiceCrmMerchantsQueryOptions: <TData = AxiosResponse<DataMerchantManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmMerchantsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMerchantManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmMerchantsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmMerchants>>>;
export declare type GetApiMerchantsServiceCrmMerchantsQueryError = AxiosError<unknown>;
/**
 * @summary Get merchants
 */
export declare const useGetApiMerchantsServiceCrmMerchants: <TData = AxiosResponse<DataMerchantManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmMerchantsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create merchant
 */
export declare const postApiMerchantsServiceCrmMerchants: (createMerchant: CreateMerchant, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchant>>;
export declare const getPostApiMerchantsServiceCrmMerchantsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        data: CreateMerchant;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
    data: CreateMerchant;
}, TContext>;
export declare type PostApiMerchantsServiceCrmMerchantsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmMerchants>>>;
export declare type PostApiMerchantsServiceCrmMerchantsMutationBody = CreateMerchant;
export declare type PostApiMerchantsServiceCrmMerchantsMutationError = AxiosError<unknown>;
/**
 * @summary Create merchant
 */
export declare const usePostApiMerchantsServiceCrmMerchants: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        data: CreateMerchant;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchant, any>, TError, {
    data: CreateMerchant;
}, TContext>;
/**
 * @summary Update merchant
 */
export declare const patchApiMerchantsServiceCrmMerchantsId: (id: string, updateMerchant: UpdateMerchant, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchant>>;
export declare const getPatchApiMerchantsServiceCrmMerchantsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: UpdateMerchant;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: UpdateMerchant;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmMerchantsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmMerchantsId>>>;
export declare type PatchApiMerchantsServiceCrmMerchantsIdMutationBody = UpdateMerchant;
export declare type PatchApiMerchantsServiceCrmMerchantsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update merchant
 */
export declare const usePatchApiMerchantsServiceCrmMerchantsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: UpdateMerchant;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: UpdateMerchant;
}, TContext>;
/**
 * @summary Block merchant
 */
export declare const postApiMerchantsServiceCrmMerchantsIdBlock: (id: string, blockMerchantSchema: BlockMerchantSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchant>>;
export declare const getPostApiMerchantsServiceCrmMerchantsIdBlockMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: BlockMerchantSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: BlockMerchantSchema;
}, TContext>;
export declare type PostApiMerchantsServiceCrmMerchantsIdBlockMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmMerchantsIdBlock>>>;
export declare type PostApiMerchantsServiceCrmMerchantsIdBlockMutationBody = BlockMerchantSchema;
export declare type PostApiMerchantsServiceCrmMerchantsIdBlockMutationError = AxiosError<unknown>;
/**
 * @summary Block merchant
 */
export declare const usePostApiMerchantsServiceCrmMerchantsIdBlock: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: BlockMerchantSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: BlockMerchantSchema;
}, TContext>;
/**
 * @summary Upload merchant logo
 */
export declare const postApiMerchantsServiceCrmMerchantsIdUploadLogo: (id: string, postApiMerchantsServiceCrmMerchantsIdUploadLogoBody: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchant>>;
export declare const getPostApiMerchantsServiceCrmMerchantsIdUploadLogoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmMerchantsIdUploadLogoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmMerchantsIdUploadLogo>>>;
export declare type PostApiMerchantsServiceCrmMerchantsIdUploadLogoMutationBody = PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
export declare type PostApiMerchantsServiceCrmMerchantsIdUploadLogoMutationError = AxiosError<unknown>;
/**
 * @summary Upload merchant logo
 */
export declare const usePostApiMerchantsServiceCrmMerchantsIdUploadLogo: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchant, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchant, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
/**
 * @summary Get merchant employees
 */
export declare const getApiMerchantsServiceCrmEmployees: (params?: GetApiMerchantsServiceCrmEmployeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployeeManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmEmployeesQueryKey: (params?: GetApiMerchantsServiceCrmEmployeesParams) => readonly ["/api/merchants-service/crm/employees", ...GetApiMerchantsServiceCrmEmployeesParams[]];
export declare const getGetApiMerchantsServiceCrmEmployeesQueryOptions: <TData = AxiosResponse<DataEmployeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmEmployeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmEmployeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmEmployees>>>;
export declare type GetApiMerchantsServiceCrmEmployeesQueryError = AxiosError<unknown>;
/**
 * @summary Get merchant employees
 */
export declare const useGetApiMerchantsServiceCrmEmployees: <TData = AxiosResponse<DataEmployeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmEmployeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create merchant employee
 */
export declare const postApiMerchantsServiceCrmEmployees: (createEmployee: CreateEmployee, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getPostApiMerchantsServiceCrmEmployeesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        data: CreateEmployee;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    data: CreateEmployee;
}, TContext>;
export declare type PostApiMerchantsServiceCrmEmployeesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmEmployees>>>;
export declare type PostApiMerchantsServiceCrmEmployeesMutationBody = CreateEmployee;
export declare type PostApiMerchantsServiceCrmEmployeesMutationError = AxiosError<unknown>;
/**
 * @summary Create merchant employee
 */
export declare const usePostApiMerchantsServiceCrmEmployees: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        data: CreateEmployee;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    data: CreateEmployee;
}, TContext>;
/**
 * @summary Update merchant employee
 */
export declare const patchApiMerchantsServiceCrmEmployeesId: (id: string, updateEmployeeBody: UpdateEmployeeBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getPatchApiMerchantsServiceCrmEmployeesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
        data: UpdateEmployeeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
    data: UpdateEmployeeBody;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmEmployeesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmEmployeesId>>>;
export declare type PatchApiMerchantsServiceCrmEmployeesIdMutationBody = UpdateEmployeeBody;
export declare type PatchApiMerchantsServiceCrmEmployeesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update merchant employee
 */
export declare const usePatchApiMerchantsServiceCrmEmployeesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
        data: UpdateEmployeeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
    data: UpdateEmployeeBody;
}, TContext>;
/**
 * @summary Archive merchant employee
 */
export declare const deleteApiMerchantsServiceCrmEmployeesId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getDeleteApiMerchantsServiceCrmEmployeesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiMerchantsServiceCrmEmployeesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMerchantsServiceCrmEmployeesId>>>;
export declare type DeleteApiMerchantsServiceCrmEmployeesIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive merchant employee
 */
export declare const useDeleteApiMerchantsServiceCrmEmployeesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get bank details
 */
export declare const getApiMerchantsServiceCrmBankDetails: (params?: GetApiMerchantsServiceCrmBankDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankDetailManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmBankDetailsQueryKey: (params?: GetApiMerchantsServiceCrmBankDetailsParams) => readonly ["/api/merchants-service/crm/bank_details", ...GetApiMerchantsServiceCrmBankDetailsParams[]];
export declare const getGetApiMerchantsServiceCrmBankDetailsQueryOptions: <TData = AxiosResponse<DataBankDetailManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmBankDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankDetailManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBankDetailManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmBankDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmBankDetails>>>;
export declare type GetApiMerchantsServiceCrmBankDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get bank details
 */
export declare const useGetApiMerchantsServiceCrmBankDetails: <TData = AxiosResponse<DataBankDetailManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmBankDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankDetailManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create bank details
 */
export declare const postApiMerchantsServiceCrmBankDetails: (createBankDetail: CreateBankDetail, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankDetail>>;
export declare const getPostApiMerchantsServiceCrmBankDetailsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
        data: CreateBankDetail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
    data: CreateBankDetail;
}, TContext>;
export declare type PostApiMerchantsServiceCrmBankDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmBankDetails>>>;
export declare type PostApiMerchantsServiceCrmBankDetailsMutationBody = CreateBankDetail;
export declare type PostApiMerchantsServiceCrmBankDetailsMutationError = AxiosError<unknown>;
/**
 * @summary Create bank details
 */
export declare const usePostApiMerchantsServiceCrmBankDetails: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
        data: CreateBankDetail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankDetail, any>, TError, {
    data: CreateBankDetail;
}, TContext>;
/**
 * @summary Update bank details
 */
export declare const patchApiMerchantsServiceCrmBankDetailsId: (id: string, updateBankDetail: UpdateBankDetail, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankDetail>>;
export declare const getPatchApiMerchantsServiceCrmBankDetailsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
        id: string;
        data: UpdateBankDetail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
    id: string;
    data: UpdateBankDetail;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmBankDetailsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmBankDetailsId>>>;
export declare type PatchApiMerchantsServiceCrmBankDetailsIdMutationBody = UpdateBankDetail;
export declare type PatchApiMerchantsServiceCrmBankDetailsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update bank details
 */
export declare const usePatchApiMerchantsServiceCrmBankDetailsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankDetail, any>, TError, {
        id: string;
        data: UpdateBankDetail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankDetail, any>, TError, {
    id: string;
    data: UpdateBankDetail;
}, TContext>;
/**
 * @summary Get business types
 */
export declare const getApiMerchantsServiceCrmBusinessTypes: (params?: GetApiMerchantsServiceCrmBusinessTypesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBusinessTypeManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmBusinessTypesQueryKey: (params?: GetApiMerchantsServiceCrmBusinessTypesParams) => readonly ["/api/merchants-service/crm/business_types", ...GetApiMerchantsServiceCrmBusinessTypesParams[]];
export declare const getGetApiMerchantsServiceCrmBusinessTypesQueryOptions: <TData = AxiosResponse<DataBusinessTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmBusinessTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBusinessTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBusinessTypeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmBusinessTypesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmBusinessTypes>>>;
export declare type GetApiMerchantsServiceCrmBusinessTypesQueryError = AxiosError<unknown>;
/**
 * @summary Get business types
 */
export declare const useGetApiMerchantsServiceCrmBusinessTypes: <TData = AxiosResponse<DataBusinessTypeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmBusinessTypesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBusinessTypeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create business types
 */
export declare const postApiMerchantsServiceCrmBusinessTypes: (createBusinessType: CreateBusinessType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBusinessType>>;
export declare const getPostApiMerchantsServiceCrmBusinessTypesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
        data: CreateBusinessType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
    data: CreateBusinessType;
}, TContext>;
export declare type PostApiMerchantsServiceCrmBusinessTypesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmBusinessTypes>>>;
export declare type PostApiMerchantsServiceCrmBusinessTypesMutationBody = CreateBusinessType;
export declare type PostApiMerchantsServiceCrmBusinessTypesMutationError = AxiosError<unknown>;
/**
 * @summary Create business types
 */
export declare const usePostApiMerchantsServiceCrmBusinessTypes: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
        data: CreateBusinessType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBusinessType, any>, TError, {
    data: CreateBusinessType;
}, TContext>;
/**
 * @summary Update business types
 */
export declare const patchApiMerchantsServiceCrmBusinessTypesId: (id: string, updateBusinessType: UpdateBusinessType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBusinessType>>;
export declare const getPatchApiMerchantsServiceCrmBusinessTypesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
        id: string;
        data: UpdateBusinessType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
    id: string;
    data: UpdateBusinessType;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmBusinessTypesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmBusinessTypesId>>>;
export declare type PatchApiMerchantsServiceCrmBusinessTypesIdMutationBody = UpdateBusinessType;
export declare type PatchApiMerchantsServiceCrmBusinessTypesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update business types
 */
export declare const usePatchApiMerchantsServiceCrmBusinessTypesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBusinessType, any>, TError, {
        id: string;
        data: UpdateBusinessType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBusinessType, any>, TError, {
    id: string;
    data: UpdateBusinessType;
}, TContext>;
/**
 * @summary Get goods categories
 */
export declare const getApiMerchantsServiceCrmGoodsCategories: (params?: GetApiMerchantsServiceCrmGoodsCategoriesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGoodsCategoryManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmGoodsCategoriesQueryKey: (params?: GetApiMerchantsServiceCrmGoodsCategoriesParams) => readonly ["/api/merchants-service/crm/goods_categories", ...GetApiMerchantsServiceCrmGoodsCategoriesParams[]];
export declare const getGetApiMerchantsServiceCrmGoodsCategoriesQueryOptions: <TData = AxiosResponse<DataGoodsCategoryManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmGoodsCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGoodsCategoryManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGoodsCategoryManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmGoodsCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmGoodsCategories>>>;
export declare type GetApiMerchantsServiceCrmGoodsCategoriesQueryError = AxiosError<unknown>;
/**
 * @summary Get goods categories
 */
export declare const useGetApiMerchantsServiceCrmGoodsCategories: <TData = AxiosResponse<DataGoodsCategoryManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmGoodsCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGoodsCategoryManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create goods categories
 */
export declare const postApiMerchantsServiceCrmGoodsCategories: (createGoodsCategory: CreateGoodsCategory, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGoodsCategory>>;
export declare const getPostApiMerchantsServiceCrmGoodsCategoriesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
        data: CreateGoodsCategory;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
    data: CreateGoodsCategory;
}, TContext>;
export declare type PostApiMerchantsServiceCrmGoodsCategoriesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmGoodsCategories>>>;
export declare type PostApiMerchantsServiceCrmGoodsCategoriesMutationBody = CreateGoodsCategory;
export declare type PostApiMerchantsServiceCrmGoodsCategoriesMutationError = AxiosError<unknown>;
/**
 * @summary Create goods categories
 */
export declare const usePostApiMerchantsServiceCrmGoodsCategories: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
        data: CreateGoodsCategory;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGoodsCategory, any>, TError, {
    data: CreateGoodsCategory;
}, TContext>;
/**
 * @summary Update goods categories
 */
export declare const patchApiMerchantsServiceCrmGoodsCategoriesId: (id: string, updateGoodsCategory: UpdateGoodsCategory, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGoodsCategory>>;
export declare const getPatchApiMerchantsServiceCrmGoodsCategoriesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
        id: string;
        data: UpdateGoodsCategory;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
    id: string;
    data: UpdateGoodsCategory;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmGoodsCategoriesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmGoodsCategoriesId>>>;
export declare type PatchApiMerchantsServiceCrmGoodsCategoriesIdMutationBody = UpdateGoodsCategory;
export declare type PatchApiMerchantsServiceCrmGoodsCategoriesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update goods categories
 */
export declare const usePatchApiMerchantsServiceCrmGoodsCategoriesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoodsCategory, any>, TError, {
        id: string;
        data: UpdateGoodsCategory;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGoodsCategory, any>, TError, {
    id: string;
    data: UpdateGoodsCategory;
}, TContext>;
/**
 * @summary Get merch categories
 */
export declare const getApiMerchantsServiceCrmMerchCategories: (params: GetApiMerchantsServiceCrmMerchCategoriesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetMerchCategoriesRespManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmMerchCategoriesQueryKey: (params: GetApiMerchantsServiceCrmMerchCategoriesParams) => readonly ["/api/merchants-service/crm/merch_categories", ...GetApiMerchantsServiceCrmMerchCategoriesParams[]];
export declare const getGetApiMerchantsServiceCrmMerchCategoriesQueryOptions: <TData = AxiosResponse<DataGetMerchCategoriesRespManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceCrmMerchCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetMerchCategoriesRespManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetMerchCategoriesRespManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmMerchCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmMerchCategories>>>;
export declare type GetApiMerchantsServiceCrmMerchCategoriesQueryError = AxiosError<unknown>;
/**
 * @summary Get merch categories
 */
export declare const useGetApiMerchantsServiceCrmMerchCategories: <TData = AxiosResponse<DataGetMerchCategoriesRespManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceCrmMerchCategoriesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetMerchCategoriesRespManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind merch categories
 */
export declare const postApiMerchantsServiceCrmMerchCategoriesBind: (bindMerchCategories: BindMerchCategories, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetMerchCategoriesRespMany>>;
export declare const getPostApiMerchantsServiceCrmMerchCategoriesBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetMerchCategoriesRespMany, any>, TError, {
        data: BindMerchCategories;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetMerchCategoriesRespMany, any>, TError, {
    data: BindMerchCategories;
}, TContext>;
export declare type PostApiMerchantsServiceCrmMerchCategoriesBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmMerchCategoriesBind>>>;
export declare type PostApiMerchantsServiceCrmMerchCategoriesBindMutationBody = BindMerchCategories;
export declare type PostApiMerchantsServiceCrmMerchCategoriesBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind merch categories
 */
export declare const usePostApiMerchantsServiceCrmMerchCategoriesBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetMerchCategoriesRespMany, any>, TError, {
        data: BindMerchCategories;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetMerchCategoriesRespMany, any>, TError, {
    data: BindMerchCategories;
}, TContext>;
/**
 * @summary Get calculator agreements
 */
export declare const getApiMerchantsServiceCrmCalculatorAgreements: (params?: GetApiMerchantsServiceCrmCalculatorAgreementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorAgreementManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmCalculatorAgreementsQueryKey: (params?: GetApiMerchantsServiceCrmCalculatorAgreementsParams) => readonly ["/api/merchants-service/crm/calculator_agreements", ...GetApiMerchantsServiceCrmCalculatorAgreementsParams[]];
export declare const getGetApiMerchantsServiceCrmCalculatorAgreementsQueryOptions: <TData = AxiosResponse<DataCalculatorAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmCalculatorAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalculatorAgreementManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmCalculatorAgreementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmCalculatorAgreements>>>;
export declare type GetApiMerchantsServiceCrmCalculatorAgreementsQueryError = AxiosError<unknown>;
/**
 * @summary Get calculator agreements
 */
export declare const useGetApiMerchantsServiceCrmCalculatorAgreements: <TData = AxiosResponse<DataCalculatorAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmCalculatorAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalculatorAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind calculator agreements
 */
export declare const postApiMerchantsServiceCrmCalculatorAgreementsBind: (bindCalcAgreements: BindCalcAgreements, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalculatorAgreementMany>>;
export declare const getPostApiMerchantsServiceCrmCalculatorAgreementsBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorAgreementMany, any>, TError, {
        data: BindCalcAgreements;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCalculatorAgreementMany, any>, TError, {
    data: BindCalcAgreements;
}, TContext>;
export declare type PostApiMerchantsServiceCrmCalculatorAgreementsBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmCalculatorAgreementsBind>>>;
export declare type PostApiMerchantsServiceCrmCalculatorAgreementsBindMutationBody = BindCalcAgreements;
export declare type PostApiMerchantsServiceCrmCalculatorAgreementsBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind calculator agreements
 */
export declare const usePostApiMerchantsServiceCrmCalculatorAgreementsBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCalculatorAgreementMany, any>, TError, {
        data: BindCalcAgreements;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCalculatorAgreementMany, any>, TError, {
    data: BindCalcAgreements;
}, TContext>;
/**
 * @summary Get agreements
 */
export declare const getApiMerchantsServiceCrmAgreements: (params: GetApiMerchantsServiceCrmAgreementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgreementManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmAgreementsQueryKey: (params: GetApiMerchantsServiceCrmAgreementsParams) => readonly ["/api/merchants-service/crm/agreements", ...GetApiMerchantsServiceCrmAgreementsParams[]];
export declare const getGetApiMerchantsServiceCrmAgreementsQueryOptions: <TData = AxiosResponse<DataAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceCrmAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmAgreementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmAgreements>>>;
export declare type GetApiMerchantsServiceCrmAgreementsQueryError = AxiosError<unknown>;
/**
 * @summary Get agreements
 */
export declare const useGetApiMerchantsServiceCrmAgreements: <TData = AxiosResponse<DataAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceCrmAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create agreement
 */
export declare const postApiMerchantsServiceCrmAgreements: (agreementOnlyMerchantIdNextSettlementDateSettlementDelay: AgreementOnlyMerchantIdNextSettlementDateSettlementDelay, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgreement>>;
export declare const getPostApiMerchantsServiceCrmAgreementsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        data: AgreementOnlyMerchantIdNextSettlementDateSettlementDelay;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
    data: AgreementOnlyMerchantIdNextSettlementDateSettlementDelay;
}, TContext>;
export declare type PostApiMerchantsServiceCrmAgreementsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmAgreements>>>;
export declare type PostApiMerchantsServiceCrmAgreementsMutationBody = AgreementOnlyMerchantIdNextSettlementDateSettlementDelay;
export declare type PostApiMerchantsServiceCrmAgreementsMutationError = AxiosError<unknown>;
/**
 * @summary Create agreement
 */
export declare const usePostApiMerchantsServiceCrmAgreements: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        data: AgreementOnlyMerchantIdNextSettlementDateSettlementDelay;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAgreement, any>, TError, {
    data: AgreementOnlyMerchantIdNextSettlementDateSettlementDelay;
}, TContext>;
/**
 * @summary Update agreement
 */
export declare const patchApiMerchantsServiceCrmAgreementsId: (id: string, updateAgreement: UpdateAgreement, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgreement>>;
export declare const getPatchApiMerchantsServiceCrmAgreementsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        id: string;
        data: UpdateAgreement;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
    id: string;
    data: UpdateAgreement;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmAgreementsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmAgreementsId>>>;
export declare type PatchApiMerchantsServiceCrmAgreementsIdMutationBody = UpdateAgreement;
export declare type PatchApiMerchantsServiceCrmAgreementsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update agreement
 */
export declare const usePatchApiMerchantsServiceCrmAgreementsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        id: string;
        data: UpdateAgreement;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAgreement, any>, TError, {
    id: string;
    data: UpdateAgreement;
}, TContext>;
/**
 * @summary Archive agreement
 */
export declare const deleteApiMerchantsServiceCrmAgreementsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgreement>>;
export declare const getDeleteApiMerchantsServiceCrmAgreementsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiMerchantsServiceCrmAgreementsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMerchantsServiceCrmAgreementsId>>>;
export declare type DeleteApiMerchantsServiceCrmAgreementsIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive agreement
 */
export declare const useDeleteApiMerchantsServiceCrmAgreementsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAgreement, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAgreement, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get trade outlets
 */
export declare const getApiMerchantsServiceCrmTradeOutlets: (params?: GetApiMerchantsServiceCrmTradeOutletsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutletManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmTradeOutletsQueryKey: (params?: GetApiMerchantsServiceCrmTradeOutletsParams) => readonly ["/api/merchants-service/crm/trade_outlets", ...GetApiMerchantsServiceCrmTradeOutletsParams[]];
export declare const getGetApiMerchantsServiceCrmTradeOutletsQueryOptions: <TData = AxiosResponse<DataTradeOutletManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmTradeOutletsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmTradeOutlets>>>;
export declare type GetApiMerchantsServiceCrmTradeOutletsQueryError = AxiosError<unknown>;
/**
 * @summary Get trade outlets
 */
export declare const useGetApiMerchantsServiceCrmTradeOutlets: <TData = AxiosResponse<DataTradeOutletManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create trade outlet
 */
export declare const postApiMerchantsServiceCrmTradeOutlets: (tradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPostApiMerchantsServiceCrmTradeOutletsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName;
}, TContext>;
export declare type PostApiMerchantsServiceCrmTradeOutletsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmTradeOutlets>>>;
export declare type PostApiMerchantsServiceCrmTradeOutletsMutationBody = TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName;
export declare type PostApiMerchantsServiceCrmTradeOutletsMutationError = AxiosError<unknown>;
/**
 * @summary Create trade outlet
 */
export declare const usePostApiMerchantsServiceCrmTradeOutlets: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoMerchantIdName;
}, TContext>;
/**
 * @summary Get extended trade outlet by id
 */
export declare const getApiMerchantsServiceCrmTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedTradeOutlet>>;
export declare const getGetApiMerchantsServiceCrmTradeOutletsIdQueryKey: (id: string) => readonly [`/api/merchants-service/crm/trade_outlets/${string}`];
export declare const getGetApiMerchantsServiceCrmTradeOutletsIdQueryOptions: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmTradeOutletsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmTradeOutletsId>>>;
export declare type GetApiMerchantsServiceCrmTradeOutletsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended trade outlet by id
 */
export declare const useGetApiMerchantsServiceCrmTradeOutletsId: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update trade outlet
 */
export declare const patchApiMerchantsServiceCrmTradeOutletsId: (id: string, updateTradeOutletBody: UpdateTradeOutletBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPatchApiMerchantsServiceCrmTradeOutletsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: UpdateTradeOutletBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: UpdateTradeOutletBody;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmTradeOutletsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmTradeOutletsId>>>;
export declare type PatchApiMerchantsServiceCrmTradeOutletsIdMutationBody = UpdateTradeOutletBody;
export declare type PatchApiMerchantsServiceCrmTradeOutletsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update trade outlet
 */
export declare const usePatchApiMerchantsServiceCrmTradeOutletsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: UpdateTradeOutletBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: UpdateTradeOutletBody;
}, TContext>;
/**
 * @summary Archive trade outlet
 */
export declare const deleteApiMerchantsServiceCrmTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getDeleteApiMerchantsServiceCrmTradeOutletsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiMerchantsServiceCrmTradeOutletsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMerchantsServiceCrmTradeOutletsId>>>;
export declare type DeleteApiMerchantsServiceCrmTradeOutletsIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive trade outlet
 */
export declare const useDeleteApiMerchantsServiceCrmTradeOutletsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Upload trade outlet logo
 */
export declare const postApiMerchantsServiceCrmTradeOutletsIdUploadLogo: (id: string, postApiMerchantsServiceCrmMerchantsIdUploadLogoBody: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPostApiMerchantsServiceCrmTradeOutletsIdUploadLogoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmTradeOutletsIdUploadLogoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmTradeOutletsIdUploadLogo>>>;
export declare type PostApiMerchantsServiceCrmTradeOutletsIdUploadLogoMutationBody = PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
export declare type PostApiMerchantsServiceCrmTradeOutletsIdUploadLogoMutationError = AxiosError<unknown>;
/**
 * @summary Upload trade outlet logo
 */
export declare const usePostApiMerchantsServiceCrmTradeOutletsIdUploadLogo: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
/**
 * @summary Get orders
 */
export declare const getApiMerchantsServiceCrmOrders: (params?: GetApiMerchantsServiceCrmOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersManyPaginatedSummarized>>;
export declare const getGetApiMerchantsServiceCrmOrdersQueryKey: (params?: GetApiMerchantsServiceCrmOrdersParams) => readonly ["/api/merchants-service/crm/orders", ...GetApiMerchantsServiceCrmOrdersParams[]];
export declare const getGetApiMerchantsServiceCrmOrdersQueryOptions: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmOrders>>>;
export declare type GetApiMerchantsServiceCrmOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get orders
 */
export declare const useGetApiMerchantsServiceCrmOrders: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order
 */
export declare const postApiMerchantsServiceCrmOrders: (createOrderBody: CreateOrderBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateOrderResp>>;
export declare const getPostApiMerchantsServiceCrmOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrders>>>;
export declare type PostApiMerchantsServiceCrmOrdersMutationBody = CreateOrderBody;
export declare type PostApiMerchantsServiceCrmOrdersMutationError = AxiosError<unknown>;
/**
 * @summary Create order
 */
export declare const usePostApiMerchantsServiceCrmOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
/**
 * @summary Get orders with billing details
 */
export declare const getApiMerchantsServiceCrmOrdersBillingDetails: (params?: GetApiMerchantsServiceCrmOrdersBillingDetailsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersBillingDetailsManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmOrdersBillingDetailsQueryKey: (params?: GetApiMerchantsServiceCrmOrdersBillingDetailsParams) => readonly ["/api/merchants-service/crm/orders/billing_details", ...GetApiMerchantsServiceCrmOrdersBillingDetailsParams[]];
export declare const getGetApiMerchantsServiceCrmOrdersBillingDetailsQueryOptions: <TData = AxiosResponse<DataGetOrdersBillingDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersBillingDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersBillingDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersBillingDetailsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmOrdersBillingDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmOrdersBillingDetails>>>;
export declare type GetApiMerchantsServiceCrmOrdersBillingDetailsQueryError = AxiosError<unknown>;
/**
 * @summary Get orders with billing details
 */
export declare const useGetApiMerchantsServiceCrmOrdersBillingDetails: <TData = AxiosResponse<DataGetOrdersBillingDetailsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersBillingDetailsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersBillingDetailsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Count orders by statuses
 */
export declare const getApiMerchantsServiceCrmOrdersCountByStatuses: (params?: GetApiMerchantsServiceCrmOrdersCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountOrdersByStatusesRespMany>>;
export declare const getGetApiMerchantsServiceCrmOrdersCountByStatusesQueryKey: (params?: GetApiMerchantsServiceCrmOrdersCountByStatusesParams) => readonly ["/api/merchants-service/crm/orders/count/by_statuses", ...GetApiMerchantsServiceCrmOrdersCountByStatusesParams[]];
export declare const getGetApiMerchantsServiceCrmOrdersCountByStatusesQueryOptions: <TData = AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmOrdersCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmOrdersCountByStatuses>>>;
export declare type GetApiMerchantsServiceCrmOrdersCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Count orders by statuses
 */
export declare const useGetApiMerchantsServiceCrmOrdersCountByStatuses: <TData = AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmOrdersCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended order by id
 */
export declare const getApiMerchantsServiceCrmOrdersId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedOrderWithQr>>;
export declare const getGetApiMerchantsServiceCrmOrdersIdQueryKey: (id: string) => readonly [`/api/merchants-service/crm/orders/${string}`];
export declare const getGetApiMerchantsServiceCrmOrdersIdQueryOptions: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmOrdersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmOrdersId>>>;
export declare type GetApiMerchantsServiceCrmOrdersIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended order by id
 */
export declare const useGetApiMerchantsServiceCrmOrdersId: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update order
 */
export declare const patchApiMerchantsServiceCrmOrdersId: (id: string, updateOrder: UpdateOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPatchApiMerchantsServiceCrmOrdersIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrder;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmOrdersIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmOrdersId>>>;
export declare type PatchApiMerchantsServiceCrmOrdersIdMutationBody = UpdateOrder;
export declare type PatchApiMerchantsServiceCrmOrdersIdMutationError = AxiosError<unknown>;
/**
 * @summary Update order
 */
export declare const usePatchApiMerchantsServiceCrmOrdersId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrder;
}, TContext>;
/**
 * @summary Send order link
 */
export declare const postApiMerchantsServiceCrmOrdersIdSendLink: (id: string, sendOrderLinkBody: SendOrderLinkBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceCrmOrdersIdSendLinkMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersIdSendLinkMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrdersIdSendLink>>>;
export declare type PostApiMerchantsServiceCrmOrdersIdSendLinkMutationBody = SendOrderLinkBody;
export declare type PostApiMerchantsServiceCrmOrdersIdSendLinkMutationError = AxiosError<unknown>;
/**
 * @summary Send order link
 */
export declare const usePostApiMerchantsServiceCrmOrdersIdSendLink: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
/**
 * @summary Cancel order
 */
export declare const postApiMerchantsServiceCrmOrdersIdCancel: (id: string, cancelOrder: CancelOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPostApiMerchantsServiceCrmOrdersIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: CancelOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: CancelOrder;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrdersIdCancel>>>;
export declare type PostApiMerchantsServiceCrmOrdersIdCancelMutationBody = CancelOrder;
export declare type PostApiMerchantsServiceCrmOrdersIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel order
 */
export declare const usePostApiMerchantsServiceCrmOrdersIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: CancelOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: CancelOrder;
}, TContext>;
/**
 * @summary Create order payment
 */
export declare const postApiMerchantsServiceCrmOrdersIdPay: (id: string, createOrderPaymentBody: CreateOrderPaymentBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceCrmOrdersIdPayMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: CreateOrderPaymentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: CreateOrderPaymentBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersIdPayMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrdersIdPay>>>;
export declare type PostApiMerchantsServiceCrmOrdersIdPayMutationBody = CreateOrderPaymentBody;
export declare type PostApiMerchantsServiceCrmOrdersIdPayMutationError = AxiosError<unknown>;
/**
 * @summary Create order payment
 */
export declare const usePostApiMerchantsServiceCrmOrdersIdPay: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: CreateOrderPaymentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: CreateOrderPaymentBody;
}, TContext>;
/**
 * @summary Confirm order
 */
export declare const postApiMerchantsServiceCrmOrdersIdConfirm: (id: string, confirmOrder: ConfirmOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceCrmOrdersIdConfirmMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ConfirmOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ConfirmOrder;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersIdConfirmMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrdersIdConfirm>>>;
export declare type PostApiMerchantsServiceCrmOrdersIdConfirmMutationBody = ConfirmOrder;
export declare type PostApiMerchantsServiceCrmOrdersIdConfirmMutationError = AxiosError<unknown>;
/**
 * @summary Confirm order
 */
export declare const usePostApiMerchantsServiceCrmOrdersIdConfirm: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: ConfirmOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: ConfirmOrder;
}, TContext>;
/**
 * @summary Refund order
 */
export declare const postApiMerchantsServiceCrmOrdersIdRefund: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceCrmOrdersIdRefundMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiMerchantsServiceCrmOrdersIdRefundMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmOrdersIdRefund>>>;
export declare type PostApiMerchantsServiceCrmOrdersIdRefundMutationError = AxiosError<unknown>;
/**
 * @summary Refund order
 */
export declare const usePostApiMerchantsServiceCrmOrdersIdRefund: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get employee outlets
 */
export declare const getApiMerchantsServiceCrmEmployeeOutlets: (params?: GetApiMerchantsServiceCrmEmployeeOutletsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetTradeOutletsResponseManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmEmployeeOutletsQueryKey: (params?: GetApiMerchantsServiceCrmEmployeeOutletsParams) => readonly ["/api/merchants-service/crm/employee_outlets", ...GetApiMerchantsServiceCrmEmployeeOutletsParams[]];
export declare const getGetApiMerchantsServiceCrmEmployeeOutletsQueryOptions: <TData = AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmEmployeeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmEmployeeOutletsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmEmployeeOutlets>>>;
export declare type GetApiMerchantsServiceCrmEmployeeOutletsQueryError = AxiosError<unknown>;
/**
 * @summary Get employee outlets
 */
export declare const useGetApiMerchantsServiceCrmEmployeeOutlets: <TData = AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmEmployeeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind employee outlets
 */
export declare const postApiMerchantsServiceCrmEmployeeOutletsBind: (bindEmployeeOutletsBody: BindEmployeeOutletsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployeeOutletMany>>;
export declare const getPostApiMerchantsServiceCrmEmployeeOutletsBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
        data: BindEmployeeOutletsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
    data: BindEmployeeOutletsBody;
}, TContext>;
export declare type PostApiMerchantsServiceCrmEmployeeOutletsBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmEmployeeOutletsBind>>>;
export declare type PostApiMerchantsServiceCrmEmployeeOutletsBindMutationBody = BindEmployeeOutletsBody;
export declare type PostApiMerchantsServiceCrmEmployeeOutletsBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind employee outlets
 */
export declare const usePostApiMerchantsServiceCrmEmployeeOutletsBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
        data: BindEmployeeOutletsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
    data: BindEmployeeOutletsBody;
}, TContext>;
/**
 * @summary Get settlements
 */
export declare const getApiMerchantsServiceCrmSettlements: (params?: GetApiMerchantsServiceCrmSettlementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSettlementsManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmSettlementsQueryKey: (params?: GetApiMerchantsServiceCrmSettlementsParams) => readonly ["/api/merchants-service/crm/settlements", ...GetApiMerchantsServiceCrmSettlementsParams[]];
export declare const getGetApiMerchantsServiceCrmSettlementsQueryOptions: <TData = AxiosResponse<DataGetSettlementsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmSettlementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmSettlementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmSettlements>>>;
export declare type GetApiMerchantsServiceCrmSettlementsQueryError = AxiosError<unknown>;
/**
 * @summary Get settlements
 */
export declare const useGetApiMerchantsServiceCrmSettlements: <TData = AxiosResponse<DataGetSettlementsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmSettlementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create settlement
 */
export declare const postApiMerchantsServiceCrmSettlements: (createSettlement: CreateSettlement, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSettlement>>;
export declare const getPostApiMerchantsServiceCrmSettlementsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        data: CreateSettlement;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
    data: CreateSettlement;
}, TContext>;
export declare type PostApiMerchantsServiceCrmSettlementsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmSettlements>>>;
export declare type PostApiMerchantsServiceCrmSettlementsMutationBody = CreateSettlement;
export declare type PostApiMerchantsServiceCrmSettlementsMutationError = AxiosError<unknown>;
/**
 * @summary Create settlement
 */
export declare const usePostApiMerchantsServiceCrmSettlements: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        data: CreateSettlement;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSettlement, any>, TError, {
    data: CreateSettlement;
}, TContext>;
/**
 * @summary Create daily settlements
 */
export declare const postApiMerchantsServiceCrmSettlementsDaily: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSettlementsManyPaginated>>;
export declare const getPostApiMerchantsServiceCrmSettlementsDailyMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, void, TContext>;
export declare type PostApiMerchantsServiceCrmSettlementsDailyMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmSettlementsDaily>>>;
export declare type PostApiMerchantsServiceCrmSettlementsDailyMutationError = AxiosError<unknown>;
/**
 * @summary Create daily settlements
 */
export declare const usePostApiMerchantsServiceCrmSettlementsDaily: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetSettlementsManyPaginated, any>, TError, void, TContext>;
/**
 * @summary Get settlement orders
 */
export declare const getApiMerchantsServiceCrmSettlementsIdOrders: (id: string, params?: GetApiMerchantsServiceCrmSettlementsIdOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSettlementOrderManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmSettlementsIdOrdersQueryKey: (id: string, params?: GetApiMerchantsServiceCrmSettlementsIdOrdersParams) => readonly [`/api/merchants-service/crm/settlements/${string}/orders`, ...GetApiMerchantsServiceCrmSettlementsIdOrdersParams[]];
export declare const getGetApiMerchantsServiceCrmSettlementsIdOrdersQueryOptions: <TData = AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiMerchantsServiceCrmSettlementsIdOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmSettlementsIdOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmSettlementsIdOrders>>>;
export declare type GetApiMerchantsServiceCrmSettlementsIdOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get settlement orders
 */
export declare const useGetApiMerchantsServiceCrmSettlementsIdOrders: <TData = AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiMerchantsServiceCrmSettlementsIdOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Change settlement orders
 */
export declare const patchApiMerchantsServiceCrmSettlementsIdOrders: (id: string, changeSettlementOrders: ChangeSettlementOrders, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSettlement>>;
export declare const getPatchApiMerchantsServiceCrmSettlementsIdOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        id: string;
        data: ChangeSettlementOrders;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
    id: string;
    data: ChangeSettlementOrders;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmSettlementsIdOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmSettlementsIdOrders>>>;
export declare type PatchApiMerchantsServiceCrmSettlementsIdOrdersMutationBody = ChangeSettlementOrders;
export declare type PatchApiMerchantsServiceCrmSettlementsIdOrdersMutationError = AxiosError<unknown>;
/**
 * @summary Change settlement orders
 */
export declare const usePatchApiMerchantsServiceCrmSettlementsIdOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        id: string;
        data: ChangeSettlementOrders;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSettlement, any>, TError, {
    id: string;
    data: ChangeSettlementOrders;
}, TContext>;
/**
 * @summary Change settlement status
 */
export declare const patchApiMerchantsServiceCrmSettlementsIdStatus: (id: string, changeSettlementStatus: ChangeSettlementStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSettlement>>;
export declare const getPatchApiMerchantsServiceCrmSettlementsIdStatusMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        id: string;
        data: ChangeSettlementStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
    id: string;
    data: ChangeSettlementStatus;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmSettlementsIdStatusMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmSettlementsIdStatus>>>;
export declare type PatchApiMerchantsServiceCrmSettlementsIdStatusMutationBody = ChangeSettlementStatus;
export declare type PatchApiMerchantsServiceCrmSettlementsIdStatusMutationError = AxiosError<unknown>;
/**
 * @summary Change settlement status
 */
export declare const usePatchApiMerchantsServiceCrmSettlementsIdStatus: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSettlement, any>, TError, {
        id: string;
        data: ChangeSettlementStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSettlement, any>, TError, {
    id: string;
    data: ChangeSettlementStatus;
}, TContext>;
/**
 * @summary Export settlement
 */
export declare const getApiMerchantsServiceCrmSettlementsIdExport: (id: string, params: GetApiMerchantsServiceCrmSettlementsIdExportParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiMerchantsServiceCrmSettlementsIdExportQueryKey: (id: string, params: GetApiMerchantsServiceCrmSettlementsIdExportParams) => readonly [`/api/merchants-service/crm/settlements/${string}/export`, ...GetApiMerchantsServiceCrmSettlementsIdExportParams[]];
export declare const getGetApiMerchantsServiceCrmSettlementsIdExportQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params: GetApiMerchantsServiceCrmSettlementsIdExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmSettlementsIdExportQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmSettlementsIdExport>>>;
export declare type GetApiMerchantsServiceCrmSettlementsIdExportQueryError = AxiosError<unknown>;
/**
 * @summary Export settlement
 */
export declare const useGetApiMerchantsServiceCrmSettlementsIdExport: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params: GetApiMerchantsServiceCrmSettlementsIdExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get debts
 */
export declare const getApiMerchantsServiceCrmDebts: (params?: GetApiMerchantsServiceCrmDebtsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponseManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmDebtsQueryKey: (params?: GetApiMerchantsServiceCrmDebtsParams) => readonly ["/api/merchants-service/crm/debts", ...GetApiMerchantsServiceCrmDebtsParams[]];
export declare const getGetApiMerchantsServiceCrmDebtsQueryOptions: <TData = AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmDebtsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmDebtsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmDebts>>>;
export declare type GetApiMerchantsServiceCrmDebtsQueryError = AxiosError<unknown>;
/**
 * @summary Get debts
 */
export declare const useGetApiMerchantsServiceCrmDebts: <TData = AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmDebtsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create debt
 */
export declare const postApiMerchantsServiceCrmDebts: (createDebt: CreateDebt, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponse>>;
export declare const getPostApiMerchantsServiceCrmDebtsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
        data: CreateDebt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
    data: CreateDebt;
}, TContext>;
export declare type PostApiMerchantsServiceCrmDebtsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceCrmDebts>>>;
export declare type PostApiMerchantsServiceCrmDebtsMutationBody = CreateDebt;
export declare type PostApiMerchantsServiceCrmDebtsMutationError = AxiosError<unknown>;
/**
 * @summary Create debt
 */
export declare const usePostApiMerchantsServiceCrmDebts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
        data: CreateDebt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetDebtResponse, any>, TError, {
    data: CreateDebt;
}, TContext>;
/**
 * @summary Update debt
 */
export declare const patchApiMerchantsServiceCrmDebtsId: (id: string, updateDebt: UpdateDebt, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponse>>;
export declare const getPatchApiMerchantsServiceCrmDebtsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
        id: string;
        data: UpdateDebt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
    id: string;
    data: UpdateDebt;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmDebtsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmDebtsId>>>;
export declare type PatchApiMerchantsServiceCrmDebtsIdMutationBody = UpdateDebt;
export declare type PatchApiMerchantsServiceCrmDebtsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update debt
 */
export declare const usePatchApiMerchantsServiceCrmDebtsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGetDebtResponse, any>, TError, {
        id: string;
        data: UpdateDebt;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGetDebtResponse, any>, TError, {
    id: string;
    data: UpdateDebt;
}, TContext>;
/**
 * @summary Get debt by id
 */
export declare const getApiMerchantsServiceCrmDebtsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponse>>;
export declare const getGetApiMerchantsServiceCrmDebtsIdQueryKey: (id: string) => readonly [`/api/merchants-service/crm/debts/${string}`];
export declare const getGetApiMerchantsServiceCrmDebtsIdQueryOptions: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmDebtsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmDebtsId>>>;
export declare type GetApiMerchantsServiceCrmDebtsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get debt by id
 */
export declare const useGetApiMerchantsServiceCrmDebtsId: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get debt compensations
 */
export declare const getApiMerchantsServiceCrmDebtsIdCompensations: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebtCompensationMany>>;
export declare const getGetApiMerchantsServiceCrmDebtsIdCompensationsQueryKey: (id: string) => readonly [`/api/merchants-service/crm/debts/${string}/compensations`];
export declare const getGetApiMerchantsServiceCrmDebtsIdCompensationsQueryOptions: <TData = AxiosResponse<DataDebtCompensationMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmDebtsIdCompensationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmDebtsIdCompensations>>>;
export declare type GetApiMerchantsServiceCrmDebtsIdCompensationsQueryError = AxiosError<unknown>;
/**
 * @summary Get debt compensations
 */
export declare const useGetApiMerchantsServiceCrmDebtsIdCompensations: <TData = AxiosResponse<DataDebtCompensationMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get Merchants apply forms
 */
export declare const getApiMerchantsServiceCrmLeadsMerchantsApplyForm: (params?: GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantApplicationFormManyPaginated>>;
export declare const getGetApiMerchantsServiceCrmLeadsMerchantsApplyFormQueryKey: (params?: GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams) => readonly ["/api/merchants-service/crm/leads/merchants/apply_form", ...GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams[]];
export declare const getGetApiMerchantsServiceCrmLeadsMerchantsApplyFormQueryOptions: <TData = AxiosResponse<DataMerchantApplicationFormManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantApplicationFormManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMerchantApplicationFormManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceCrmLeadsMerchantsApplyFormQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceCrmLeadsMerchantsApplyForm>>>;
export declare type GetApiMerchantsServiceCrmLeadsMerchantsApplyFormQueryError = AxiosError<unknown>;
/**
 * @summary Get Merchants apply forms
 */
export declare const useGetApiMerchantsServiceCrmLeadsMerchantsApplyForm: <TData = AxiosResponse<DataMerchantApplicationFormManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceCrmLeadsMerchantsApplyFormParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantApplicationFormManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Change data in merchant apply form by id
 */
export declare const patchApiMerchantsServiceCrmLeadsMerchantsApplyFormId: (id: string, merchantApplicationFormOnlyComment: MerchantApplicationFormOnlyComment, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantApplicationForm>>;
export declare const getPatchApiMerchantsServiceCrmLeadsMerchantsApplyFormIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantApplicationForm, any>, TError, {
        id: string;
        data: MerchantApplicationFormOnlyComment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchantApplicationForm, any>, TError, {
    id: string;
    data: MerchantApplicationFormOnlyComment;
}, TContext>;
export declare type PatchApiMerchantsServiceCrmLeadsMerchantsApplyFormIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceCrmLeadsMerchantsApplyFormId>>>;
export declare type PatchApiMerchantsServiceCrmLeadsMerchantsApplyFormIdMutationBody = MerchantApplicationFormOnlyComment;
export declare type PatchApiMerchantsServiceCrmLeadsMerchantsApplyFormIdMutationError = AxiosError<unknown>;
/**
 * @summary Change data in merchant apply form by id
 */
export declare const usePatchApiMerchantsServiceCrmLeadsMerchantsApplyFormId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantApplicationForm, any>, TError, {
        id: string;
        data: MerchantApplicationFormOnlyComment;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchantApplicationForm, any>, TError, {
    id: string;
    data: MerchantApplicationFormOnlyComment;
}, TContext>;
/**
 * @summary Get merchant
 */
export declare const getApiMerchantsServiceMerchant: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantExcludeIsBlocked>>;
export declare const getGetApiMerchantsServiceMerchantQueryKey: () => readonly ["/api/merchants-service/merchant"];
export declare const getGetApiMerchantsServiceMerchantQueryOptions: <TData = AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceMerchantQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceMerchant>>>;
export declare type GetApiMerchantsServiceMerchantQueryError = AxiosError<unknown>;
/**
 * @summary Get merchant
 */
export declare const useGetApiMerchantsServiceMerchant: <TData = AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update merchant
 */
export declare const patchApiMerchantsServiceMerchant: (updateMerchantSchema: UpdateMerchantSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantExcludeIsBlocked>>;
export declare const getPatchApiMerchantsServiceMerchantMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
        data: UpdateMerchantSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
    data: UpdateMerchantSchema;
}, TContext>;
export declare type PatchApiMerchantsServiceMerchantMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceMerchant>>>;
export declare type PatchApiMerchantsServiceMerchantMutationBody = UpdateMerchantSchema;
export declare type PatchApiMerchantsServiceMerchantMutationError = AxiosError<unknown>;
/**
 * @summary Update merchant
 */
export declare const usePatchApiMerchantsServiceMerchant: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
        data: UpdateMerchantSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
    data: UpdateMerchantSchema;
}, TContext>;
/**
 * @summary Upload merchant logo
 */
export declare const postApiMerchantsServiceMerchantUploadLogo: (postApiMerchantsServiceCrmMerchantsIdUploadLogoBody: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataMerchantExcludeIsBlocked>>;
export declare const getPostApiMerchantsServiceMerchantUploadLogoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
export declare type PostApiMerchantsServiceMerchantUploadLogoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceMerchantUploadLogo>>>;
export declare type PostApiMerchantsServiceMerchantUploadLogoMutationBody = PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
export declare type PostApiMerchantsServiceMerchantUploadLogoMutationError = AxiosError<unknown>;
/**
 * @summary Upload merchant logo
 */
export declare const usePostApiMerchantsServiceMerchantUploadLogo: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataMerchantExcludeIsBlocked, any>, TError, {
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
/**
 * @summary Get merchant employees
 */
export declare const getApiMerchantsServiceEmployees: (params?: GetApiMerchantsServiceEmployeesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployeeManyPaginated>>;
export declare const getGetApiMerchantsServiceEmployeesQueryKey: (params?: GetApiMerchantsServiceEmployeesParams) => readonly ["/api/merchants-service/employees", ...GetApiMerchantsServiceEmployeesParams[]];
export declare const getGetApiMerchantsServiceEmployeesQueryOptions: <TData = AxiosResponse<DataEmployeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployees>>>;
export declare type GetApiMerchantsServiceEmployeesQueryError = AxiosError<unknown>;
/**
 * @summary Get merchant employees
 */
export declare const useGetApiMerchantsServiceEmployees: <TData = AxiosResponse<DataEmployeeManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployeeManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create merchant employee
 */
export declare const postApiMerchantsServiceEmployees: (createEmployeeExcludeMerchantId: CreateEmployeeExcludeMerchantId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getPostApiMerchantsServiceEmployeesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        data: CreateEmployeeExcludeMerchantId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    data: CreateEmployeeExcludeMerchantId;
}, TContext>;
export declare type PostApiMerchantsServiceEmployeesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceEmployees>>>;
export declare type PostApiMerchantsServiceEmployeesMutationBody = CreateEmployeeExcludeMerchantId;
export declare type PostApiMerchantsServiceEmployeesMutationError = AxiosError<unknown>;
/**
 * @summary Create merchant employee
 */
export declare const usePostApiMerchantsServiceEmployees: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        data: CreateEmployeeExcludeMerchantId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    data: CreateEmployeeExcludeMerchantId;
}, TContext>;
/**
 * @summary Get employee names
 */
export declare const getApiMerchantsServiceEmployeesNames: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetEmployeesNamesMany>>;
export declare const getGetApiMerchantsServiceEmployeesNamesQueryKey: () => readonly ["/api/merchants-service/employees/names"];
export declare const getGetApiMerchantsServiceEmployeesNamesQueryOptions: <TData = AxiosResponse<DataGetEmployeesNamesMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetEmployeesNamesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetEmployeesNamesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeesNamesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeesNames>>>;
export declare type GetApiMerchantsServiceEmployeesNamesQueryError = AxiosError<unknown>;
/**
 * @summary Get employee names
 */
export declare const useGetApiMerchantsServiceEmployeesNames: <TData = AxiosResponse<DataGetEmployeesNamesMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetEmployeesNamesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update merchant employee
 */
export declare const patchApiMerchantsServiceEmployeesId: (id: string, updateEmployeeBody: UpdateEmployeeBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getPatchApiMerchantsServiceEmployeesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
        data: UpdateEmployeeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
    data: UpdateEmployeeBody;
}, TContext>;
export declare type PatchApiMerchantsServiceEmployeesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceEmployeesId>>>;
export declare type PatchApiMerchantsServiceEmployeesIdMutationBody = UpdateEmployeeBody;
export declare type PatchApiMerchantsServiceEmployeesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update merchant employee
 */
export declare const usePatchApiMerchantsServiceEmployeesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
        data: UpdateEmployeeBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
    data: UpdateEmployeeBody;
}, TContext>;
/**
 * @summary Archive merchant employee
 */
export declare const deleteApiMerchantsServiceEmployeesId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getDeleteApiMerchantsServiceEmployeesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiMerchantsServiceEmployeesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMerchantsServiceEmployeesId>>>;
export declare type DeleteApiMerchantsServiceEmployeesIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive merchant employee
 */
export declare const useDeleteApiMerchantsServiceEmployeesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployee, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployee, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get orders
 */
export declare const getApiMerchantsServiceOrders: (params?: GetApiMerchantsServiceOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersManyPaginatedSummarized>>;
export declare const getGetApiMerchantsServiceOrdersQueryKey: (params?: GetApiMerchantsServiceOrdersParams) => readonly ["/api/merchants-service/orders", ...GetApiMerchantsServiceOrdersParams[]];
export declare const getGetApiMerchantsServiceOrdersQueryOptions: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceOrders>>>;
export declare type GetApiMerchantsServiceOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get orders
 */
export declare const useGetApiMerchantsServiceOrders: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order
 */
export declare const postApiMerchantsServiceOrders: (createOrderBody: CreateOrderBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateOrderResp>>;
export declare const getPostApiMerchantsServiceOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
export declare type PostApiMerchantsServiceOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceOrders>>>;
export declare type PostApiMerchantsServiceOrdersMutationBody = CreateOrderBody;
export declare type PostApiMerchantsServiceOrdersMutationError = AxiosError<unknown>;
/**
 * @summary Create order
 */
export declare const usePostApiMerchantsServiceOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
/**
 * @summary Get orders statuses
 */
export declare const getApiMerchantsServiceOrdersStatuses: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersStatuses>>;
export declare const getGetApiMerchantsServiceOrdersStatusesQueryKey: () => readonly ["/api/merchants-service/orders/statuses"];
export declare const getGetApiMerchantsServiceOrdersStatusesQueryOptions: <TData = AxiosResponse<DataGetOrdersStatuses, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersStatuses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersStatuses, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceOrdersStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceOrdersStatuses>>>;
export declare type GetApiMerchantsServiceOrdersStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Get orders statuses
 */
export declare const useGetApiMerchantsServiceOrdersStatuses: <TData = AxiosResponse<DataGetOrdersStatuses, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersStatuses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Orders overview chart
 */
export declare const getApiMerchantsServiceOrdersOverviewChart: (params: GetApiMerchantsServiceOrdersOverviewChartParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersOverviewChartResponse>>;
export declare const getGetApiMerchantsServiceOrdersOverviewChartQueryKey: (params: GetApiMerchantsServiceOrdersOverviewChartParams) => readonly ["/api/merchants-service/orders/overview_chart", ...GetApiMerchantsServiceOrdersOverviewChartParams[]];
export declare const getGetApiMerchantsServiceOrdersOverviewChartQueryOptions: <TData = AxiosResponse<DataGetOrdersOverviewChartResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceOrdersOverviewChartParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersOverviewChartResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersOverviewChartResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceOrdersOverviewChartQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceOrdersOverviewChart>>>;
export declare type GetApiMerchantsServiceOrdersOverviewChartQueryError = AxiosError<unknown>;
/**
 * @summary Orders overview chart
 */
export declare const useGetApiMerchantsServiceOrdersOverviewChart: <TData = AxiosResponse<DataGetOrdersOverviewChartResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceOrdersOverviewChartParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersOverviewChartResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Count orders by statuses
 */
export declare const getApiMerchantsServiceOrdersCountByStatuses: (params?: GetApiMerchantsServiceOrdersCountByStatusesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountOrdersByStatusesRespMany>>;
export declare const getGetApiMerchantsServiceOrdersCountByStatusesQueryKey: (params?: GetApiMerchantsServiceOrdersCountByStatusesParams) => readonly ["/api/merchants-service/orders/count/by_statuses", ...GetApiMerchantsServiceOrdersCountByStatusesParams[]];
export declare const getGetApiMerchantsServiceOrdersCountByStatusesQueryOptions: <TData = AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceOrdersCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceOrdersCountByStatusesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceOrdersCountByStatuses>>>;
export declare type GetApiMerchantsServiceOrdersCountByStatusesQueryError = AxiosError<unknown>;
/**
 * @summary Count orders by statuses
 */
export declare const useGetApiMerchantsServiceOrdersCountByStatuses: <TData = AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceOrdersCountByStatusesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountOrdersByStatusesRespMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended order by id
 */
export declare const getApiMerchantsServiceOrdersId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedOrderWithQr>>;
export declare const getGetApiMerchantsServiceOrdersIdQueryKey: (id: string) => readonly [`/api/merchants-service/orders/${string}`];
export declare const getGetApiMerchantsServiceOrdersIdQueryOptions: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceOrdersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceOrdersId>>>;
export declare type GetApiMerchantsServiceOrdersIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended order by id
 */
export declare const useGetApiMerchantsServiceOrdersId: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update order
 */
export declare const patchApiMerchantsServiceOrdersId: (id: string, updateOrderOnlyAmountReferenceNumberBody: UpdateOrderOnlyAmountReferenceNumberBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPatchApiMerchantsServiceOrdersIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrderOnlyAmountReferenceNumberBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrderOnlyAmountReferenceNumberBody;
}, TContext>;
export declare type PatchApiMerchantsServiceOrdersIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceOrdersId>>>;
export declare type PatchApiMerchantsServiceOrdersIdMutationBody = UpdateOrderOnlyAmountReferenceNumberBody;
export declare type PatchApiMerchantsServiceOrdersIdMutationError = AxiosError<unknown>;
/**
 * @summary Update order
 */
export declare const usePatchApiMerchantsServiceOrdersId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrderOnlyAmountReferenceNumberBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrderOnlyAmountReferenceNumberBody;
}, TContext>;
/**
 * @summary Send order link
 */
export declare const postApiMerchantsServiceOrdersIdSendLink: (id: string, sendOrderLinkBody: SendOrderLinkBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceOrdersIdSendLinkMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
export declare type PostApiMerchantsServiceOrdersIdSendLinkMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceOrdersIdSendLink>>>;
export declare type PostApiMerchantsServiceOrdersIdSendLinkMutationBody = SendOrderLinkBody;
export declare type PostApiMerchantsServiceOrdersIdSendLinkMutationError = AxiosError<unknown>;
/**
 * @summary Send order link
 */
export declare const usePostApiMerchantsServiceOrdersIdSendLink: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
/**
 * @summary Get trade outlets
 */
export declare const getApiMerchantsServiceTradeOutlets: (params?: GetApiMerchantsServiceTradeOutletsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutletManyPaginated>>;
export declare const getGetApiMerchantsServiceTradeOutletsQueryKey: (params?: GetApiMerchantsServiceTradeOutletsParams) => readonly ["/api/merchants-service/trade_outlets", ...GetApiMerchantsServiceTradeOutletsParams[]];
export declare const getGetApiMerchantsServiceTradeOutletsQueryOptions: <TData = AxiosResponse<DataTradeOutletManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceTradeOutletsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceTradeOutlets>>>;
export declare type GetApiMerchantsServiceTradeOutletsQueryError = AxiosError<unknown>;
/**
 * @summary Get trade outlets
 */
export declare const useGetApiMerchantsServiceTradeOutlets: <TData = AxiosResponse<DataTradeOutletManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create trade outlet
 */
export declare const postApiMerchantsServiceTradeOutlets: (tradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPostApiMerchantsServiceTradeOutletsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName;
}, TContext>;
export declare type PostApiMerchantsServiceTradeOutletsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceTradeOutlets>>>;
export declare type PostApiMerchantsServiceTradeOutletsMutationBody = TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName;
export declare type PostApiMerchantsServiceTradeOutletsMutationError = AxiosError<unknown>;
/**
 * @summary Create trade outlet
 */
export declare const usePostApiMerchantsServiceTradeOutlets: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    data: TradeOutletOnlyAgreementIdIsOnlineLocationLocationGeoName;
}, TContext>;
/**
 * @summary Get trade outlet names
 */
export declare const getApiMerchantsServiceTradeOutletsNames: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetTradeOutletsNamesMany>>;
export declare const getGetApiMerchantsServiceTradeOutletsNamesQueryKey: () => readonly ["/api/merchants-service/trade_outlets/names"];
export declare const getGetApiMerchantsServiceTradeOutletsNamesQueryOptions: <TData = AxiosResponse<DataGetTradeOutletsNamesMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsNamesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetTradeOutletsNamesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceTradeOutletsNamesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceTradeOutletsNames>>>;
export declare type GetApiMerchantsServiceTradeOutletsNamesQueryError = AxiosError<unknown>;
/**
 * @summary Get trade outlet names
 */
export declare const useGetApiMerchantsServiceTradeOutletsNames: <TData = AxiosResponse<DataGetTradeOutletsNamesMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsNamesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update trade outlet
 */
export declare const patchApiMerchantsServiceTradeOutletsId: (id: string, updateTradeOutletBody: UpdateTradeOutletBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPatchApiMerchantsServiceTradeOutletsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: UpdateTradeOutletBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: UpdateTradeOutletBody;
}, TContext>;
export declare type PatchApiMerchantsServiceTradeOutletsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceTradeOutletsId>>>;
export declare type PatchApiMerchantsServiceTradeOutletsIdMutationBody = UpdateTradeOutletBody;
export declare type PatchApiMerchantsServiceTradeOutletsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update trade outlet
 */
export declare const usePatchApiMerchantsServiceTradeOutletsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: UpdateTradeOutletBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: UpdateTradeOutletBody;
}, TContext>;
/**
 * @summary Archive trade outlet
 */
export declare const deleteApiMerchantsServiceTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getDeleteApiMerchantsServiceTradeOutletsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiMerchantsServiceTradeOutletsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiMerchantsServiceTradeOutletsId>>>;
export declare type DeleteApiMerchantsServiceTradeOutletsIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive trade outlet
 */
export declare const useDeleteApiMerchantsServiceTradeOutletsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get extended trade outlet by id
 */
export declare const getApiMerchantsServiceTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedTradeOutlet>>;
export declare const getGetApiMerchantsServiceTradeOutletsIdQueryKey: (id: string) => readonly [`/api/merchants-service/trade_outlets/${string}`];
export declare const getGetApiMerchantsServiceTradeOutletsIdQueryOptions: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceTradeOutletsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceTradeOutletsId>>>;
export declare type GetApiMerchantsServiceTradeOutletsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended trade outlet by id
 */
export declare const useGetApiMerchantsServiceTradeOutletsId: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload trade outlet logo
 */
export declare const postApiMerchantsServiceTradeOutletsIdUploadLogo: (id: string, postApiMerchantsServiceCrmMerchantsIdUploadLogoBody: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutlet>>;
export declare const getPostApiMerchantsServiceTradeOutletsIdUploadLogoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
export declare type PostApiMerchantsServiceTradeOutletsIdUploadLogoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceTradeOutletsIdUploadLogo>>>;
export declare type PostApiMerchantsServiceTradeOutletsIdUploadLogoMutationBody = PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
export declare type PostApiMerchantsServiceTradeOutletsIdUploadLogoMutationError = AxiosError<unknown>;
/**
 * @summary Upload trade outlet logo
 */
export declare const usePostApiMerchantsServiceTradeOutletsIdUploadLogo: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTradeOutlet, any>, TError, {
        id: string;
        data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTradeOutlet, any>, TError, {
    id: string;
    data: PostApiMerchantsServiceCrmMerchantsIdUploadLogoBody;
}, TContext>;
/**
 * @summary Get employee outlets
 */
export declare const getApiMerchantsServiceEmployeeOutlets: (params?: GetApiMerchantsServiceEmployeeOutletsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetTradeOutletsResponseManyPaginated>>;
export declare const getGetApiMerchantsServiceEmployeeOutletsQueryKey: (params?: GetApiMerchantsServiceEmployeeOutletsParams) => readonly ["/api/merchants-service/employee_outlets", ...GetApiMerchantsServiceEmployeeOutletsParams[]];
export declare const getGetApiMerchantsServiceEmployeeOutletsQueryOptions: <TData = AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeOutletsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeeOutlets>>>;
export declare type GetApiMerchantsServiceEmployeeOutletsQueryError = AxiosError<unknown>;
/**
 * @summary Get employee outlets
 */
export declare const useGetApiMerchantsServiceEmployeeOutlets: <TData = AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetTradeOutletsResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Bind employee outlets
 */
export declare const postApiMerchantsServiceEmployeeOutletsBind: (bindEmployeeOutletsBody: BindEmployeeOutletsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployeeOutletMany>>;
export declare const getPostApiMerchantsServiceEmployeeOutletsBindMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
        data: BindEmployeeOutletsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
    data: BindEmployeeOutletsBody;
}, TContext>;
export declare type PostApiMerchantsServiceEmployeeOutletsBindMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceEmployeeOutletsBind>>>;
export declare type PostApiMerchantsServiceEmployeeOutletsBindMutationBody = BindEmployeeOutletsBody;
export declare type PostApiMerchantsServiceEmployeeOutletsBindMutationError = AxiosError<unknown>;
/**
 * @summary Bind employee outlets
 */
export declare const usePostApiMerchantsServiceEmployeeOutletsBind: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
        data: BindEmployeeOutletsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmployeeOutletMany, any>, TError, {
    data: BindEmployeeOutletsBody;
}, TContext>;
/**
 * @summary Get agreements
 */
export declare const getApiMerchantsServiceAgreements: (params?: GetApiMerchantsServiceAgreementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAgreementManyPaginated>>;
export declare const getGetApiMerchantsServiceAgreementsQueryKey: (params?: GetApiMerchantsServiceAgreementsParams) => readonly ["/api/merchants-service/agreements", ...GetApiMerchantsServiceAgreementsParams[]];
export declare const getGetApiMerchantsServiceAgreementsQueryOptions: <TData = AxiosResponse<DataAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceAgreementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceAgreements>>>;
export declare type GetApiMerchantsServiceAgreementsQueryError = AxiosError<unknown>;
/**
 * @summary Get agreements
 */
export declare const useGetApiMerchantsServiceAgreements: <TData = AxiosResponse<DataAgreementManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceAgreementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAgreementManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get settlements
 */
export declare const getApiMerchantsServiceSettlements: (params?: GetApiMerchantsServiceSettlementsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSettlementsManyPaginatedSummarized>>;
export declare const getGetApiMerchantsServiceSettlementsQueryKey: (params?: GetApiMerchantsServiceSettlementsParams) => readonly ["/api/merchants-service/settlements", ...GetApiMerchantsServiceSettlementsParams[]];
export declare const getGetApiMerchantsServiceSettlementsQueryOptions: <TData = AxiosResponse<DataGetSettlementsManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceSettlementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceSettlementsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceSettlements>>>;
export declare type GetApiMerchantsServiceSettlementsQueryError = AxiosError<unknown>;
/**
 * @summary Get settlements
 */
export declare const useGetApiMerchantsServiceSettlements: <TData = AxiosResponse<DataGetSettlementsManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceSettlementsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementsManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get settlement orders
 */
export declare const getApiMerchantsServiceSettlementsIdOrders: (id: string, params?: GetApiMerchantsServiceSettlementsIdOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetSettlementOrderManyPaginated>>;
export declare const getGetApiMerchantsServiceSettlementsIdOrdersQueryKey: (id: string, params?: GetApiMerchantsServiceSettlementsIdOrdersParams) => readonly [`/api/merchants-service/settlements/${string}/orders`, ...GetApiMerchantsServiceSettlementsIdOrdersParams[]];
export declare const getGetApiMerchantsServiceSettlementsIdOrdersQueryOptions: <TData = AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiMerchantsServiceSettlementsIdOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceSettlementsIdOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceSettlementsIdOrders>>>;
export declare type GetApiMerchantsServiceSettlementsIdOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get settlement orders
 */
export declare const useGetApiMerchantsServiceSettlementsIdOrders: <TData = AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiMerchantsServiceSettlementsIdOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetSettlementOrderManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get settlement compensations
 */
export declare const getApiMerchantsServiceSettlementsIdCompensations: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDebtCompensationMany>>;
export declare const getGetApiMerchantsServiceSettlementsIdCompensationsQueryKey: (id: string) => readonly [`/api/merchants-service/settlements/${string}/compensations`];
export declare const getGetApiMerchantsServiceSettlementsIdCompensationsQueryOptions: <TData = AxiosResponse<DataDebtCompensationMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceSettlementsIdCompensationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceSettlementsIdCompensations>>>;
export declare type GetApiMerchantsServiceSettlementsIdCompensationsQueryError = AxiosError<unknown>;
/**
 * @summary Get settlement compensations
 */
export declare const useGetApiMerchantsServiceSettlementsIdCompensations: <TData = AxiosResponse<DataDebtCompensationMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDebtCompensationMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Export settlement
 */
export declare const getApiMerchantsServiceSettlementsIdExport: (id: string, params: GetApiMerchantsServiceSettlementsIdExportParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiMerchantsServiceSettlementsIdExportQueryKey: (id: string, params: GetApiMerchantsServiceSettlementsIdExportParams) => readonly [`/api/merchants-service/settlements/${string}/export`, ...GetApiMerchantsServiceSettlementsIdExportParams[]];
export declare const getGetApiMerchantsServiceSettlementsIdExportQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params: GetApiMerchantsServiceSettlementsIdExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceSettlementsIdExportQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceSettlementsIdExport>>>;
export declare type GetApiMerchantsServiceSettlementsIdExportQueryError = AxiosError<unknown>;
/**
 * @summary Export settlement
 */
export declare const useGetApiMerchantsServiceSettlementsIdExport: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params: GetApiMerchantsServiceSettlementsIdExportParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get debts
 */
export declare const getApiMerchantsServiceDebts: (params?: GetApiMerchantsServiceDebtsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponseManyPaginated>>;
export declare const getGetApiMerchantsServiceDebtsQueryKey: (params?: GetApiMerchantsServiceDebtsParams) => readonly ["/api/merchants-service/debts", ...GetApiMerchantsServiceDebtsParams[]];
export declare const getGetApiMerchantsServiceDebtsQueryOptions: <TData = AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceDebtsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceDebtsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceDebts>>>;
export declare type GetApiMerchantsServiceDebtsQueryError = AxiosError<unknown>;
/**
 * @summary Get debts
 */
export declare const useGetApiMerchantsServiceDebts: <TData = AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceDebtsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get debt
 */
export declare const getApiMerchantsServiceDebtsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponse>>;
export declare const getGetApiMerchantsServiceDebtsIdQueryKey: (id: string) => readonly [`/api/merchants-service/debts/${string}`];
export declare const getGetApiMerchantsServiceDebtsIdQueryOptions: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceDebtsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceDebtsId>>>;
export declare type GetApiMerchantsServiceDebtsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get debt
 */
export declare const useGetApiMerchantsServiceDebtsId: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get debt
 */
export declare const getApiMerchantsServiceDebtsIdCompensations: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDebtResponse>>;
export declare const getGetApiMerchantsServiceDebtsIdCompensationsQueryKey: (id: string) => readonly [`/api/merchants-service/debts/${string}/compensations`];
export declare const getGetApiMerchantsServiceDebtsIdCompensationsQueryOptions: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceDebtsIdCompensationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceDebtsIdCompensations>>>;
export declare type GetApiMerchantsServiceDebtsIdCompensationsQueryError = AxiosError<unknown>;
/**
 * @summary Get debt
 */
export declare const useGetApiMerchantsServiceDebtsIdCompensations: <TData = AxiosResponse<DataGetDebtResponse, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDebtResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get employee trade outlets
 */
export declare const getApiMerchantsServiceEmployeeTradeOutlets: (params?: GetApiMerchantsServiceEmployeeTradeOutletsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated>>;
export declare const getGetApiMerchantsServiceEmployeeTradeOutletsQueryKey: (params?: GetApiMerchantsServiceEmployeeTradeOutletsParams) => readonly ["/api/merchants-service/employee/trade_outlets", ...GetApiMerchantsServiceEmployeeTradeOutletsParams[]];
export declare const getGetApiMerchantsServiceEmployeeTradeOutletsQueryOptions: <TData = AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeeTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeTradeOutletsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeeTradeOutlets>>>;
export declare type GetApiMerchantsServiceEmployeeTradeOutletsQueryError = AxiosError<unknown>;
/**
 * @summary Get employee trade outlets
 */
export declare const useGetApiMerchantsServiceEmployeeTradeOutlets: <TData = AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceEmployeeTradeOutletsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletExcludeArchivedCreatedUpdated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended trade outlet by id
 */
export declare const getApiMerchantsServiceEmployeeTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedTradeOutlet>>;
export declare const getGetApiMerchantsServiceEmployeeTradeOutletsIdQueryKey: (id: string) => readonly [`/api/merchants-service/employee/trade_outlets/${string}`];
export declare const getGetApiMerchantsServiceEmployeeTradeOutletsIdQueryOptions: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeTradeOutletsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeeTradeOutletsId>>>;
export declare type GetApiMerchantsServiceEmployeeTradeOutletsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended trade outlet by id
 */
export declare const useGetApiMerchantsServiceEmployeeTradeOutletsId: <TData = AxiosResponse<DataGetExtendedTradeOutlet, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedTradeOutlet, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get orders
 */
export declare const getApiMerchantsServiceEmployeeOrders: (params: GetApiMerchantsServiceEmployeeOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersManyPaginatedSummarized>>;
export declare const getGetApiMerchantsServiceEmployeeOrdersQueryKey: (params: GetApiMerchantsServiceEmployeeOrdersParams) => readonly ["/api/merchants-service/employee/orders", ...GetApiMerchantsServiceEmployeeOrdersParams[]];
export declare const getGetApiMerchantsServiceEmployeeOrdersQueryOptions: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceEmployeeOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeeOrders>>>;
export declare type GetApiMerchantsServiceEmployeeOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get orders
 */
export declare const useGetApiMerchantsServiceEmployeeOrders: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceEmployeeOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order
 */
export declare const postApiMerchantsServiceEmployeeOrders: (createOrderBody: CreateOrderBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateOrderResp>>;
export declare const getPostApiMerchantsServiceEmployeeOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
export declare type PostApiMerchantsServiceEmployeeOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceEmployeeOrders>>>;
export declare type PostApiMerchantsServiceEmployeeOrdersMutationBody = CreateOrderBody;
export declare type PostApiMerchantsServiceEmployeeOrdersMutationError = AxiosError<unknown>;
/**
 * @summary Create order
 */
export declare const usePostApiMerchantsServiceEmployeeOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderBody;
}, TContext>;
/**
 * @summary Get extended order by id
 */
export declare const getApiMerchantsServiceEmployeeOrdersId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedOrderWithQr>>;
export declare const getGetApiMerchantsServiceEmployeeOrdersIdQueryKey: (id: string) => readonly [`/api/merchants-service/employee/orders/${string}`];
export declare const getGetApiMerchantsServiceEmployeeOrdersIdQueryOptions: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeOrdersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployeeOrdersId>>>;
export declare type GetApiMerchantsServiceEmployeeOrdersIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended order by id
 */
export declare const useGetApiMerchantsServiceEmployeeOrdersId: <TData = AxiosResponse<DataGetExtendedOrderWithQr, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrderWithQr, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update order
 */
export declare const patchApiMerchantsServiceEmployeeOrdersId: (id: string, updateOrderOnlyAmountReferenceNumberBody: UpdateOrderOnlyAmountReferenceNumberBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPatchApiMerchantsServiceEmployeeOrdersIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrderOnlyAmountReferenceNumberBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrderOnlyAmountReferenceNumberBody;
}, TContext>;
export declare type PatchApiMerchantsServiceEmployeeOrdersIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiMerchantsServiceEmployeeOrdersId>>>;
export declare type PatchApiMerchantsServiceEmployeeOrdersIdMutationBody = UpdateOrderOnlyAmountReferenceNumberBody;
export declare type PatchApiMerchantsServiceEmployeeOrdersIdMutationError = AxiosError<unknown>;
/**
 * @summary Update order
 */
export declare const usePatchApiMerchantsServiceEmployeeOrdersId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: UpdateOrderOnlyAmountReferenceNumberBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: UpdateOrderOnlyAmountReferenceNumberBody;
}, TContext>;
/**
 * @summary Send order link
 */
export declare const postApiMerchantsServiceEmployeeOrdersIdSendLink: (id: string, sendOrderLinkBody: SendOrderLinkBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceEmployeeOrdersIdSendLinkMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
export declare type PostApiMerchantsServiceEmployeeOrdersIdSendLinkMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceEmployeeOrdersIdSendLink>>>;
export declare type PostApiMerchantsServiceEmployeeOrdersIdSendLinkMutationBody = SendOrderLinkBody;
export declare type PostApiMerchantsServiceEmployeeOrdersIdSendLinkMutationError = AxiosError<unknown>;
/**
 * @summary Send order link
 */
export declare const usePostApiMerchantsServiceEmployeeOrdersIdSendLink: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: SendOrderLinkBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: SendOrderLinkBody;
}, TContext>;
/**
 * @summary Refund order
 */
export declare const postApiMerchantsServiceEmployeeOrdersIdRefund: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceEmployeeOrdersIdRefundMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiMerchantsServiceEmployeeOrdersIdRefundMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceEmployeeOrdersIdRefund>>>;
export declare type PostApiMerchantsServiceEmployeeOrdersIdRefundMutationError = AxiosError<unknown>;
/**
 * @summary Refund order
 */
export declare const usePostApiMerchantsServiceEmployeeOrdersIdRefund: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get employee by token
 */
export declare const getApiMerchantsServiceEmployee: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmployee>>;
export declare const getGetApiMerchantsServiceEmployeeQueryKey: () => readonly ["/api/merchants-service/employee"];
export declare const getGetApiMerchantsServiceEmployeeQueryOptions: <TData = AxiosResponse<DataEmployee, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployee, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataEmployee, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceEmployeeQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceEmployee>>>;
export declare type GetApiMerchantsServiceEmployeeQueryError = AxiosError<unknown>;
/**
 * @summary Get employee by token
 */
export declare const useGetApiMerchantsServiceEmployee: <TData = AxiosResponse<DataEmployee, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataEmployee, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get orders
 */
export declare const getApiMerchantsServiceClientsOrders: (params?: GetApiMerchantsServiceClientsOrdersParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetOrdersManyPaginatedSummarized>>;
export declare const getGetApiMerchantsServiceClientsOrdersQueryKey: (params?: GetApiMerchantsServiceClientsOrdersParams) => readonly ["/api/merchants-service/clients/orders", ...GetApiMerchantsServiceClientsOrdersParams[]];
export declare const getGetApiMerchantsServiceClientsOrdersQueryOptions: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceClientsOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceClientsOrdersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceClientsOrders>>>;
export declare type GetApiMerchantsServiceClientsOrdersQueryError = AxiosError<unknown>;
/**
 * @summary Get orders
 */
export declare const useGetApiMerchantsServiceClientsOrders: <TData = AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError = AxiosError<unknown, any>>(params?: GetApiMerchantsServiceClientsOrdersParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetOrdersManyPaginatedSummarized, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order
 */
export declare const postApiMerchantsServiceClientsOrders: (createOrderExcludeClientId: CreateOrderExcludeClientId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateOrderResp>>;
export declare const getPostApiMerchantsServiceClientsOrdersMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderExcludeClientId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderExcludeClientId;
}, TContext>;
export declare type PostApiMerchantsServiceClientsOrdersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceClientsOrders>>>;
export declare type PostApiMerchantsServiceClientsOrdersMutationBody = CreateOrderExcludeClientId;
export declare type PostApiMerchantsServiceClientsOrdersMutationError = AxiosError<unknown>;
/**
 * @summary Create order
 */
export declare const usePostApiMerchantsServiceClientsOrders: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateOrderResp, any>, TError, {
        data: CreateOrderExcludeClientId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateOrderResp, any>, TError, {
    data: CreateOrderExcludeClientId;
}, TContext>;
/**
 * @summary Get client orders summary
 */
export declare const getApiMerchantsServiceClientsOrdersSummary: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetClientOrdersSummary>>;
export declare const getGetApiMerchantsServiceClientsOrdersSummaryQueryKey: () => readonly ["/api/merchants-service/clients/orders/summary"];
export declare const getGetApiMerchantsServiceClientsOrdersSummaryQueryOptions: <TData = AxiosResponse<DataGetClientOrdersSummary, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetClientOrdersSummary, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetClientOrdersSummary, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceClientsOrdersSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceClientsOrdersSummary>>>;
export declare type GetApiMerchantsServiceClientsOrdersSummaryQueryError = AxiosError<unknown>;
/**
 * @summary Get client orders summary
 */
export declare const useGetApiMerchantsServiceClientsOrdersSummary: <TData = AxiosResponse<DataGetClientOrdersSummary, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetClientOrdersSummary, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get data by order link
 */
export declare const getApiMerchantsServiceClientsOrdersDataByLink: (params: GetApiMerchantsServiceClientsOrdersDataByLinkParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetDataByLinkResponse>>;
export declare const getGetApiMerchantsServiceClientsOrdersDataByLinkQueryKey: (params: GetApiMerchantsServiceClientsOrdersDataByLinkParams) => readonly ["/api/merchants-service/clients/orders/data_by_link", ...GetApiMerchantsServiceClientsOrdersDataByLinkParams[]];
export declare const getGetApiMerchantsServiceClientsOrdersDataByLinkQueryOptions: <TData = AxiosResponse<DataGetDataByLinkResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceClientsOrdersDataByLinkParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDataByLinkResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetDataByLinkResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceClientsOrdersDataByLinkQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceClientsOrdersDataByLink>>>;
export declare type GetApiMerchantsServiceClientsOrdersDataByLinkQueryError = AxiosError<unknown>;
/**
 * @summary Get data by order link
 */
export declare const useGetApiMerchantsServiceClientsOrdersDataByLink: <TData = AxiosResponse<DataGetDataByLinkResponse, any>, TError = AxiosError<unknown, any>>(params: GetApiMerchantsServiceClientsOrdersDataByLinkParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetDataByLinkResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get extended order by id
 */
export declare const getApiMerchantsServiceClientsOrdersId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGetExtendedOrder>>;
export declare const getGetApiMerchantsServiceClientsOrdersIdQueryKey: (id: string) => readonly [`/api/merchants-service/clients/orders/${string}`];
export declare const getGetApiMerchantsServiceClientsOrdersIdQueryOptions: <TData = AxiosResponse<DataGetExtendedOrder, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrder, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGetExtendedOrder, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceClientsOrdersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceClientsOrdersId>>>;
export declare type GetApiMerchantsServiceClientsOrdersIdQueryError = AxiosError<unknown>;
/**
 * @summary Get extended order by id
 */
export declare const useGetApiMerchantsServiceClientsOrdersId: <TData = AxiosResponse<DataGetExtendedOrder, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGetExtendedOrder, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create order payment
 */
export declare const postApiMerchantsServiceClientsOrdersIdPay: (id: string, createOrderPaymentBody: CreateOrderPaymentBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceClientsOrdersIdPayMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: CreateOrderPaymentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: CreateOrderPaymentBody;
}, TContext>;
export declare type PostApiMerchantsServiceClientsOrdersIdPayMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceClientsOrdersIdPay>>>;
export declare type PostApiMerchantsServiceClientsOrdersIdPayMutationBody = CreateOrderPaymentBody;
export declare type PostApiMerchantsServiceClientsOrdersIdPayMutationError = AxiosError<unknown>;
/**
 * @summary Create order payment
 */
export declare const usePostApiMerchantsServiceClientsOrdersIdPay: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: CreateOrderPaymentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: CreateOrderPaymentBody;
}, TContext>;
/**
 * @summary Cancel order
 */
export declare const postApiMerchantsServiceClientsOrdersIdCancel: (id: string, cancelOrderExcludeForce: CancelOrderExcludeForce, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPostApiMerchantsServiceClientsOrdersIdCancelMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: CancelOrderExcludeForce;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: CancelOrderExcludeForce;
}, TContext>;
export declare type PostApiMerchantsServiceClientsOrdersIdCancelMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceClientsOrdersIdCancel>>>;
export declare type PostApiMerchantsServiceClientsOrdersIdCancelMutationBody = CancelOrderExcludeForce;
export declare type PostApiMerchantsServiceClientsOrdersIdCancelMutationError = AxiosError<unknown>;
/**
 * @summary Cancel order
 */
export declare const usePostApiMerchantsServiceClientsOrdersIdCancel: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: CancelOrderExcludeForce;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: CancelOrderExcludeForce;
}, TContext>;
/**
 * @summary Select offer
 */
export declare const postApiMerchantsServiceClientsOrdersIdSelectOffer: (id: string, selectOffer: SelectOffer, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOrder>>;
export declare const getPostApiMerchantsServiceClientsOrdersIdSelectOfferMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: SelectOffer;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: SelectOffer;
}, TContext>;
export declare type PostApiMerchantsServiceClientsOrdersIdSelectOfferMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceClientsOrdersIdSelectOffer>>>;
export declare type PostApiMerchantsServiceClientsOrdersIdSelectOfferMutationBody = SelectOffer;
export declare type PostApiMerchantsServiceClientsOrdersIdSelectOfferMutationError = AxiosError<unknown>;
/**
 * @summary Select offer
 */
export declare const usePostApiMerchantsServiceClientsOrdersIdSelectOffer: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataOrder, any>, TError, {
        id: string;
        data: SelectOffer;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataOrder, any>, TError, {
    id: string;
    data: SelectOffer;
}, TContext>;
/**
 * @summary Get trade outlet by id
 */
export declare const getApiMerchantsServiceClientsTradeOutletsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName>>;
export declare const getGetApiMerchantsServiceClientsTradeOutletsIdQueryKey: (id: string) => readonly [`/api/merchants-service/clients/trade_outlets/${string}`];
export declare const getGetApiMerchantsServiceClientsTradeOutletsIdQueryOptions: <TData = AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceClientsTradeOutletsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceClientsTradeOutletsId>>>;
export declare type GetApiMerchantsServiceClientsTradeOutletsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get trade outlet by id
 */
export declare const useGetApiMerchantsServiceClientsTradeOutletsId: <TData = AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTradeOutletOnlyIdIsOnlineLocationLocationGeoLogoUrlName, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send auth code
 */
export declare const postApiMerchantsServiceAuthSendCode: (sendCodeRequest: SendCodeRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSendCodeResponse>>;
export declare const getPostApiMerchantsServiceAuthSendCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
        data: SendCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
    data: SendCodeRequest;
}, TContext>;
export declare type PostApiMerchantsServiceAuthSendCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceAuthSendCode>>>;
export declare type PostApiMerchantsServiceAuthSendCodeMutationBody = SendCodeRequest;
export declare type PostApiMerchantsServiceAuthSendCodeMutationError = AxiosError<unknown>;
/**
 * @summary Send auth code
 */
export declare const usePostApiMerchantsServiceAuthSendCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
        data: SendCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSendCodeResponse, any>, TError, {
    data: SendCodeRequest;
}, TContext>;
/**
 * @summary Confirm auth code and create session. Returns pair of auth tokens
 */
export declare const postApiMerchantsServiceAuthConfirmCode: (confirmCodeRequest: ConfirmCodeRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConfirmCodeResponse>>;
export declare const getPostApiMerchantsServiceAuthConfirmCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: ConfirmCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: ConfirmCodeRequest;
}, TContext>;
export declare type PostApiMerchantsServiceAuthConfirmCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceAuthConfirmCode>>>;
export declare type PostApiMerchantsServiceAuthConfirmCodeMutationBody = ConfirmCodeRequest;
export declare type PostApiMerchantsServiceAuthConfirmCodeMutationError = AxiosError<unknown>;
/**
 * @summary Confirm auth code and create session. Returns pair of auth tokens
 */
export declare const usePostApiMerchantsServiceAuthConfirmCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: ConfirmCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: ConfirmCodeRequest;
}, TContext>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const postApiMerchantsServiceAuthRefreshSession: (refreshSessionRequest: RefreshSessionRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConfirmCodeResponse>>;
export declare const getPostApiMerchantsServiceAuthRefreshSessionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: RefreshSessionRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: RefreshSessionRequest;
}, TContext>;
export declare type PostApiMerchantsServiceAuthRefreshSessionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceAuthRefreshSession>>>;
export declare type PostApiMerchantsServiceAuthRefreshSessionMutationBody = RefreshSessionRequest;
export declare type PostApiMerchantsServiceAuthRefreshSessionMutationError = AxiosError<unknown>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const usePostApiMerchantsServiceAuthRefreshSession: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: RefreshSessionRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: RefreshSessionRequest;
}, TContext>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const postApiMerchantsServiceAuthLogout: (logoutRequest: LogoutRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceAuthLogoutMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: LogoutRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: LogoutRequest;
}, TContext>;
export declare type PostApiMerchantsServiceAuthLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceAuthLogout>>>;
export declare type PostApiMerchantsServiceAuthLogoutMutationBody = LogoutRequest;
export declare type PostApiMerchantsServiceAuthLogoutMutationError = AxiosError<unknown>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const usePostApiMerchantsServiceAuthLogout: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: LogoutRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: LogoutRequest;
}, TContext>;
/**
 * @summary Create merchant application form
 */
export declare const postApiMerchantsServiceLeadsMerchantsApplyForm: (merchantsApplyFormData: MerchantsApplyFormData, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiMerchantsServiceLeadsMerchantsApplyFormMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: MerchantsApplyFormData;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: MerchantsApplyFormData;
}, TContext>;
export declare type PostApiMerchantsServiceLeadsMerchantsApplyFormMutationResult = NonNullable<Awaited<ReturnType<typeof postApiMerchantsServiceLeadsMerchantsApplyForm>>>;
export declare type PostApiMerchantsServiceLeadsMerchantsApplyFormMutationBody = MerchantsApplyFormData;
export declare type PostApiMerchantsServiceLeadsMerchantsApplyFormMutationError = AxiosError<unknown>;
/**
 * @summary Create merchant application form
 */
export declare const usePostApiMerchantsServiceLeadsMerchantsApplyForm: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: MerchantsApplyFormData;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: MerchantsApplyFormData;
}, TContext>;
/**
 * @summary Check application and container is alive
 */
export declare const getApiMerchantsServiceReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiMerchantsServiceReadinessQueryKey: () => readonly ["/api/merchants-service/readiness"];
export declare const getGetApiMerchantsServiceReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceReadiness>>>;
export declare type GetApiMerchantsServiceReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiMerchantsServiceReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiMerchantsServiceLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiMerchantsServiceLivenessQueryKey: () => readonly ["/api/merchants-service/liveness"];
export declare const getGetApiMerchantsServiceLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceLiveness>>>;
export declare type GetApiMerchantsServiceLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiMerchantsServiceLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiMerchantsServiceMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiMerchantsServiceMetricsQueryKey: () => readonly ["/api/merchants-service/metrics"];
export declare const getGetApiMerchantsServiceMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiMerchantsServiceMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiMerchantsServiceMetrics>>>;
export declare type GetApiMerchantsServiceMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiMerchantsServiceMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
