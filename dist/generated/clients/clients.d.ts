import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AadharOTPVerificationRequest, AadharRequestReceiveOTP, AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody, AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName, BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1, BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, ChatSettingsExcludeArchivedCreatedIdUpdatedBody, ClientCreateRequest, ClientDetailsExcludeArchivedCreatedIdUpdated, ClientDetailsOnlyIdOccupation, ClientExcludeArchivedCreatedExtraIdIsTestUpdated, ClientLivenessExcludeArchivedClientIdCreatedIdUpdated, ClientOnlyEmail, ConfirmEmailByOTPRequest, ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated, ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated, CreatePlacebookBulk, DataAadharResponseReceiveOTP, DataAddress, DataAddressSuggestionMany, DataAppsMany, DataAppsManyPaginated, DataBankAccount, DataBankAccountManyPaginated, DataCRMClientInfo, DataCalendarEventsMany, DataChatSettings, DataChatSettingsManyPaginated, DataClient, DataClientDetails, DataClientFileOnlyFileId, DataClientFullInfo, DataClientIDsList, DataClientIDsWithTypes, DataClientInfo, DataClientLiveness, DataClientLivenessManyPaginated, DataClientMany, DataClientManyPaginated, DataClientStatus, DataClientsAddresses, DataClientsPreviewsManyPaginated, DataConfirmEmailByOTPResponse, DataContactPerson, DataContactPersonMany, DataDeletedClient, DataDocument, DataDocumentFileManyPaginated, DataDocumentFileOnlyFileId, DataDocumentFullManyOcrData, DataDocumentManyPaginated, DataDocumentWithFiles, DataEmailVerificationsResponse, DataExperian, DataFacebookAccounts, DataFeedbacks, DataFeedbacksManyPaginated, DataFinBitCallbackOnlyIframeUrl, DataFinBitWebhook, DataFinBitWebhookExtendedExcludeArchivedPaginated, DataFinBitWebhookOnlyStatus, DataGeoPermissions, DataGoogleAccounts, DataImportClientResponse, DataLivenessResponse, DataOCRStatus, DataPhone, DataPhoneManyPaginated, DataPlacebook, DataPlacebookMany, DataPlacebookManyPaginated, DataReadinessResponse, DataReferences, DataReferencesMany, DataRegisterMobileOTPResponse, DataRetryLastOcrSchemaResponse, DataSuccessResponse, DataTestPhoneNumber, DataUploadPhotoResponse, DataWASearchResponse, DataWhatsApp, DataWorkInformation, DataZendeskJWTToken, DeleteApiClientsCrmReleaseTestClientParams, DeleteApiClientsCrmTestClientsParams, DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy, DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy, DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy, DocumentOnlyDocumentType, FeedbacksOnlyCommentRate, FinBitCallbackOnlyLocationUrlRedirectUrl, FinBitWebhookExcludeCallbackIdCreated, GeoPermissionsOnlyAllowed, GetApiClientsAddressSuggestionsParams, GetApiClientsClientLivenessParams, GetApiClientsClientsPreviewParams, GetApiClientsCrmAppsParams, GetApiClientsCrmBankAccountsParams, GetApiClientsCrmClientLivenessParams, GetApiClientsCrmDocumentsFilesParams, GetApiClientsCrmDocumentsLogParams, GetApiClientsCrmDocumentsParams, GetApiClientsCrmExperianParams, GetApiClientsCrmFeedbacksParams, GetApiClientsCrmFinBitWebhooksParams, GetApiClientsCrmPhonesParams, GetApiClientsCrmPlacebookParams, GetApiClientsCrmReferencesParams, GetApiClientsCrmSettingsChatParams, GetApiClientsCrmTestPhoneNumberParams, GetApiClientsCrmWaParams, GetApiClientsParams, GetApiClientsPlacebookParams, GetApiClientsReferencesParams, GetApiClientsZendeskGetJwtParams, ImportClientRequest, LandlinePhone, PlacebookExcludeArchivedCreatedIdUpdatedBody, PostApiClientsCrmClientIdImportDocumentFileBody, PostApiClientsCrmClientIdUploadClientFileBody, PostApiClientsCrmDocumentsUploadFileBody, PostApiClientsDocumentsUploadPhotoBody, ReferencesExcludeArchivedCreatedIdUpdated, ReferencesExcludeCreatedIdUpdated, RetryLastOcrSchema, Token, Token1, UpdateBankAccount, UpdateZendeskTicketPayload, ValidateMobileOTPRequest, WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1, WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, WorkInformationOnlyClientIdCompanyNameIncomeIndustry } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiClientsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiClientsReadinessQueryKey: () => readonly ["/api/clients/readiness"];
export declare const getGetApiClientsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsReadiness>>>;
export declare type GetApiClientsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiClientsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiClientsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiClientsLivenessQueryKey: () => readonly ["/api/clients/liveness"];
export declare const getGetApiClientsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsLiveness>>>;
export declare type GetApiClientsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiClientsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiClientsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsMetricsQueryKey: () => readonly ["/api/clients/metrics"];
export declare const getGetApiClientsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsMetrics>>>;
export declare type GetApiClientsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiClientsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create client
 */
export declare const postApiClients: (clientCreateRequest: ClientCreateRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClient>>;
export declare const getPostApiClientsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
        data: ClientCreateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
    data: ClientCreateRequest;
}, TContext>;
export declare type PostApiClientsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClients>>>;
export declare type PostApiClientsMutationBody = ClientCreateRequest;
export declare type PostApiClientsMutationError = AxiosError<unknown>;
/**
 * @summary Create client
 */
export declare const usePostApiClients: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
        data: ClientCreateRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClient, any>, TError, {
    data: ClientCreateRequest;
}, TContext>;
/**
 * @summary Search clients
 */
export declare const getApiClients: (params?: GetApiClientsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientManyPaginated>>;
export declare const getGetApiClientsQueryKey: (params?: GetApiClientsParams) => readonly ["/api/clients/", ...GetApiClientsParams[]];
export declare const getGetApiClientsQueryOptions: <TData = AxiosResponse<DataClientManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClients>>>;
export declare type GetApiClientsQueryError = AxiosError<unknown>;
/**
 * @summary Search clients
 */
export declare const useGetApiClients: <TData = AxiosResponse<DataClientManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update client info
 */
export declare const patchApiClients: (clientExcludeArchivedCreatedExtraIdIsTestUpdated: ClientExcludeArchivedCreatedExtraIdIsTestUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClient>>;
export declare const getPatchApiClientsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
        data: ClientExcludeArchivedCreatedExtraIdIsTestUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
    data: ClientExcludeArchivedCreatedExtraIdIsTestUpdated;
}, TContext>;
export declare type PatchApiClientsMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClients>>>;
export declare type PatchApiClientsMutationBody = ClientExcludeArchivedCreatedExtraIdIsTestUpdated;
export declare type PatchApiClientsMutationError = AxiosError<unknown>;
/**
 * @summary update client info
 */
export declare const usePatchApiClients: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClient, any>, TError, {
        data: ClientExcludeArchivedCreatedExtraIdIsTestUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClient, any>, TError, {
    data: ClientExcludeArchivedCreatedExtraIdIsTestUpdated;
}, TContext>;
/**
 * @summary Get clients preview
 */
export declare const getApiClientsClientsPreview: (params?: GetApiClientsClientsPreviewParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsPreviewsManyPaginated>>;
export declare const getGetApiClientsClientsPreviewQueryKey: (params?: GetApiClientsClientsPreviewParams) => readonly ["/api/clients/clients_preview", ...GetApiClientsClientsPreviewParams[]];
export declare const getGetApiClientsClientsPreviewQueryOptions: <TData = AxiosResponse<DataClientsPreviewsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsClientsPreviewParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPreviewsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsPreviewsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsClientsPreviewQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsClientsPreview>>>;
export declare type GetApiClientsClientsPreviewQueryError = AxiosError<unknown>;
/**
 * @summary Get clients preview
 */
export declare const useGetApiClientsClientsPreview: <TData = AxiosResponse<DataClientsPreviewsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsClientsPreviewParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsPreviewsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client by mobile phone number
 */
export declare const getApiClientsPhonePhoneNumber: (phoneNumber?: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClient>>;
export declare const getGetApiClientsPhonePhoneNumberQueryKey: (phoneNumber?: string) => readonly [`/api/clients/phone/${string}`];
export declare const getGetApiClientsPhonePhoneNumberQueryOptions: <TData = AxiosResponse<DataClient, any>, TError = AxiosError<unknown, any>>(phoneNumber?: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsPhonePhoneNumberQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsPhonePhoneNumber>>>;
export declare type GetApiClientsPhonePhoneNumberQueryError = AxiosError<unknown>;
/**
 * @summary get client by mobile phone number
 */
export declare const useGetApiClientsPhonePhoneNumber: <TData = AxiosResponse<DataClient, any>, TError = AxiosError<unknown, any>>(phoneNumber?: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client by email
 */
export declare const getApiClientsEmailEmail: (email: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClient>>;
export declare const getGetApiClientsEmailEmailQueryKey: (email: string) => readonly [`/api/clients/email/${string}`];
export declare const getGetApiClientsEmailEmailQueryOptions: <TData = AxiosResponse<DataClient, any>, TError = AxiosError<unknown, any>>(email: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsEmailEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsEmailEmail>>>;
export declare type GetApiClientsEmailEmailQueryError = AxiosError<unknown>;
/**
 * @summary get client by email
 */
export declare const useGetApiClientsEmailEmail: <TData = AxiosResponse<DataClient, any>, TError = AxiosError<unknown, any>>(email: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClient, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client by uuid
 */
export declare const getApiClientsIdId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCRMClientInfo>>;
export declare const getGetApiClientsIdIdQueryKey: (id: string) => readonly [`/api/clients/id/${string}`];
export declare const getGetApiClientsIdIdQueryOptions: <TData = AxiosResponse<DataCRMClientInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCRMClientInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCRMClientInfo, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsIdIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsIdId>>>;
export declare type GetApiClientsIdIdQueryError = AxiosError<unknown>;
/**
 * @summary get client by uuid
 */
export declare const useGetApiClientsIdId: <TData = AxiosResponse<DataCRMClientInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCRMClientInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client by id
 */
export declare const getApiClientsIdIdFull: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientFullInfo>>;
export declare const getGetApiClientsIdIdFullQueryKey: (id: string) => readonly [`/api/clients/id/${string}/full`];
export declare const getGetApiClientsIdIdFullQueryOptions: <TData = AxiosResponse<DataClientFullInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientFullInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientFullInfo, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsIdIdFullQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsIdIdFull>>>;
export declare type GetApiClientsIdIdFullQueryError = AxiosError<unknown>;
/**
 * @summary get client by id
 */
export declare const useGetApiClientsIdIdFull: <TData = AxiosResponse<DataClientFullInfo, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientFullInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * The request id must be the file_id or document_photo_id from the clients-documents service
 * @summary Download client file from s3
 */
export declare const getApiClientsFilesIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsFilesIdDownloadQueryKey: (id: string) => readonly [`/api/clients/files/${string}/download`];
export declare const getGetApiClientsFilesIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsFilesIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsFilesIdDownload>>>;
export declare type GetApiClientsFilesIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download client file from s3
 */
export declare const useGetApiClientsFilesIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search clients documents
 */
export declare const getApiClientsCrmDocuments: (params?: GetApiClientsCrmDocumentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentManyPaginated>>;
export declare const getGetApiClientsCrmDocumentsQueryKey: (params?: GetApiClientsCrmDocumentsParams) => readonly ["/api/clients/crm/documents", ...GetApiClientsCrmDocumentsParams[]];
export declare const getGetApiClientsCrmDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmDocuments>>>;
export declare type GetApiClientsCrmDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Search clients documents
 */
export declare const useGetApiClientsCrmDocuments: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get documents log
 */
export declare const getApiClientsCrmDocumentsLog: (params: GetApiClientsCrmDocumentsLogParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentManyPaginated>>;
export declare const getGetApiClientsCrmDocumentsLogQueryKey: (params: GetApiClientsCrmDocumentsLogParams) => readonly ["/api/clients/crm/documents/log", ...GetApiClientsCrmDocumentsLogParams[]];
export declare const getGetApiClientsCrmDocumentsLogQueryOptions: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmDocumentsLogParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmDocumentsLogQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmDocumentsLog>>>;
export declare type GetApiClientsCrmDocumentsLogQueryError = AxiosError<unknown>;
/**
 * @summary Get documents log
 */
export declare const useGetApiClientsCrmDocumentsLog: <TData = AxiosResponse<DataDocumentManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmDocumentsLogParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search client document files
 */
export declare const getApiClientsCrmDocumentsFiles: (params: GetApiClientsCrmDocumentsFilesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFileManyPaginated>>;
export declare const getGetApiClientsCrmDocumentsFilesQueryKey: (params: GetApiClientsCrmDocumentsFilesParams) => readonly ["/api/clients/crm/documents/files", ...GetApiClientsCrmDocumentsFilesParams[]];
export declare const getGetApiClientsCrmDocumentsFilesQueryOptions: <TData = AxiosResponse<DataDocumentFileManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmDocumentsFilesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFileManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFileManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmDocumentsFilesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmDocumentsFiles>>>;
export declare type GetApiClientsCrmDocumentsFilesQueryError = AxiosError<unknown>;
/**
 * @summary Search client document files
 */
export declare const useGetApiClientsCrmDocumentsFiles: <TData = AxiosResponse<DataDocumentFileManyPaginated, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmDocumentsFilesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFileManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Upload document file
 */
export declare const postApiClientsCrmDocumentsUploadFile: (postApiClientsCrmDocumentsUploadFileBody: PostApiClientsCrmDocumentsUploadFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFileOnlyFileId>>;
export declare const getPostApiClientsCrmDocumentsUploadFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
        data: PostApiClientsCrmDocumentsUploadFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
    data: PostApiClientsCrmDocumentsUploadFileBody;
}, TContext>;
export declare type PostApiClientsCrmDocumentsUploadFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmDocumentsUploadFile>>>;
export declare type PostApiClientsCrmDocumentsUploadFileMutationBody = PostApiClientsCrmDocumentsUploadFileBody;
export declare type PostApiClientsCrmDocumentsUploadFileMutationError = AxiosError<unknown>;
/**
 * @summary Upload document file
 */
export declare const usePostApiClientsCrmDocumentsUploadFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
        data: PostApiClientsCrmDocumentsUploadFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
    data: PostApiClientsCrmDocumentsUploadFileBody;
}, TContext>;
/**
 * @summary Get full documents info with recognition task
 */
export declare const getApiClientsCrmDocumentsIdFull: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFullManyOcrData>>;
export declare const getGetApiClientsCrmDocumentsIdFullQueryKey: (id: string) => readonly [`/api/clients/crm/documents/${string}/full`];
export declare const getGetApiClientsCrmDocumentsIdFullQueryOptions: <TData = AxiosResponse<DataDocumentFullManyOcrData, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFullManyOcrData, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentFullManyOcrData, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmDocumentsIdFullQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmDocumentsIdFull>>>;
export declare type GetApiClientsCrmDocumentsIdFullQueryError = AxiosError<unknown>;
/**
 * @summary Get full documents info with recognition task
 */
export declare const useGetApiClientsCrmDocumentsIdFull: <TData = AxiosResponse<DataDocumentFullManyOcrData, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentFullManyOcrData, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update document
 */
export declare const patchApiClientsCrmDocumentsId: (id: string, documentExcludeArchivedCreatedIdUpdatedUpdatedBy: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPatchApiClientsCrmDocumentsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy;
}, TContext>;
export declare type PatchApiClientsCrmDocumentsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsCrmDocumentsId>>>;
export declare type PatchApiClientsCrmDocumentsIdMutationBody = DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy;
export declare type PatchApiClientsCrmDocumentsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update document
 */
export declare const usePatchApiClientsCrmDocumentsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: DocumentExcludeArchivedCreatedIdUpdatedUpdatedBy;
}, TContext>;
/**
 * @summary Search clients phones
 */
export declare const getApiClientsCrmPhones: (params?: GetApiClientsCrmPhonesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPhoneManyPaginated>>;
export declare const getGetApiClientsCrmPhonesQueryKey: (params?: GetApiClientsCrmPhonesParams) => readonly ["/api/clients/crm/phones", ...GetApiClientsCrmPhonesParams[]];
export declare const getGetApiClientsCrmPhonesQueryOptions: <TData = AxiosResponse<DataPhoneManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmPhonesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPhoneManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPhoneManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmPhonesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmPhones>>>;
export declare type GetApiClientsCrmPhonesQueryError = AxiosError<unknown>;
/**
 * @summary Search clients phones
 */
export declare const useGetApiClientsCrmPhones: <TData = AxiosResponse<DataPhoneManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmPhonesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPhoneManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @deprecated
 * @summary get all contact persons of the client who are our clients, and all clients who has the client as contact person
 */
export declare const getApiClientsCrmIdRelativeClients: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientIDsList>>;
export declare const getGetApiClientsCrmIdRelativeClientsQueryKey: (id: string) => readonly [`/api/clients/crm/${string}/relative_clients`];
export declare const getGetApiClientsCrmIdRelativeClientsQueryOptions: <TData = AxiosResponse<DataClientIDsList, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientIDsList, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientIDsList, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmIdRelativeClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmIdRelativeClients>>>;
export declare type GetApiClientsCrmIdRelativeClientsQueryError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary get all contact persons of the client who are our clients, and all clients who has the client as contact person
 */
export declare const useGetApiClientsCrmIdRelativeClients: <TData = AxiosResponse<DataClientIDsList, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientIDsList, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get all contact persons of the client who are our clients, and all clients who has the client as contact person separated by types
 */
export declare const getApiClientsCrmIdRelativeClientsByType: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientIDsWithTypes>>;
export declare const getGetApiClientsCrmIdRelativeClientsByTypeQueryKey: (id: string) => readonly [`/api/clients/crm/${string}/relative_clients/by_type`];
export declare const getGetApiClientsCrmIdRelativeClientsByTypeQueryOptions: <TData = AxiosResponse<DataClientIDsWithTypes, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientIDsWithTypes, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientIDsWithTypes, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmIdRelativeClientsByTypeQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmIdRelativeClientsByType>>>;
export declare type GetApiClientsCrmIdRelativeClientsByTypeQueryError = AxiosError<unknown>;
/**
 * @summary get all contact persons of the client who are our clients, and all clients who has the client as contact person separated by types
 */
export declare const useGetApiClientsCrmIdRelativeClientsByType: <TData = AxiosResponse<DataClientIDsWithTypes, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientIDsWithTypes, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary search client liveness info
 */
export declare const getApiClientsCrmClientLiveness: (params?: GetApiClientsCrmClientLivenessParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientLivenessManyPaginated>>;
export declare const getGetApiClientsCrmClientLivenessQueryKey: (params?: GetApiClientsCrmClientLivenessParams) => readonly ["/api/clients/crm/client_liveness", ...GetApiClientsCrmClientLivenessParams[]];
export declare const getGetApiClientsCrmClientLivenessQueryOptions: <TData = AxiosResponse<DataClientLivenessManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmClientLivenessParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmClientLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmClientLiveness>>>;
export declare type GetApiClientsCrmClientLivenessQueryError = AxiosError<unknown>;
/**
 * @summary search client liveness info
 */
export declare const useGetApiClientsCrmClientLiveness: <TData = AxiosResponse<DataClientLivenessManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmClientLivenessParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search wa by client ids
 */
export declare const getApiClientsCrmWa: (params?: GetApiClientsCrmWaParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWASearchResponse>>;
export declare const getGetApiClientsCrmWaQueryKey: (params?: GetApiClientsCrmWaParams) => readonly ["/api/clients/crm/wa", ...GetApiClientsCrmWaParams[]];
export declare const getGetApiClientsCrmWaQueryOptions: <TData = AxiosResponse<DataWASearchResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmWaParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWASearchResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataWASearchResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmWaQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmWa>>>;
export declare type GetApiClientsCrmWaQueryError = AxiosError<unknown>;
/**
 * @summary Search wa by client ids
 */
export declare const useGetApiClientsCrmWa: <TData = AxiosResponse<DataWASearchResponse, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmWaParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataWASearchResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search installed apps by client ids
 */
export declare const getApiClientsCrmApps: (params?: GetApiClientsCrmAppsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAppsManyPaginated>>;
export declare const getGetApiClientsCrmAppsQueryKey: (params?: GetApiClientsCrmAppsParams) => readonly ["/api/clients/crm/apps", ...GetApiClientsCrmAppsParams[]];
export declare const getGetApiClientsCrmAppsQueryOptions: <TData = AxiosResponse<DataAppsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmAppsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAppsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAppsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmAppsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmApps>>>;
export declare type GetApiClientsCrmAppsQueryError = AxiosError<unknown>;
/**
 * @summary Search installed apps by client ids
 */
export declare const useGetApiClientsCrmApps: <TData = AxiosResponse<DataAppsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmAppsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAppsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update address with reverse_geocode
 */
export declare const postApiClientsCrmAddressIdReverseGeocode: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddress>>;
export declare const getPostApiClientsCrmAddressIdReverseGeocodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiClientsCrmAddressIdReverseGeocodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmAddressIdReverseGeocode>>>;
export declare type PostApiClientsCrmAddressIdReverseGeocodeMutationError = AxiosError<unknown>;
/**
 * @summary update address with reverse_geocode
 */
export declare const usePostApiClientsCrmAddressIdReverseGeocode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAddress, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Remove test clients
 */
export declare const deleteApiClientsCrmTestClients: (params?: DeleteApiClientsCrmTestClientsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientMany>>;
export declare const getDeleteApiClientsCrmTestClientsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientMany, any>, TError, {
        params?: DeleteApiClientsCrmTestClientsParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientMany, any>, TError, {
    params?: DeleteApiClientsCrmTestClientsParams | undefined;
}, TContext>;
export declare type DeleteApiClientsCrmTestClientsMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsCrmTestClients>>>;
export declare type DeleteApiClientsCrmTestClientsMutationError = AxiosError<unknown>;
/**
 * @summary Remove test clients
 */
export declare const useDeleteApiClientsCrmTestClients: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientMany, any>, TError, {
        params?: DeleteApiClientsCrmTestClientsParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientMany, any>, TError, {
    params?: DeleteApiClientsCrmTestClientsParams | undefined;
}, TContext>;
/**
 * @summary Removes one oldest client from a specific pool of numbers
 */
export declare const deleteApiClientsCrmReleaseTestClient: (params?: DeleteApiClientsCrmReleaseTestClientParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDeletedClient>>;
export declare const getDeleteApiClientsCrmReleaseTestClientMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDeletedClient, any>, TError, {
        params?: DeleteApiClientsCrmReleaseTestClientParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDeletedClient, any>, TError, {
    params?: DeleteApiClientsCrmReleaseTestClientParams | undefined;
}, TContext>;
export declare type DeleteApiClientsCrmReleaseTestClientMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsCrmReleaseTestClient>>>;
export declare type DeleteApiClientsCrmReleaseTestClientMutationError = AxiosError<unknown>;
/**
 * @summary Removes one oldest client from a specific pool of numbers
 */
export declare const useDeleteApiClientsCrmReleaseTestClient: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDeletedClient, any>, TError, {
        params?: DeleteApiClientsCrmReleaseTestClientParams | undefined;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDeletedClient, any>, TError, {
    params?: DeleteApiClientsCrmReleaseTestClientParams | undefined;
}, TContext>;
/**
 * @summary Search first free test phone number
 */
export declare const getApiClientsCrmTestPhoneNumber: (params?: GetApiClientsCrmTestPhoneNumberParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTestPhoneNumber>>;
export declare const getGetApiClientsCrmTestPhoneNumberQueryKey: (params?: GetApiClientsCrmTestPhoneNumberParams) => readonly ["/api/clients/crm/test_phone_number", ...GetApiClientsCrmTestPhoneNumberParams[]];
export declare const getGetApiClientsCrmTestPhoneNumberQueryOptions: <TData = AxiosResponse<DataTestPhoneNumber, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmTestPhoneNumberParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTestPhoneNumber, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataTestPhoneNumber, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmTestPhoneNumberQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmTestPhoneNumber>>>;
export declare type GetApiClientsCrmTestPhoneNumberQueryError = AxiosError<unknown>;
/**
 * @summary Search first free test phone number
 */
export declare const useGetApiClientsCrmTestPhoneNumber: <TData = AxiosResponse<DataTestPhoneNumber, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmTestPhoneNumberParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataTestPhoneNumber, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get clients addresses
 */
export declare const getApiClientsCrmClientsIdAddresses: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientsAddresses>>;
export declare const getGetApiClientsCrmClientsIdAddressesQueryKey: (id: string) => readonly [`/api/clients/crm/clients/${string}/addresses`];
export declare const getGetApiClientsCrmClientsIdAddressesQueryOptions: <TData = AxiosResponse<DataClientsAddresses, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsAddresses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientsAddresses, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmClientsIdAddressesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmClientsIdAddresses>>>;
export declare type GetApiClientsCrmClientsIdAddressesQueryError = AxiosError<unknown>;
/**
 * @summary Get clients addresses
 */
export declare const useGetApiClientsCrmClientsIdAddresses: <TData = AxiosResponse<DataClientsAddresses, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientsAddresses, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Retry last client ocr task and update his document
 */
export declare const postApiClientsCrmClientsOcrRetryLast: (retryLastOcrSchema: RetryLastOcrSchema, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRetryLastOcrSchemaResponse>>;
export declare const getPostApiClientsCrmClientsOcrRetryLastMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRetryLastOcrSchemaResponse, any>, TError, {
        data: RetryLastOcrSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRetryLastOcrSchemaResponse, any>, TError, {
    data: RetryLastOcrSchema;
}, TContext>;
export declare type PostApiClientsCrmClientsOcrRetryLastMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmClientsOcrRetryLast>>>;
export declare type PostApiClientsCrmClientsOcrRetryLastMutationBody = RetryLastOcrSchema;
export declare type PostApiClientsCrmClientsOcrRetryLastMutationError = AxiosError<unknown>;
/**
 * @summary Retry last client ocr task and update his document
 */
export declare const usePostApiClientsCrmClientsOcrRetryLast: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRetryLastOcrSchemaResponse, any>, TError, {
        data: RetryLastOcrSchema;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRetryLastOcrSchemaResponse, any>, TError, {
    data: RetryLastOcrSchema;
}, TContext>;
/**
 * @summary Update address
 */
export declare const patchApiClientsCrmAddressId: (id: string, addressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddress>>;
export declare const getPatchApiClientsCrmAddressIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
        data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
    id: string;
    data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PatchApiClientsCrmAddressIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsCrmAddressId>>>;
export declare type PatchApiClientsCrmAddressIdMutationBody = AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PatchApiClientsCrmAddressIdMutationError = AxiosError<unknown>;
/**
 * @summary Update address
 */
export declare const usePatchApiClientsCrmAddressId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
        data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAddress, any>, TError, {
    id: string;
    data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary Create client from json (without files)
 */
export declare const postApiClientsCrmImport: (importClientRequest: ImportClientRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataImportClientResponse>>;
export declare const getPostApiClientsCrmImportMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportClientResponse, any>, TError, {
        data: ImportClientRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataImportClientResponse, any>, TError, {
    data: ImportClientRequest;
}, TContext>;
export declare type PostApiClientsCrmImportMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmImport>>>;
export declare type PostApiClientsCrmImportMutationBody = ImportClientRequest;
export declare type PostApiClientsCrmImportMutationError = AxiosError<unknown>;
/**
 * @summary Create client from json (without files)
 */
export declare const usePostApiClientsCrmImport: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataImportClientResponse, any>, TError, {
        data: ImportClientRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataImportClientResponse, any>, TError, {
    data: ImportClientRequest;
}, TContext>;
/**
 * @deprecated
 * @summary upload photo (passport or selfie with document) deprecated
 */
export declare const postApiClientsCrmClientIdUploadClientFile: (clientId: string, postApiClientsCrmClientIdUploadClientFileBody: PostApiClientsCrmClientIdUploadClientFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientFileOnlyFileId>>;
export declare const getPostApiClientsCrmClientIdUploadClientFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
        clientId: string;
        data: PostApiClientsCrmClientIdUploadClientFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
    clientId: string;
    data: PostApiClientsCrmClientIdUploadClientFileBody;
}, TContext>;
export declare type PostApiClientsCrmClientIdUploadClientFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmClientIdUploadClientFile>>>;
export declare type PostApiClientsCrmClientIdUploadClientFileMutationBody = PostApiClientsCrmClientIdUploadClientFileBody;
export declare type PostApiClientsCrmClientIdUploadClientFileMutationError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary upload photo (passport or selfie with document) deprecated
 */
export declare const usePostApiClientsCrmClientIdUploadClientFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
        clientId: string;
        data: PostApiClientsCrmClientIdUploadClientFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
    clientId: string;
    data: PostApiClientsCrmClientIdUploadClientFileBody;
}, TContext>;
/**
 * @summary upload photo (passport or selfie with document)
 */
export declare const postApiClientsCrmClientIdImportDocumentFile: (clientId: string, postApiClientsCrmClientIdImportDocumentFileBody: PostApiClientsCrmClientIdImportDocumentFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentFileOnlyFileId>>;
export declare const getPostApiClientsCrmClientIdImportDocumentFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
        clientId: string;
        data: PostApiClientsCrmClientIdImportDocumentFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
    clientId: string;
    data: PostApiClientsCrmClientIdImportDocumentFileBody;
}, TContext>;
export declare type PostApiClientsCrmClientIdImportDocumentFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmClientIdImportDocumentFile>>>;
export declare type PostApiClientsCrmClientIdImportDocumentFileMutationBody = PostApiClientsCrmClientIdImportDocumentFileBody;
export declare type PostApiClientsCrmClientIdImportDocumentFileMutationError = AxiosError<unknown>;
/**
 * @summary upload photo (passport or selfie with document)
 */
export declare const usePostApiClientsCrmClientIdImportDocumentFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
        clientId: string;
        data: PostApiClientsCrmClientIdImportDocumentFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentFileOnlyFileId, any>, TError, {
    clientId: string;
    data: PostApiClientsCrmClientIdImportDocumentFileBody;
}, TContext>;
/**
 * @summary Get parsed experian report
 */
export declare const getApiClientsCrmExperian: (params: GetApiClientsCrmExperianParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsCrmExperianQueryKey: (params: GetApiClientsCrmExperianParams) => readonly ["/api/clients/crm/experian", ...GetApiClientsCrmExperianParams[]];
export declare const getGetApiClientsCrmExperianQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmExperianParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmExperianQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmExperian>>>;
export declare type GetApiClientsCrmExperianQueryError = AxiosError<unknown>;
/**
 * @summary Get parsed experian report
 */
export declare const useGetApiClientsCrmExperian: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsCrmExperianParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get reference names
 */
export declare const getApiClientsCrmReferences: (params?: GetApiClientsCrmReferencesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReferencesMany>>;
export declare const getGetApiClientsCrmReferencesQueryKey: (params?: GetApiClientsCrmReferencesParams) => readonly ["/api/clients/crm/references", ...GetApiClientsCrmReferencesParams[]];
export declare const getGetApiClientsCrmReferencesQueryOptions: <TData = AxiosResponse<DataReferencesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmReferencesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmReferencesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmReferences>>>;
export declare type GetApiClientsCrmReferencesQueryError = AxiosError<unknown>;
/**
 * @summary Get reference names
 */
export declare const useGetApiClientsCrmReferences: <TData = AxiosResponse<DataReferencesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmReferencesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create reference name
 */
export declare const postApiClientsCrmReferences: (referencesExcludeArchivedCreatedIdUpdated: ReferencesExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReferences>>;
export declare const getPostApiClientsCrmReferencesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        data: ReferencesExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
    data: ReferencesExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsCrmReferencesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmReferences>>>;
export declare type PostApiClientsCrmReferencesMutationBody = ReferencesExcludeArchivedCreatedIdUpdated;
export declare type PostApiClientsCrmReferencesMutationError = AxiosError<unknown>;
/**
 * @summary Create reference name
 */
export declare const usePostApiClientsCrmReferences: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        data: ReferencesExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataReferences, any>, TError, {
    data: ReferencesExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Update reference by id
 */
export declare const patchApiClientsCrmReferencesId: (id: string, referencesExcludeCreatedIdUpdated: ReferencesExcludeCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReferences>>;
export declare const getPatchApiClientsCrmReferencesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        id: string;
        data: ReferencesExcludeCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
    id: string;
    data: ReferencesExcludeCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsCrmReferencesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsCrmReferencesId>>>;
export declare type PatchApiClientsCrmReferencesIdMutationBody = ReferencesExcludeCreatedIdUpdated;
export declare type PatchApiClientsCrmReferencesIdMutationError = AxiosError<unknown>;
/**
 * @summary Update reference by id
 */
export declare const usePatchApiClientsCrmReferencesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        id: string;
        data: ReferencesExcludeCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataReferences, any>, TError, {
    id: string;
    data: ReferencesExcludeCreatedIdUpdated;
}, TContext>;
/**
 * @summary Archive reference by id
 */
export declare const deleteApiClientsCrmReferencesId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReferences>>;
export declare const getDeleteApiClientsCrmReferencesIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsCrmReferencesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsCrmReferencesId>>>;
export declare type DeleteApiClientsCrmReferencesIdMutationError = AxiosError<unknown>;
/**
 * @summary Archive reference by id
 */
export declare const useDeleteApiClientsCrmReferencesId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataReferences, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataReferences, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get reference names
 */
export declare const getApiClientsReferences: (params?: GetApiClientsReferencesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReferencesMany>>;
export declare const getGetApiClientsReferencesQueryKey: (params?: GetApiClientsReferencesParams) => readonly ["/api/clients/references", ...GetApiClientsReferencesParams[]];
export declare const getGetApiClientsReferencesQueryOptions: <TData = AxiosResponse<DataReferencesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsReferencesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsReferencesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsReferences>>>;
export declare type GetApiClientsReferencesQueryError = AxiosError<unknown>;
/**
 * @summary Get reference names
 */
export declare const useGetApiClientsReferences: <TData = AxiosResponse<DataReferencesMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsReferencesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataReferencesMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get chat settings
 */
export declare const getApiClientsCrmSettingsChat: (params?: GetApiClientsCrmSettingsChatParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataChatSettingsManyPaginated>>;
export declare const getGetApiClientsCrmSettingsChatQueryKey: (params?: GetApiClientsCrmSettingsChatParams) => readonly ["/api/clients/crm/settings/chat", ...GetApiClientsCrmSettingsChatParams[]];
export declare const getGetApiClientsCrmSettingsChatQueryOptions: <TData = AxiosResponse<DataChatSettingsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmSettingsChatParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataChatSettingsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataChatSettingsManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmSettingsChatQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmSettingsChat>>>;
export declare type GetApiClientsCrmSettingsChatQueryError = AxiosError<unknown>;
/**
 * @summary Get chat settings
 */
export declare const useGetApiClientsCrmSettingsChat: <TData = AxiosResponse<DataChatSettingsManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmSettingsChatParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataChatSettingsManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create chat settings
 */
export declare const postApiClientsCrmSettingsChat: (chatSettingsExcludeArchivedCreatedIdUpdatedBody: ChatSettingsExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataChatSettings>>;
export declare const getPostApiClientsCrmSettingsChatMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
        data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
    data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiClientsCrmSettingsChatMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmSettingsChat>>>;
export declare type PostApiClientsCrmSettingsChatMutationBody = ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiClientsCrmSettingsChatMutationError = AxiosError<unknown>;
/**
 * @summary Create chat settings
 */
export declare const usePostApiClientsCrmSettingsChat: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
        data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataChatSettings, any>, TError, {
    data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Update chat settings
 */
export declare const patchApiClientsCrmSettingsChatId: (id: string, chatSettingsExcludeArchivedCreatedIdUpdatedBody: ChatSettingsExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataChatSettings>>;
export declare const getPatchApiClientsCrmSettingsChatIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
        id: string;
        data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
    id: string;
    data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiClientsCrmSettingsChatIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsCrmSettingsChatId>>>;
export declare type PatchApiClientsCrmSettingsChatIdMutationBody = ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiClientsCrmSettingsChatIdMutationError = AxiosError<unknown>;
/**
 * @summary Update chat settings
 */
export declare const usePatchApiClientsCrmSettingsChatId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataChatSettings, any>, TError, {
        id: string;
        data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataChatSettings, any>, TError, {
    id: string;
    data: ChatSettingsExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Get records from placebook
 */
export declare const getApiClientsCrmPlacebook: (params?: GetApiClientsCrmPlacebookParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebookManyPaginated>>;
export declare const getGetApiClientsCrmPlacebookQueryKey: (params?: GetApiClientsCrmPlacebookParams) => readonly ["/api/clients/crm/placebook", ...GetApiClientsCrmPlacebookParams[]];
export declare const getGetApiClientsCrmPlacebookQueryOptions: <TData = AxiosResponse<DataPlacebookManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmPlacebookParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmPlacebookQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmPlacebook>>>;
export declare type GetApiClientsCrmPlacebookQueryError = AxiosError<unknown>;
/**
 * @summary Get records from placebook
 */
export declare const useGetApiClientsCrmPlacebook: <TData = AxiosResponse<DataPlacebookManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmPlacebookParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create placebook record
 */
export declare const postApiClientsCrmPlacebook: (placebookExcludeArchivedCreatedIdUpdatedBody: PlacebookExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebook>>;
export declare const getPostApiClientsCrmPlacebookMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
    data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PostApiClientsCrmPlacebookMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmPlacebook>>>;
export declare type PostApiClientsCrmPlacebookMutationBody = PlacebookExcludeArchivedCreatedIdUpdatedBody;
export declare type PostApiClientsCrmPlacebookMutationError = AxiosError<unknown>;
/**
 * @summary Create placebook record
 */
export declare const usePostApiClientsCrmPlacebook: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPlacebook, any>, TError, {
    data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Create many placebook records
 */
export declare const postApiClientsCrmPlacebookBulk: (createPlacebookBulk: CreatePlacebookBulk, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebookMany>>;
export declare const getPostApiClientsCrmPlacebookBulkMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebookMany, any>, TError, {
        data: CreatePlacebookBulk;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPlacebookMany, any>, TError, {
    data: CreatePlacebookBulk;
}, TContext>;
export declare type PostApiClientsCrmPlacebookBulkMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsCrmPlacebookBulk>>>;
export declare type PostApiClientsCrmPlacebookBulkMutationBody = CreatePlacebookBulk;
export declare type PostApiClientsCrmPlacebookBulkMutationError = AxiosError<unknown>;
/**
 * @summary Create many placebook records
 */
export declare const usePostApiClientsCrmPlacebookBulk: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebookMany, any>, TError, {
        data: CreatePlacebookBulk;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPlacebookMany, any>, TError, {
    data: CreatePlacebookBulk;
}, TContext>;
/**
 * @summary Update placebook record
 */
export declare const patchApiClientsCrmPlacebookId: (id: string, placebookExcludeArchivedCreatedIdUpdatedBody: PlacebookExcludeArchivedCreatedIdUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebook>>;
export declare const getPatchApiClientsCrmPlacebookIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        id: string;
        data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
    id: string;
    data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
export declare type PatchApiClientsCrmPlacebookIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsCrmPlacebookId>>>;
export declare type PatchApiClientsCrmPlacebookIdMutationBody = PlacebookExcludeArchivedCreatedIdUpdatedBody;
export declare type PatchApiClientsCrmPlacebookIdMutationError = AxiosError<unknown>;
/**
 * @summary Update placebook record
 */
export declare const usePatchApiClientsCrmPlacebookId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        id: string;
        data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPlacebook, any>, TError, {
    id: string;
    data: PlacebookExcludeArchivedCreatedIdUpdatedBody;
}, TContext>;
/**
 * @summary Delete placebook record
 */
export declare const deleteApiClientsCrmPlacebookId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebook>>;
export declare const getDeleteApiClientsCrmPlacebookIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
    id: string;
}, TContext>;
export declare type DeleteApiClientsCrmPlacebookIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsCrmPlacebookId>>>;
export declare type DeleteApiClientsCrmPlacebookIdMutationError = AxiosError<unknown>;
/**
 * @summary Delete placebook record
 */
export declare const useDeleteApiClientsCrmPlacebookId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPlacebook, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPlacebook, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Get records from placebook
 */
export declare const getApiClientsPlacebook: (params?: GetApiClientsPlacebookParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPlacebookManyPaginated>>;
export declare const getGetApiClientsPlacebookQueryKey: (params?: GetApiClientsPlacebookParams) => readonly ["/api/clients/placebook", ...GetApiClientsPlacebookParams[]];
export declare const getGetApiClientsPlacebookQueryOptions: <TData = AxiosResponse<DataPlacebookManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsPlacebookParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsPlacebookQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsPlacebook>>>;
export declare type GetApiClientsPlacebookQueryError = AxiosError<unknown>;
/**
 * @summary Get records from placebook
 */
export declare const useGetApiClientsPlacebook: <TData = AxiosResponse<DataPlacebookManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsPlacebookParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataPlacebookManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client info
 */
export declare const getApiClientsWhoami: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientInfo>>;
export declare const getGetApiClientsWhoamiQueryKey: () => readonly ["/api/clients/whoami"];
export declare const getGetApiClientsWhoamiQueryOptions: <TData = AxiosResponse<DataClientInfo, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientInfo, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsWhoamiQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsWhoami>>>;
export declare type GetApiClientsWhoamiQueryError = AxiosError<unknown>;
/**
 * @summary get client info
 */
export declare const useGetApiClientsWhoami: <TData = AxiosResponse<DataClientInfo, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientInfo, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update client details
 */
export declare const patchApiClientsClientDetails: (clientDetailsExcludeArchivedCreatedIdUpdated: ClientDetailsExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientDetails>>;
export declare const getPatchApiClientsClientDetailsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
        data: ClientDetailsExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
    data: ClientDetailsExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PatchApiClientsClientDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsClientDetails>>>;
export declare type PatchApiClientsClientDetailsMutationBody = ClientDetailsExcludeArchivedCreatedIdUpdated;
export declare type PatchApiClientsClientDetailsMutationError = AxiosError<unknown>;
/**
 * @summary update client details
 */
export declare const usePatchApiClientsClientDetails: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
        data: ClientDetailsExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientDetails, any>, TError, {
    data: ClientDetailsExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Create Or Update Client Details via crm Integration
 */
export declare const putApiClientsCrmClientDetails: (clientDetailsOnlyIdOccupation: ClientDetailsOnlyIdOccupation, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientDetails>>;
export declare const getPutApiClientsCrmClientDetailsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
        data: ClientDetailsOnlyIdOccupation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
    data: ClientDetailsOnlyIdOccupation;
}, TContext>;
export declare type PutApiClientsCrmClientDetailsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsCrmClientDetails>>>;
export declare type PutApiClientsCrmClientDetailsMutationBody = ClientDetailsOnlyIdOccupation;
export declare type PutApiClientsCrmClientDetailsMutationError = AxiosError<unknown>;
/**
 * @summary Create Or Update Client Details via crm Integration
 */
export declare const usePutApiClientsCrmClientDetails: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientDetails, any>, TError, {
        data: ClientDetailsOnlyIdOccupation;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientDetails, any>, TError, {
    data: ClientDetailsOnlyIdOccupation;
}, TContext>;
/**
 * @summary get client status
 */
export declare const getApiClientsStatus: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientStatus>>;
export declare const getGetApiClientsStatusQueryKey: () => readonly ["/api/clients/status"];
export declare const getGetApiClientsStatusQueryOptions: <TData = AxiosResponse<DataClientStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsStatus>>>;
export declare type GetApiClientsStatusQueryError = AxiosError<unknown>;
/**
 * @summary get client status
 */
export declare const useGetApiClientsStatus: <TData = AxiosResponse<DataClientStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get client calendar events by active loans
 */
export declare const getApiClientsCalendarEvents: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCalendarEventsMany>>;
export declare const getGetApiClientsCalendarEventsQueryKey: () => readonly ["/api/clients/calendar_events"];
export declare const getGetApiClientsCalendarEventsQueryOptions: <TData = AxiosResponse<DataCalendarEventsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalendarEventsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCalendarEventsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCalendarEventsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCalendarEvents>>>;
export declare type GetApiClientsCalendarEventsQueryError = AxiosError<unknown>;
/**
 * @summary get client calendar events by active loans
 */
export declare const useGetApiClientsCalendarEvents: <TData = AxiosResponse<DataCalendarEventsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataCalendarEventsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @deprecated
 * @summary upload photo (passport or selfie with document)
 */
export declare const postApiClientsUploadClientFile: (postApiClientsCrmClientIdUploadClientFileBody: PostApiClientsCrmClientIdUploadClientFileBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientFileOnlyFileId>>;
export declare const getPostApiClientsUploadClientFileMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
        data: PostApiClientsCrmClientIdUploadClientFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
    data: PostApiClientsCrmClientIdUploadClientFileBody;
}, TContext>;
export declare type PostApiClientsUploadClientFileMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsUploadClientFile>>>;
export declare type PostApiClientsUploadClientFileMutationBody = PostApiClientsCrmClientIdUploadClientFileBody;
export declare type PostApiClientsUploadClientFileMutationError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary upload photo (passport or selfie with document)
 */
export declare const usePostApiClientsUploadClientFile: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
        data: PostApiClientsCrmClientIdUploadClientFileBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientFileOnlyFileId, any>, TError, {
    data: PostApiClientsCrmClientIdUploadClientFileBody;
}, TContext>;
/**
 * @summary Send email with otp code
 */
export declare const postApiClientsEmailVerification: (clientOnlyEmail: ClientOnlyEmail, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEmailVerificationsResponse>>;
export declare const getPostApiClientsEmailVerificationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmailVerificationsResponse, any>, TError, {
        data: ClientOnlyEmail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEmailVerificationsResponse, any>, TError, {
    data: ClientOnlyEmail;
}, TContext>;
export declare type PostApiClientsEmailVerificationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsEmailVerification>>>;
export declare type PostApiClientsEmailVerificationMutationBody = ClientOnlyEmail;
export declare type PostApiClientsEmailVerificationMutationError = AxiosError<unknown>;
/**
 * @summary Send email with otp code
 */
export declare const usePostApiClientsEmailVerification: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEmailVerificationsResponse, any>, TError, {
        data: ClientOnlyEmail;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEmailVerificationsResponse, any>, TError, {
    data: ClientOnlyEmail;
}, TContext>;
/**
 * @summary Confirm email by otp
 */
export declare const postApiClientsConfirmEmailByOtp: (confirmEmailByOTPRequest: ConfirmEmailByOTPRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConfirmEmailByOTPResponse>>;
export declare const getPostApiClientsConfirmEmailByOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmEmailByOTPResponse, any>, TError, {
        data: ConfirmEmailByOTPRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataConfirmEmailByOTPResponse, any>, TError, {
    data: ConfirmEmailByOTPRequest;
}, TContext>;
export declare type PostApiClientsConfirmEmailByOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsConfirmEmailByOtp>>>;
export declare type PostApiClientsConfirmEmailByOtpMutationBody = ConfirmEmailByOTPRequest;
export declare type PostApiClientsConfirmEmailByOtpMutationError = AxiosError<unknown>;
/**
 * @summary Confirm email by otp
 */
export declare const usePostApiClientsConfirmEmailByOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmEmailByOTPResponse, any>, TError, {
        data: ConfirmEmailByOTPRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataConfirmEmailByOTPResponse, any>, TError, {
    data: ConfirmEmailByOTPRequest;
}, TContext>;
/**
 * @summary add bank account for user
 */
export declare const postApiClientsBankAccounts: (bankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccount>>;
export declare const getPostApiClientsBankAccountsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PostApiClientsBankAccountsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsBankAccounts>>>;
export declare type PostApiClientsBankAccountsMutationBody = BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PostApiClientsBankAccountsMutationError = AxiosError<unknown>;
/**
 * @summary add bank account for user
 */
export declare const usePostApiClientsBankAccounts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankAccount, any>, TError, {
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update last or create bank account for user
 */
export declare const putApiClientsBankAccounts: (bankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccount>>;
export declare const getPutApiClientsBankAccountsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PutApiClientsBankAccountsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsBankAccounts>>>;
export declare type PutApiClientsBankAccountsMutationBody = BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PutApiClientsBankAccountsMutationError = AxiosError<unknown>;
/**
 * @summary update last or create bank account for user
 */
export declare const usePutApiClientsBankAccounts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankAccount, any>, TError, {
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update bank account
 */
export declare const patchApiClientsBankAccountsId: (id: string, bankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccount>>;
export declare const getPatchApiClientsBankAccountsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        id: string;
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
    id: string;
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
}, TContext>;
export declare type PatchApiClientsBankAccountsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsBankAccountsId>>>;
export declare type PatchApiClientsBankAccountsIdMutationBody = BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
export declare type PatchApiClientsBankAccountsIdMutationError = AxiosError<unknown>;
/**
 * @summary update bank account
 */
export declare const usePatchApiClientsBankAccountsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        id: string;
        data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankAccount, any>, TError, {
    id: string;
    data: BankAccountExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
}, TContext>;
/**
 * @summary Update last or create bank account for user
 */
export declare const putApiClientsCrmBankAccounts: (updateBankAccount: UpdateBankAccount, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccount>>;
export declare const getPutApiClientsCrmBankAccountsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: UpdateBankAccount;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
    data: UpdateBankAccount;
}, TContext>;
export declare type PutApiClientsCrmBankAccountsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsCrmBankAccounts>>>;
export declare type PutApiClientsCrmBankAccountsMutationBody = UpdateBankAccount;
export declare type PutApiClientsCrmBankAccountsMutationError = AxiosError<unknown>;
/**
 * @summary Update last or create bank account for user
 */
export declare const usePutApiClientsCrmBankAccounts: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataBankAccount, any>, TError, {
        data: UpdateBankAccount;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataBankAccount, any>, TError, {
    data: UpdateBankAccount;
}, TContext>;
/**
 * @summary Get client bank accounts
 */
export declare const getApiClientsCrmBankAccounts: (params?: GetApiClientsCrmBankAccountsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataBankAccountManyPaginated>>;
export declare const getGetApiClientsCrmBankAccountsQueryKey: (params?: GetApiClientsCrmBankAccountsParams) => readonly ["/api/clients/crm/bank_accounts", ...GetApiClientsCrmBankAccountsParams[]];
export declare const getGetApiClientsCrmBankAccountsQueryOptions: <TData = AxiosResponse<DataBankAccountManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmBankAccountsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankAccountManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataBankAccountManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmBankAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmBankAccounts>>>;
export declare type GetApiClientsCrmBankAccountsQueryError = AxiosError<unknown>;
/**
 * @summary Get client bank accounts
 */
export declare const useGetApiClientsCrmBankAccounts: <TData = AxiosResponse<DataBankAccountManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmBankAccountsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataBankAccountManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create empty document
 */
export declare const postApiClientsDocuments: (documentOnlyDocumentType: DocumentOnlyDocumentType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPostApiClientsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: DocumentOnlyDocumentType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    data: DocumentOnlyDocumentType;
}, TContext>;
export declare type PostApiClientsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocuments>>>;
export declare type PostApiClientsDocumentsMutationBody = DocumentOnlyDocumentType;
export declare type PostApiClientsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary create empty document
 */
export declare const usePostApiClientsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: DocumentOnlyDocumentType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    data: DocumentOnlyDocumentType;
}, TContext>;
/**
 * @summary update last or create document for user
 */
export declare const putApiClientsDocuments: (documentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy: DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPutApiClientsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    data: DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy;
}, TContext>;
export declare type PutApiClientsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsDocuments>>>;
export declare type PutApiClientsDocumentsMutationBody = DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy;
export declare type PutApiClientsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary update last or create document for user
 */
export declare const usePutApiClientsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        data: DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    data: DocumentExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedUpdatedBy;
}, TContext>;
/**
 * @summary upload photo (passport or selfie with document)
 */
export declare const postApiClientsDocumentsUploadPhoto: (postApiClientsDocumentsUploadPhotoBody: PostApiClientsDocumentsUploadPhotoBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataUploadPhotoResponse>>;
export declare const getPostApiClientsDocumentsUploadPhotoMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadPhotoResponse, any>, TError, {
        data: PostApiClientsDocumentsUploadPhotoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataUploadPhotoResponse, any>, TError, {
    data: PostApiClientsDocumentsUploadPhotoBody;
}, TContext>;
export declare type PostApiClientsDocumentsUploadPhotoMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsDocumentsUploadPhoto>>>;
export declare type PostApiClientsDocumentsUploadPhotoMutationBody = PostApiClientsDocumentsUploadPhotoBody;
export declare type PostApiClientsDocumentsUploadPhotoMutationError = AxiosError<unknown>;
/**
 * @summary upload photo (passport or selfie with document)
 */
export declare const usePostApiClientsDocumentsUploadPhoto: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataUploadPhotoResponse, any>, TError, {
        data: PostApiClientsDocumentsUploadPhotoBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataUploadPhotoResponse, any>, TError, {
    data: PostApiClientsDocumentsUploadPhotoBody;
}, TContext>;
/**
 * @summary get document info with metadata of uploaded files
 */
export declare const getApiClientsDocumentsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentWithFiles>>;
export declare const getGetApiClientsDocumentsIdQueryKey: (id: string) => readonly [`/api/clients/documents/${string}`];
export declare const getGetApiClientsDocumentsIdQueryOptions: <TData = AxiosResponse<DataDocumentWithFiles, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentWithFiles, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentWithFiles, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsId>>>;
export declare type GetApiClientsDocumentsIdQueryError = AxiosError<unknown>;
/**
 * @summary get document info with metadata of uploaded files
 */
export declare const useGetApiClientsDocumentsId: <TData = AxiosResponse<DataDocumentWithFiles, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentWithFiles, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary update document info with metadata of uploaded files
 */
export declare const patchApiClientsDocumentsId: (id: string, documentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy: DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPatchApiClientsDocumentsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy;
}, TContext>;
export declare type PatchApiClientsDocumentsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsId>>>;
export declare type PatchApiClientsDocumentsIdMutationBody = DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy;
export declare type PatchApiClientsDocumentsIdMutationError = AxiosError<unknown>;
/**
 * @summary update document info with metadata of uploaded files
 */
export declare const usePatchApiClientsDocumentsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: DocumentExcludeArchivedClientIdCreatedDocumentTypeIdSessionIdSessionTypeUpdatedUpdatedBy;
}, TContext>;
/**
 * @summary get last ocr status by document
 */
export declare const getApiClientsDocumentsIdRecognitionStatus: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataOCRStatus>>;
export declare const getGetApiClientsDocumentsIdRecognitionStatusQueryKey: (id: string) => readonly [`/api/clients/documents/${string}/recognition_status`];
export declare const getGetApiClientsDocumentsIdRecognitionStatusQueryOptions: <TData = AxiosResponse<DataOCRStatus, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOCRStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataOCRStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsIdRecognitionStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsIdRecognitionStatus>>>;
export declare type GetApiClientsDocumentsIdRecognitionStatusQueryError = AxiosError<unknown>;
/**
 * @summary get last ocr status by document
 */
export declare const useGetApiClientsDocumentsIdRecognitionStatus: <TData = AxiosResponse<DataOCRStatus, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataOCRStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * The request id must be the file_id or document_photo_id from the clients-documents service
 * @summary Download client file from s3
 */
export declare const getApiClientsDocumentsFilesIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsDocumentsFilesIdDownloadQueryKey: (id: string) => readonly [`/api/clients/documents/files/${string}/download`];
export declare const getGetApiClientsDocumentsFilesIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsDocumentsFilesIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsDocumentsFilesIdDownload>>>;
export declare type GetApiClientsDocumentsFilesIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download client file from s3
 */
export declare const useGetApiClientsDocumentsFilesIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary get otp code by aadhar number and update document number
 */
export declare const postApiClientsGetOtpByAadhar: (aadharRequestReceiveOTP: AadharRequestReceiveOTP, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAadharResponseReceiveOTP>>;
export declare const getPostApiClientsGetOtpByAadharMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAadharResponseReceiveOTP, any>, TError, {
        data: AadharRequestReceiveOTP;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAadharResponseReceiveOTP, any>, TError, {
    data: AadharRequestReceiveOTP;
}, TContext>;
export declare type PostApiClientsGetOtpByAadharMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsGetOtpByAadhar>>>;
export declare type PostApiClientsGetOtpByAadharMutationBody = AadharRequestReceiveOTP;
export declare type PostApiClientsGetOtpByAadharMutationError = AxiosError<unknown>;
/**
 * @summary get otp code by aadhar number and update document number
 */
export declare const usePostApiClientsGetOtpByAadhar: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAadharResponseReceiveOTP, any>, TError, {
        data: AadharRequestReceiveOTP;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAadharResponseReceiveOTP, any>, TError, {
    data: AadharRequestReceiveOTP;
}, TContext>;
/**
 * @summary update document by aadhar
 */
export declare const patchApiClientsDocumentsIdUpdateByAadhar: (id: string, aadharOTPVerificationRequest: AadharOTPVerificationRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocument>>;
export declare const getPatchApiClientsDocumentsIdUpdateByAadharMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: AadharOTPVerificationRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: AadharOTPVerificationRequest;
}, TContext>;
export declare type PatchApiClientsDocumentsIdUpdateByAadharMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsDocumentsIdUpdateByAadhar>>>;
export declare type PatchApiClientsDocumentsIdUpdateByAadharMutationBody = AadharOTPVerificationRequest;
export declare type PatchApiClientsDocumentsIdUpdateByAadharMutationError = AxiosError<unknown>;
/**
 * @summary update document by aadhar
 */
export declare const usePatchApiClientsDocumentsIdUpdateByAadhar: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocument, any>, TError, {
        id: string;
        data: AadharOTPVerificationRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocument, any>, TError, {
    id: string;
    data: AadharOTPVerificationRequest;
}, TContext>;
/**
 * @summary register enhanced mobile otp
 */
export declare const postApiClientsExperianGetOtp: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataRegisterMobileOTPResponse>>;
export declare const getPostApiClientsExperianGetOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRegisterMobileOTPResponse, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataRegisterMobileOTPResponse, any>, TError, void, TContext>;
export declare type PostApiClientsExperianGetOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsExperianGetOtp>>>;
export declare type PostApiClientsExperianGetOtpMutationError = AxiosError<unknown>;
/**
 * @summary register enhanced mobile otp
 */
export declare const usePostApiClientsExperianGetOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataRegisterMobileOTPResponse, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataRegisterMobileOTPResponse, any>, TError, void, TContext>;
/**
 * @summary register enhanced mobile otp
 */
export declare const postApiClientsExperianValidateOtp: (validateMobileOTPRequest: ValidateMobileOTPRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataExperian>>;
export declare const getPostApiClientsExperianValidateOtpMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataExperian, any>, TError, {
        data: ValidateMobileOTPRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataExperian, any>, TError, {
    data: ValidateMobileOTPRequest;
}, TContext>;
export declare type PostApiClientsExperianValidateOtpMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsExperianValidateOtp>>>;
export declare type PostApiClientsExperianValidateOtpMutationBody = ValidateMobileOTPRequest;
export declare type PostApiClientsExperianValidateOtpMutationError = AxiosError<unknown>;
/**
 * @summary register enhanced mobile otp
 */
export declare const usePostApiClientsExperianValidateOtp: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataExperian, any>, TError, {
        data: ValidateMobileOTPRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataExperian, any>, TError, {
    data: ValidateMobileOTPRequest;
}, TContext>;
/**
 * @summary Get experian reports parsed to json
 */
export declare const getApiClientsExperian: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsExperianQueryKey: () => readonly ["/api/clients/experian"];
export declare const getGetApiClientsExperianQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsExperianQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsExperian>>>;
export declare type GetApiClientsExperianQueryError = AxiosError<unknown>;
/**
 * @summary Get experian reports parsed to json
 */
export declare const useGetApiClientsExperian: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary init callback
 */
export declare const postApiClientsFinBitInitCallback: (finBitCallbackOnlyLocationUrlRedirectUrl: FinBitCallbackOnlyLocationUrlRedirectUrl, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFinBitCallbackOnlyIframeUrl>>;
export declare const getPostApiClientsFinBitInitCallbackMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFinBitCallbackOnlyIframeUrl, any>, TError, {
        data: FinBitCallbackOnlyLocationUrlRedirectUrl;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFinBitCallbackOnlyIframeUrl, any>, TError, {
    data: FinBitCallbackOnlyLocationUrlRedirectUrl;
}, TContext>;
export declare type PostApiClientsFinBitInitCallbackMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsFinBitInitCallback>>>;
export declare type PostApiClientsFinBitInitCallbackMutationBody = FinBitCallbackOnlyLocationUrlRedirectUrl;
export declare type PostApiClientsFinBitInitCallbackMutationError = AxiosError<unknown>;
/**
 * @summary init callback
 */
export declare const usePostApiClientsFinBitInitCallback: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFinBitCallbackOnlyIframeUrl, any>, TError, {
        data: FinBitCallbackOnlyLocationUrlRedirectUrl;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFinBitCallbackOnlyIframeUrl, any>, TError, {
    data: FinBitCallbackOnlyLocationUrlRedirectUrl;
}, TContext>;
/**
 * @summary complete fin bit callback
 */
export declare const postApiClientsFinBitCompleteCallbackId: (callbackId: string, finBitWebhookExcludeCallbackIdCreated: FinBitWebhookExcludeCallbackIdCreated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFinBitWebhook>>;
export declare const getPostApiClientsFinBitCompleteCallbackIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFinBitWebhook, any>, TError, {
        callbackId: string;
        data: FinBitWebhookExcludeCallbackIdCreated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFinBitWebhook, any>, TError, {
    callbackId: string;
    data: FinBitWebhookExcludeCallbackIdCreated;
}, TContext>;
export declare type PostApiClientsFinBitCompleteCallbackIdMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsFinBitCompleteCallbackId>>>;
export declare type PostApiClientsFinBitCompleteCallbackIdMutationBody = FinBitWebhookExcludeCallbackIdCreated;
export declare type PostApiClientsFinBitCompleteCallbackIdMutationError = AxiosError<unknown>;
/**
 * @summary complete fin bit callback
 */
export declare const usePostApiClientsFinBitCompleteCallbackId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFinBitWebhook, any>, TError, {
        callbackId: string;
        data: FinBitWebhookExcludeCallbackIdCreated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFinBitWebhook, any>, TError, {
    callbackId: string;
    data: FinBitWebhookExcludeCallbackIdCreated;
}, TContext>;
/**
 * @summary get fin bit callback status
 */
export declare const getApiClientsFinBitStatus: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFinBitWebhookOnlyStatus>>;
export declare const getGetApiClientsFinBitStatusQueryKey: () => readonly ["/api/clients/fin_bit/status"];
export declare const getGetApiClientsFinBitStatusQueryOptions: <TData = AxiosResponse<DataFinBitWebhookOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFinBitWebhookOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFinBitWebhookOnlyStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsFinBitStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsFinBitStatus>>>;
export declare type GetApiClientsFinBitStatusQueryError = AxiosError<unknown>;
/**
 * @summary get fin bit callback status
 */
export declare const useGetApiClientsFinBitStatus: <TData = AxiosResponse<DataFinBitWebhookOnlyStatus, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFinBitWebhookOnlyStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search fin bit webhooks
 */
export declare const getApiClientsCrmFinBitWebhooks: (params?: GetApiClientsCrmFinBitWebhooksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated>>;
export declare const getGetApiClientsCrmFinBitWebhooksQueryKey: (params?: GetApiClientsCrmFinBitWebhooksParams) => readonly ["/api/clients/crm/fin_bit/webhooks", ...GetApiClientsCrmFinBitWebhooksParams[]];
export declare const getGetApiClientsCrmFinBitWebhooksQueryOptions: <TData = AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmFinBitWebhooksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmFinBitWebhooksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmFinBitWebhooks>>>;
export declare type GetApiClientsCrmFinBitWebhooksQueryError = AxiosError<unknown>;
/**
 * @summary Search fin bit webhooks
 */
export declare const useGetApiClientsCrmFinBitWebhooks: <TData = AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmFinBitWebhooksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFinBitWebhookExtendedExcludeArchivedPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get jwt for zendesk
 */
export declare const getApiClientsZendeskGetJwt: (params?: GetApiClientsZendeskGetJwtParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataZendeskJWTToken>>;
export declare const getGetApiClientsZendeskGetJwtQueryKey: (params?: GetApiClientsZendeskGetJwtParams) => readonly ["/api/clients/zendesk/get_jwt", ...GetApiClientsZendeskGetJwtParams[]];
export declare const getGetApiClientsZendeskGetJwtQueryOptions: <TData = AxiosResponse<DataZendeskJWTToken, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsZendeskGetJwtParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZendeskJWTToken, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataZendeskJWTToken, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsZendeskGetJwtQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsZendeskGetJwt>>>;
export declare type GetApiClientsZendeskGetJwtQueryError = AxiosError<unknown>;
/**
 * @summary Get jwt for zendesk
 */
export declare const useGetApiClientsZendeskGetJwt: <TData = AxiosResponse<DataZendeskJWTToken, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsZendeskGetJwtParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZendeskJWTToken, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update zendesk ticket
 */
export declare const postApiClientsZendeskUpdateTicket: (updateZendeskTicketPayload: UpdateZendeskTicketPayload, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPostApiClientsZendeskUpdateTicketMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: UpdateZendeskTicketPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: UpdateZendeskTicketPayload;
}, TContext>;
export declare type PostApiClientsZendeskUpdateTicketMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsZendeskUpdateTicket>>>;
export declare type PostApiClientsZendeskUpdateTicketMutationBody = UpdateZendeskTicketPayload;
export declare type PostApiClientsZendeskUpdateTicketMutationError = AxiosError<unknown>;
/**
 * @summary Update zendesk ticket
 */
export declare const usePostApiClientsZendeskUpdateTicket: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: UpdateZendeskTicketPayload;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: UpdateZendeskTicketPayload;
}, TContext>;
/**
 * @summary Add person to client relation
 */
export declare const postApiClientsContactPersons: (contactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactPerson>>;
export declare const getPostApiClientsContactPersonsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PostApiClientsContactPersonsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsContactPersons>>>;
export declare type PostApiClientsContactPersonsMutationBody = ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PostApiClientsContactPersonsMutationError = AxiosError<unknown>;
/**
 * @summary Add person to client relation
 */
export declare const usePostApiClientsContactPersons: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactPerson, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update last or create contact person for user
 */
export declare const putApiClientsContactPersons: (contactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactPerson>>;
export declare const getPutApiClientsContactPersonsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PutApiClientsContactPersonsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsContactPersons>>>;
export declare type PutApiClientsContactPersonsMutationBody = ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PutApiClientsContactPersonsMutationError = AxiosError<unknown>;
/**
 * @summary update last or create contact person for user
 */
export declare const usePutApiClientsContactPersons: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactPerson, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary Add bulk persons to client relation
 */
export declare const postApiClientsContactPersonsBulk: (contactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactPersonMany>>;
export declare const getPostApiClientsContactPersonsBulkMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPersonMany, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactPersonMany, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[];
}, TContext>;
export declare type PostApiClientsContactPersonsBulkMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsContactPersonsBulk>>>;
export declare type PostApiClientsContactPersonsBulkMutationBody = ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[];
export declare type PostApiClientsContactPersonsBulkMutationError = AxiosError<unknown>;
/**
 * @summary Add bulk persons to client relation
 */
export declare const usePostApiClientsContactPersonsBulk: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPersonMany, any>, TError, {
        data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactPersonMany, any>, TError, {
    data: ContactPersonExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated[];
}, TContext>;
/**
 * @summary Update client person
 */
export declare const patchApiClientsContactPersonsId: (id: string, contactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactPerson>>;
export declare const getPatchApiClientsContactPersonsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        id: string;
        data: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
    id: string;
    data: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated;
}, TContext>;
export declare type PatchApiClientsContactPersonsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsContactPersonsId>>>;
export declare type PatchApiClientsContactPersonsIdMutationBody = ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated;
export declare type PatchApiClientsContactPersonsIdMutationError = AxiosError<unknown>;
/**
 * @summary Update client person
 */
export declare const usePatchApiClientsContactPersonsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactPerson, any>, TError, {
        id: string;
        data: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactPerson, any>, TError, {
    id: string;
    data: ContactPersonExcludeArchivedCreatedIdSessionIdSessionTypeUpdated;
}, TContext>;
/**
 * @summary get suggestions for address
 */
export declare const getApiClientsAddressSuggestions: (params: GetApiClientsAddressSuggestionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddressSuggestionMany>>;
export declare const getGetApiClientsAddressSuggestionsQueryKey: (params: GetApiClientsAddressSuggestionsParams) => readonly ["/api/clients/address/suggestions", ...GetApiClientsAddressSuggestionsParams[]];
export declare const getGetApiClientsAddressSuggestionsQueryOptions: <TData = AxiosResponse<DataAddressSuggestionMany, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsAddressSuggestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAddressSuggestionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAddressSuggestionMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAddressSuggestionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAddressSuggestions>>>;
export declare type GetApiClientsAddressSuggestionsQueryError = AxiosError<unknown>;
/**
 * @summary get suggestions for address
 */
export declare const useGetApiClientsAddressSuggestions: <TData = AxiosResponse<DataAddressSuggestionMany, any>, TError = AxiosError<unknown, any>>(params: GetApiClientsAddressSuggestionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAddressSuggestionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary create address
 */
export declare const postApiClientsAddress: (addressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddress>>;
export declare const getPostApiClientsAddressMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
    data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PostApiClientsAddressMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAddress>>>;
export declare type PostApiClientsAddressMutationBody = AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
export declare type PostApiClientsAddressMutationError = AxiosError<unknown>;
/**
 * @summary create address
 */
export declare const usePostApiClientsAddress: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAddress, any>, TError, {
    data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update last or create address for user
 */
export declare const putApiClientsAddress: (addressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddress>>;
export declare const getPutApiClientsAddressMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
    data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PutApiClientsAddressMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsAddress>>>;
export declare type PutApiClientsAddressMutationBody = AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
export declare type PutApiClientsAddressMutationError = AxiosError<unknown>;
/**
 * @summary update last or create address for user
 */
export declare const usePutApiClientsAddress: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAddress, any>, TError, {
    data: AddressExcludeArchivedClientIdCreatedGeoDataIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update address
 */
export declare const patchApiClientsAddressId: (id: string, addressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAddress>>;
export declare const getPatchApiClientsAddressIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
        data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
    id: string;
    data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PatchApiClientsAddressIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsAddressId>>>;
export declare type PatchApiClientsAddressIdMutationBody = AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PatchApiClientsAddressIdMutationError = AxiosError<unknown>;
/**
 * @summary update address
 */
export declare const usePatchApiClientsAddressId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAddress, any>, TError, {
        id: string;
        data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAddress, any>, TError, {
    id: string;
    data: AddressExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary Add liveness info to client
 */
export declare const postApiClientsClientLiveness: (clientLivenessExcludeArchivedClientIdCreatedIdUpdated: ClientLivenessExcludeArchivedClientIdCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientLiveness>>;
export declare const getPostApiClientsClientLivenessMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientLiveness, any>, TError, {
        data: ClientLivenessExcludeArchivedClientIdCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataClientLiveness, any>, TError, {
    data: ClientLivenessExcludeArchivedClientIdCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsClientLivenessMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsClientLiveness>>>;
export declare type PostApiClientsClientLivenessMutationBody = ClientLivenessExcludeArchivedClientIdCreatedIdUpdated;
export declare type PostApiClientsClientLivenessMutationError = AxiosError<unknown>;
/**
 * @summary Add liveness info to client
 */
export declare const usePostApiClientsClientLiveness: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataClientLiveness, any>, TError, {
        data: ClientLivenessExcludeArchivedClientIdCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataClientLiveness, any>, TError, {
    data: ClientLivenessExcludeArchivedClientIdCreatedIdUpdated;
}, TContext>;
/**
 * @summary Search liveness info
 */
export declare const getApiClientsClientLiveness: (params?: GetApiClientsClientLivenessParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataClientLivenessManyPaginated>>;
export declare const getGetApiClientsClientLivenessQueryKey: (params?: GetApiClientsClientLivenessParams) => readonly ["/api/clients/client_liveness", ...GetApiClientsClientLivenessParams[]];
export declare const getGetApiClientsClientLivenessQueryOptions: <TData = AxiosResponse<DataClientLivenessManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsClientLivenessParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsClientLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsClientLiveness>>>;
export declare type GetApiClientsClientLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Search liveness info
 */
export declare const useGetApiClientsClientLiveness: <TData = AxiosResponse<DataClientLivenessManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsClientLivenessParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataClientLivenessManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary add work information for user
 */
export declare const postApiClientsWorkInformation: (workInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkInformation>>;
export declare const getPostApiClientsWorkInformationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PostApiClientsWorkInformationMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsWorkInformation>>>;
export declare type PostApiClientsWorkInformationMutationBody = WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PostApiClientsWorkInformationMutationError = AxiosError<unknown>;
/**
 * @summary add work information for user
 */
export declare const usePostApiClientsWorkInformation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update last or create for user
 */
export declare const putApiClientsWorkInformation: (workInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkInformation>>;
export declare const getPutApiClientsWorkInformationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
export declare type PutApiClientsWorkInformationMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsWorkInformation>>>;
export declare type PutApiClientsWorkInformationMutationBody = WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
export declare type PutApiClientsWorkInformationMutationError = AxiosError<unknown>;
/**
 * @summary update last or create for user
 */
export declare const usePutApiClientsWorkInformation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdatedBody;
}, TContext>;
/**
 * @summary update work information by id
 */
export declare const patchApiClientsWorkInformationId: (id: string, workInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkInformation>>;
export declare const getPatchApiClientsWorkInformationIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        id: string;
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
    id: string;
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
}, TContext>;
export declare type PatchApiClientsWorkInformationIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsWorkInformationId>>>;
export declare type PatchApiClientsWorkInformationIdMutationBody = WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
export declare type PatchApiClientsWorkInformationIdMutationError = AxiosError<unknown>;
/**
 * @summary update work information by id
 */
export declare const usePatchApiClientsWorkInformationId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        id: string;
        data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkInformation, any>, TError, {
    id: string;
    data: WorkInformationExcludeArchivedClientIdCreatedIdSessionIdSessionTypeUpdated1;
}, TContext>;
/**
 * @summary Create Or Update Work Information via crm Integration
 */
export declare const putApiClientsCrmWorkInformation: (workInformationOnlyClientIdCompanyNameIncomeIndustry: WorkInformationOnlyClientIdCompanyNameIncomeIndustry, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWorkInformation>>;
export declare const getPutApiClientsCrmWorkInformationMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationOnlyClientIdCompanyNameIncomeIndustry;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationOnlyClientIdCompanyNameIncomeIndustry;
}, TContext>;
export declare type PutApiClientsCrmWorkInformationMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsCrmWorkInformation>>>;
export declare type PutApiClientsCrmWorkInformationMutationBody = WorkInformationOnlyClientIdCompanyNameIncomeIndustry;
export declare type PutApiClientsCrmWorkInformationMutationError = AxiosError<unknown>;
/**
 * @summary Create Or Update Work Information via crm Integration
 */
export declare const usePutApiClientsCrmWorkInformation: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWorkInformation, any>, TError, {
        data: WorkInformationOnlyClientIdCompanyNameIncomeIndustry;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWorkInformation, any>, TError, {
    data: WorkInformationOnlyClientIdCompanyNameIncomeIndustry;
}, TContext>;
/**
 * @summary add home phone number
 */
export declare const putApiClientsPhonesHome: (landlinePhone: LandlinePhone, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPhone>>;
export declare const getPutApiClientsPhonesHomeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPhone, any>, TError, {
        data: LandlinePhone;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPhone, any>, TError, {
    data: LandlinePhone;
}, TContext>;
export declare type PutApiClientsPhonesHomeMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsPhonesHome>>>;
export declare type PutApiClientsPhonesHomeMutationBody = LandlinePhone;
export declare type PutApiClientsPhonesHomeMutationError = AxiosError<unknown>;
/**
 * @summary add home phone number
 */
export declare const usePutApiClientsPhonesHome: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPhone, any>, TError, {
        data: LandlinePhone;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPhone, any>, TError, {
    data: LandlinePhone;
}, TContext>;
/**
 * @summary create or update application feedback
 */
export declare const putApiClientsFeedback: (feedbacksOnlyCommentRate: FeedbacksOnlyCommentRate, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFeedbacks>>;
export declare const getPutApiClientsFeedbackMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFeedbacks, any>, TError, {
        data: FeedbacksOnlyCommentRate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFeedbacks, any>, TError, {
    data: FeedbacksOnlyCommentRate;
}, TContext>;
export declare type PutApiClientsFeedbackMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsFeedback>>>;
export declare type PutApiClientsFeedbackMutationBody = FeedbacksOnlyCommentRate;
export declare type PutApiClientsFeedbackMutationError = AxiosError<unknown>;
/**
 * @summary create or update application feedback
 */
export declare const usePutApiClientsFeedback: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFeedbacks, any>, TError, {
        data: FeedbacksOnlyCommentRate;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFeedbacks, any>, TError, {
    data: FeedbacksOnlyCommentRate;
}, TContext>;
/**
 * @summary search application feedback
 */
export declare const getApiClientsCrmFeedbacks: (params?: GetApiClientsCrmFeedbacksParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFeedbacksManyPaginated>>;
export declare const getGetApiClientsCrmFeedbacksQueryKey: (params?: GetApiClientsCrmFeedbacksParams) => readonly ["/api/clients/crm/feedbacks", ...GetApiClientsCrmFeedbacksParams[]];
export declare const getGetApiClientsCrmFeedbacksQueryOptions: <TData = AxiosResponse<DataFeedbacksManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmFeedbacksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFeedbacksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFeedbacksManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsCrmFeedbacksQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsCrmFeedbacks>>>;
export declare type GetApiClientsCrmFeedbacksQueryError = AxiosError<unknown>;
/**
 * @summary search application feedback
 */
export declare const useGetApiClientsCrmFeedbacks: <TData = AxiosResponse<DataFeedbacksManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsCrmFeedbacksParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataFeedbacksManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get or create whats app link
 */
export declare const postApiClientsWa: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWhatsApp>>;
export declare const getPostApiClientsWaMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext>;
export declare type PostApiClientsWaMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsWa>>>;
export declare type PostApiClientsWaMutationError = AxiosError<unknown>;
/**
 * @summary Get or create whats app link
 */
export declare const usePostApiClientsWa: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWhatsApp, any>, TError, void, TContext>;
/**
 * @summary Update or create whats app link
 */
export declare const putApiClientsWa: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataWhatsApp>>;
export declare const getPutApiClientsWaMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext>;
export declare type PutApiClientsWaMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsWa>>>;
export declare type PutApiClientsWaMutationError = AxiosError<unknown>;
/**
 * @summary Update or create whats app link
 */
export declare const usePutApiClientsWa: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataWhatsApp, any>, TError, void, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataWhatsApp, any>, TError, void, TContext>;
/**
 * @summary Create apps installed on client device
 */
export declare const putApiClientsApps: (appsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName: AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[], options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAppsMany>>;
export declare const getPutApiClientsAppsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAppsMany, any>, TError, {
        data: AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataAppsMany, any>, TError, {
    data: AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[];
}, TContext>;
export declare type PutApiClientsAppsMutationResult = NonNullable<Awaited<ReturnType<typeof putApiClientsApps>>>;
export declare type PutApiClientsAppsMutationBody = AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[];
export declare type PutApiClientsAppsMutationError = AxiosError<unknown>;
/**
 * @summary Create apps installed on client device
 */
export declare const usePutApiClientsApps: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataAppsMany, any>, TError, {
        data: AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[];
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataAppsMany, any>, TError, {
    data: AppsOnlyAppNameFirstInstallTimeLastUpdateTimePackageName[];
}, TContext>;
/**
 * @summary set geo permission
 */
export declare const postApiClientsGeoPermission: (geoPermissionsOnlyAllowed: GeoPermissionsOnlyAllowed, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGeoPermissions>>;
export declare const getPostApiClientsGeoPermissionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGeoPermissions, any>, TError, {
        data: GeoPermissionsOnlyAllowed;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGeoPermissions, any>, TError, {
    data: GeoPermissionsOnlyAllowed;
}, TContext>;
export declare type PostApiClientsGeoPermissionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsGeoPermission>>>;
export declare type PostApiClientsGeoPermissionMutationBody = GeoPermissionsOnlyAllowed;
export declare type PostApiClientsGeoPermissionMutationError = AxiosError<unknown>;
/**
 * @summary set geo permission
 */
export declare const usePostApiClientsGeoPermission: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGeoPermissions, any>, TError, {
        data: GeoPermissionsOnlyAllowed;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGeoPermissions, any>, TError, {
    data: GeoPermissionsOnlyAllowed;
}, TContext>;
/**
 * @summary create google account data by id token
 */
export declare const postApiClientsGoogleAccountFromToken: (token: Token, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGoogleAccounts>>;
export declare const getPostApiClientsGoogleAccountFromTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoogleAccounts, any>, TError, {
        data: Token;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataGoogleAccounts, any>, TError, {
    data: Token;
}, TContext>;
export declare type PostApiClientsGoogleAccountFromTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsGoogleAccountFromToken>>>;
export declare type PostApiClientsGoogleAccountFromTokenMutationBody = Token;
export declare type PostApiClientsGoogleAccountFromTokenMutationError = AxiosError<unknown>;
/**
 * @summary create google account data by id token
 */
export declare const usePostApiClientsGoogleAccountFromToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataGoogleAccounts, any>, TError, {
        data: Token;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataGoogleAccounts, any>, TError, {
    data: Token;
}, TContext>;
/**
 * @summary create facebook account data by access token
 */
export declare const postApiClientsFacebookAccountFromToken: (token1: Token1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFacebookAccounts>>;
export declare const getPostApiClientsFacebookAccountFromTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFacebookAccounts, any>, TError, {
        data: Token1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataFacebookAccounts, any>, TError, {
    data: Token1;
}, TContext>;
export declare type PostApiClientsFacebookAccountFromTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsFacebookAccountFromToken>>>;
export declare type PostApiClientsFacebookAccountFromTokenMutationBody = Token1;
export declare type PostApiClientsFacebookAccountFromTokenMutationError = AxiosError<unknown>;
/**
 * @summary create facebook account data by access token
 */
export declare const usePostApiClientsFacebookAccountFromToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataFacebookAccounts, any>, TError, {
        data: Token1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataFacebookAccounts, any>, TError, {
    data: Token1;
}, TContext>;
/**
 * @summary get the last facebook account data
 */
export declare const getApiClientsFacebookAccountLast: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataFacebookAccounts>>;
export declare const getGetApiClientsFacebookAccountLastQueryKey: () => readonly ["/api/clients/facebook_account/last"];
export declare const getGetApiClientsFacebookAccountLastQueryOptions: <TData = AxiosResponse<DataFacebookAccounts, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFacebookAccounts, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataFacebookAccounts, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsFacebookAccountLastQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsFacebookAccountLast>>>;
export declare type GetApiClientsFacebookAccountLastQueryError = AxiosError<unknown>;
/**
 * @summary get the last facebook account data
 */
export declare const useGetApiClientsFacebookAccountLast: <TData = AxiosResponse<DataFacebookAccounts, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataFacebookAccounts, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get FAQ content
 */
export declare const getApiClientsUtilsFaqContent: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsUtilsFaqContentQueryKey: () => readonly ["/api/clients/utils/faq_content"];
export declare const getGetApiClientsUtilsFaqContentQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsUtilsFaqContentQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsUtilsFaqContent>>>;
export declare type GetApiClientsUtilsFaqContentQueryError = AxiosError<unknown>;
/**
 * @summary Get FAQ content
 */
export declare const useGetApiClientsUtilsFaqContent: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
