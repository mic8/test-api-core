import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ChangeDocsRequest, ChangeDocsRequest1, CompleteZoopSigningBody, CreateDocType, CreateDocsBody, CreateDocuments, DataCreateDocumentResponseMany, DataDocGroup, DataDocTemplate, DataDocTemplateResponseManyPaginated, DataDocTemplateTagsMany, DataDocTypeSchema, DataDocumentExcludeS3Key, DataDocumentMany, DataDocumentOnlyDocTypeIdStatus, DataDocumentVersionMany, DataEncryptedDocumentS3DataResponse, DataGroupedDocsResponseMany, DataInitAadhaarSigningResponse, DataLivenessResponse, DataPrivyRegistration, DataPrivySigning, DataReadinessResponse, DataSendOTPResponseExcludeCode, DataSignature, DataSuccessResponse, DataZoopSigning, DataZoopSigningManyPaginated, DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, DocGroupOnlyDocGroupSortOrder, DocGroupOnlySortOrder, DocTemplateOnlyId, DocumentOnlyStatus, EmulateSigningBody, EncryptDocumentBody, EncryptDocumentFromS3Body, GetApiInternalDocumentsAadhaarZoopSigningsParams, GetApiInternalDocumentsClientsAadhaarZoopSigningsParams, GetApiInternalDocumentsClientsDocumentsParams, GetApiInternalDocumentsDocTemplatesIdPreviewParams, GetApiInternalDocumentsDocTemplatesParams, GetApiInternalDocumentsDocumentsBulkDownloadParams, GetApiInternalDocumentsDocumentsParams, InitAadhaarSigningBody, MergeClientDocumentBody, PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody, PostApiInternalDocumentsDocTemplatesBody, SignByOTPBody, SignDocumentByDigitalSignatureBody, SignatureExcludeArchivedCreatedIdUpdated, UpdateContractDocs } from "./model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiInternalDocumentsReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiInternalDocumentsReadinessQueryKey: () => readonly ["/api/internal-documents/readiness"];
export declare const getGetApiInternalDocumentsReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsReadiness>>>;
export declare type GetApiInternalDocumentsReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiInternalDocumentsReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiInternalDocumentsLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiInternalDocumentsLivenessQueryKey: () => readonly ["/api/internal-documents/liveness"];
export declare const getGetApiInternalDocumentsLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsLiveness>>>;
export declare type GetApiInternalDocumentsLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiInternalDocumentsLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiInternalDocumentsMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsMetricsQueryKey: () => readonly ["/api/internal-documents/metrics"];
export declare const getGetApiInternalDocumentsMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsMetrics>>>;
export declare type GetApiInternalDocumentsMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiInternalDocumentsMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get documents by contract id
 */
export declare const getApiInternalDocumentsContractsIdDocuments: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentMany>>;
export declare const getGetApiInternalDocumentsContractsIdDocumentsQueryKey: (id: number) => readonly [`/api/internal-documents/contracts/${number}/documents`];
export declare const getGetApiInternalDocumentsContractsIdDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsContractsIdDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsContractsIdDocuments>>>;
export declare type GetApiInternalDocumentsContractsIdDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Get documents by contract id
 */
export declare const useGetApiInternalDocumentsContractsIdDocuments: <TData = AxiosResponse<DataDocumentMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create contract documents
 */
export declare const postApiInternalDocumentsContractsIdDocuments: (id: number, createDocsBody: CreateDocsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentMany>>;
export declare const getPostApiInternalDocumentsContractsIdDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        id: number;
        data: CreateDocsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
    id: number;
    data: CreateDocsBody;
}, TContext>;
export declare type PostApiInternalDocumentsContractsIdDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsContractsIdDocuments>>>;
export declare type PostApiInternalDocumentsContractsIdDocumentsMutationBody = CreateDocsBody;
export declare type PostApiInternalDocumentsContractsIdDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Create contract documents
 */
export declare const usePostApiInternalDocumentsContractsIdDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        id: number;
        data: CreateDocsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentMany, any>, TError, {
    id: number;
    data: CreateDocsBody;
}, TContext>;
/**
 * @summary Update contract documents
 */
export declare const patchApiInternalDocumentsContractsIdDocuments: (id: number, updateContractDocs: UpdateContractDocs, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentMany>>;
export declare const getPatchApiInternalDocumentsContractsIdDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        id: number;
        data: UpdateContractDocs;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
    id: number;
    data: UpdateContractDocs;
}, TContext>;
export declare type PatchApiInternalDocumentsContractsIdDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiInternalDocumentsContractsIdDocuments>>>;
export declare type PatchApiInternalDocumentsContractsIdDocumentsMutationBody = UpdateContractDocs;
export declare type PatchApiInternalDocumentsContractsIdDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Update contract documents
 */
export declare const usePatchApiInternalDocumentsContractsIdDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        id: number;
        data: UpdateContractDocs;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentMany, any>, TError, {
    id: number;
    data: UpdateContractDocs;
}, TContext>;
/**
 * @summary Download contract document by type
 */
export declare const getApiInternalDocumentsContractsIdDocumentsDocType: (id: string, docType: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsContractsIdDocumentsDocTypeQueryKey: (id: string, docType: string) => readonly [`/api/internal-documents/contracts/${string}/documents/${string}`];
export declare const getGetApiInternalDocumentsContractsIdDocumentsDocTypeQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, docType: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsContractsIdDocumentsDocTypeQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsContractsIdDocumentsDocType>>>;
export declare type GetApiInternalDocumentsContractsIdDocumentsDocTypeQueryError = AxiosError<unknown>;
/**
 * @summary Download contract document by type
 */
export declare const useGetApiInternalDocumentsContractsIdDocumentsDocType: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, docType: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create application documents
 */
export declare const postApiInternalDocumentsApplicationsIdDocuments: (id: string, createDocsBody: CreateDocsBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsApplicationsIdDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: CreateDocsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: CreateDocsBody;
}, TContext>;
export declare type PostApiInternalDocumentsApplicationsIdDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsApplicationsIdDocuments>>>;
export declare type PostApiInternalDocumentsApplicationsIdDocumentsMutationBody = CreateDocsBody;
export declare type PostApiInternalDocumentsApplicationsIdDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Create application documents
 */
export declare const usePostApiInternalDocumentsApplicationsIdDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: CreateDocsBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: CreateDocsBody;
}, TContext>;
/**
 * @summary Create documents
 */
export declare const postApiInternalDocumentsDocuments: (createDocuments: CreateDocuments, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCreateDocumentResponseMany>>;
export declare const getPostApiInternalDocumentsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateDocumentResponseMany, any>, TError, {
        data: CreateDocuments;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataCreateDocumentResponseMany, any>, TError, {
    data: CreateDocuments;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocuments>>>;
export declare type PostApiInternalDocumentsDocumentsMutationBody = CreateDocuments;
export declare type PostApiInternalDocumentsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Create documents
 */
export declare const usePostApiInternalDocumentsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataCreateDocumentResponseMany, any>, TError, {
        data: CreateDocuments;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataCreateDocumentResponseMany, any>, TError, {
    data: CreateDocuments;
}, TContext>;
/**
 * @summary Get documents
 */
export declare const getApiInternalDocumentsDocuments: (params?: GetApiInternalDocumentsDocumentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentMany>>;
export declare const getGetApiInternalDocumentsDocumentsQueryKey: (params?: GetApiInternalDocumentsDocumentsParams) => readonly ["/api/internal-documents/documents", ...GetApiInternalDocumentsDocumentsParams[]];
export declare const getGetApiInternalDocumentsDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocuments>>>;
export declare type GetApiInternalDocumentsDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Get documents
 */
export declare const useGetApiInternalDocumentsDocuments: <TData = AxiosResponse<DataDocumentMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update documents
 */
export declare const patchApiInternalDocumentsDocuments: (changeDocsRequest: ChangeDocsRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentMany>>;
export declare const getPatchApiInternalDocumentsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        data: ChangeDocsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
    data: ChangeDocsRequest;
}, TContext>;
export declare type PatchApiInternalDocumentsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiInternalDocumentsDocuments>>>;
export declare type PatchApiInternalDocumentsDocumentsMutationBody = ChangeDocsRequest;
export declare type PatchApiInternalDocumentsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Update documents
 */
export declare const usePatchApiInternalDocumentsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentMany, any>, TError, {
        data: ChangeDocsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentMany, any>, TError, {
    data: ChangeDocsRequest;
}, TContext>;
/**
 * @summary Bulk download documents
 */
export declare const getApiInternalDocumentsDocumentsBulkDownload: (params: GetApiInternalDocumentsDocumentsBulkDownloadParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsDocumentsBulkDownloadQueryKey: (params: GetApiInternalDocumentsDocumentsBulkDownloadParams) => readonly ["/api/internal-documents/documents/bulk_download", ...GetApiInternalDocumentsDocumentsBulkDownloadParams[]];
export declare const getGetApiInternalDocumentsDocumentsBulkDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(params: GetApiInternalDocumentsDocumentsBulkDownloadParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocumentsBulkDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocumentsBulkDownload>>>;
export declare type GetApiInternalDocumentsDocumentsBulkDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Bulk download documents
 */
export declare const useGetApiInternalDocumentsDocumentsBulkDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(params: GetApiInternalDocumentsDocumentsBulkDownloadParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get previous document versions without last (actual) version
 */
export declare const getApiInternalDocumentsDocumentsIdPreviousVersions: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentVersionMany>>;
export declare const getGetApiInternalDocumentsDocumentsIdPreviousVersionsQueryKey: (id: string) => readonly [`/api/internal-documents/documents/${string}/previous_versions`];
export declare const getGetApiInternalDocumentsDocumentsIdPreviousVersionsQueryOptions: <TData = AxiosResponse<DataDocumentVersionMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentVersionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentVersionMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocumentsIdPreviousVersionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocumentsIdPreviousVersions>>>;
export declare type GetApiInternalDocumentsDocumentsIdPreviousVersionsQueryError = AxiosError<unknown>;
/**
 * @summary Get previous document versions without last (actual) version
 */
export declare const useGetApiInternalDocumentsDocumentsIdPreviousVersions: <TData = AxiosResponse<DataDocumentVersionMany, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentVersionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download previous document version
 */
export declare const getApiInternalDocumentsDocumentsPreviousVersionsRowIdDownload: (rowId: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsDocumentsPreviousVersionsRowIdDownloadQueryKey: (rowId: number) => readonly [`/api/internal-documents/documents/previous_versions/${number}/download`];
export declare const getGetApiInternalDocumentsDocumentsPreviousVersionsRowIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(rowId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocumentsPreviousVersionsRowIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocumentsPreviousVersionsRowIdDownload>>>;
export declare type GetApiInternalDocumentsDocumentsPreviousVersionsRowIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download previous document version
 */
export declare const useGetApiInternalDocumentsDocumentsPreviousVersionsRowIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(rowId: number, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download document
 */
export declare const getApiInternalDocumentsDocumentsIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsDocumentsIdDownloadQueryKey: (id: string) => readonly [`/api/internal-documents/documents/${string}/download`];
export declare const getGetApiInternalDocumentsDocumentsIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocumentsIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocumentsIdDownload>>>;
export declare type GetApiInternalDocumentsDocumentsIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download document
 */
export declare const useGetApiInternalDocumentsDocumentsIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Sign by digital signature
 */
export declare const postApiInternalDocumentsDocumentsIdDigitalSigning: (id: string, signDocumentByDigitalSignatureBody: SignDocumentByDigitalSignatureBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsDocumentsIdDigitalSigningMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: SignDocumentByDigitalSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: SignDocumentByDigitalSignatureBody;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdDigitalSigningMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdDigitalSigning>>>;
export declare type PostApiInternalDocumentsDocumentsIdDigitalSigningMutationBody = SignDocumentByDigitalSignatureBody;
export declare type PostApiInternalDocumentsDocumentsIdDigitalSigningMutationError = AxiosError<unknown>;
/**
 * @summary Sign by digital signature
 */
export declare const usePostApiInternalDocumentsDocumentsIdDigitalSigning: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: SignDocumentByDigitalSignatureBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: SignDocumentByDigitalSignatureBody;
}, TContext>;
/**
 * @summary Sign by trust signer
 */
export declare const postApiInternalDocumentsDocumentsIdSignByTrustSigner: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsDocumentsIdSignByTrustSignerMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdSignByTrustSignerMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdSignByTrustSigner>>>;
export declare type PostApiInternalDocumentsDocumentsIdSignByTrustSignerMutationError = AxiosError<unknown>;
/**
 * @summary Sign by trust signer
 */
export declare const usePostApiInternalDocumentsDocumentsIdSignByTrustSigner: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
}, TContext>;
/**
 * @deprecated
 * @summary Merge client document
 */
export declare const postApiInternalDocumentsDocumentsIdMergeClientDocument: (id: string, mergeClientDocumentBody: MergeClientDocumentBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsDocumentsIdMergeClientDocumentMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: MergeClientDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: MergeClientDocumentBody;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdMergeClientDocumentMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdMergeClientDocument>>>;
export declare type PostApiInternalDocumentsDocumentsIdMergeClientDocumentMutationBody = MergeClientDocumentBody;
export declare type PostApiInternalDocumentsDocumentsIdMergeClientDocumentMutationError = AxiosError<unknown>;
/**
 * @deprecated
 * @summary Merge client document
 */
export declare const usePostApiInternalDocumentsDocumentsIdMergeClientDocument: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: MergeClientDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: MergeClientDocumentBody;
}, TContext>;
/**
 * @summary Sign by signatories signature images
 */
export declare const postApiInternalDocumentsDocumentsIdSignBySignatories: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsDocumentsIdSignBySignatoriesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdSignBySignatoriesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdSignBySignatories>>>;
export declare type PostApiInternalDocumentsDocumentsIdSignBySignatoriesMutationError = AxiosError<unknown>;
/**
 * @summary Sign by signatories signature images
 */
export declare const usePostApiInternalDocumentsDocumentsIdSignBySignatories: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Encrypt pdf document
 */
export declare const postApiInternalDocumentsDocumentsIdEncryptPdf: (id: string, encryptDocumentBody: EncryptDocumentBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEncryptedDocumentS3DataResponse>>;
export declare const getPostApiInternalDocumentsDocumentsIdEncryptPdfMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
        id: string;
        data: EncryptDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
    id: string;
    data: EncryptDocumentBody;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdEncryptPdfMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdEncryptPdf>>>;
export declare type PostApiInternalDocumentsDocumentsIdEncryptPdfMutationBody = EncryptDocumentBody;
export declare type PostApiInternalDocumentsDocumentsIdEncryptPdfMutationError = AxiosError<unknown>;
/**
 * @summary Encrypt pdf document
 */
export declare const usePostApiInternalDocumentsDocumentsIdEncryptPdf: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
        id: string;
        data: EncryptDocumentBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
    id: string;
    data: EncryptDocumentBody;
}, TContext>;
/**
 * @summary Encrypt pdf document from s3 file storage
 */
export declare const postApiInternalDocumentsDocumentsEncryptPdf: (encryptDocumentFromS3Body: EncryptDocumentFromS3Body, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataEncryptedDocumentS3DataResponse>>;
export declare const getPostApiInternalDocumentsDocumentsEncryptPdfMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
        data: EncryptDocumentFromS3Body;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
    data: EncryptDocumentFromS3Body;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsEncryptPdfMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsEncryptPdf>>>;
export declare type PostApiInternalDocumentsDocumentsEncryptPdfMutationBody = EncryptDocumentFromS3Body;
export declare type PostApiInternalDocumentsDocumentsEncryptPdfMutationError = AxiosError<unknown>;
/**
 * @summary Encrypt pdf document from s3 file storage
 */
export declare const usePostApiInternalDocumentsDocumentsEncryptPdf: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
        data: EncryptDocumentFromS3Body;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataEncryptedDocumentS3DataResponse, any>, TError, {
    data: EncryptDocumentFromS3Body;
}, TContext>;
/**
 * @summary Emulate signing
 */
export declare const postApiInternalDocumentsDocumentsIdEmulateSigning: (id: string, emulateSigningBody: EmulateSigningBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsDocumentsIdEmulateSigningMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: EmulateSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: EmulateSigningBody;
}, TContext>;
export declare type PostApiInternalDocumentsDocumentsIdEmulateSigningMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocumentsIdEmulateSigning>>>;
export declare type PostApiInternalDocumentsDocumentsIdEmulateSigningMutationBody = EmulateSigningBody;
export declare type PostApiInternalDocumentsDocumentsIdEmulateSigningMutationError = AxiosError<unknown>;
/**
 * @summary Emulate signing
 */
export declare const usePostApiInternalDocumentsDocumentsIdEmulateSigning: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: EmulateSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: EmulateSigningBody;
}, TContext>;
/**
 * @summary Get client documents
 */
export declare const getApiInternalDocumentsClientsDocuments: (params?: GetApiInternalDocumentsClientsDocumentsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentOnlyDocTypeIdStatus>>;
export declare const getGetApiInternalDocumentsClientsDocumentsQueryKey: (params?: GetApiInternalDocumentsClientsDocumentsParams) => readonly ["/api/internal-documents/clients/documents", ...GetApiInternalDocumentsClientsDocumentsParams[]];
export declare const getGetApiInternalDocumentsClientsDocumentsQueryOptions: <TData = AxiosResponse<DataDocumentOnlyDocTypeIdStatus, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsClientsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentOnlyDocTypeIdStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocumentOnlyDocTypeIdStatus, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsClientsDocumentsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsClientsDocuments>>>;
export declare type GetApiInternalDocumentsClientsDocumentsQueryError = AxiosError<unknown>;
/**
 * @summary Get client documents
 */
export declare const useGetApiInternalDocumentsClientsDocuments: <TData = AxiosResponse<DataDocumentOnlyDocTypeIdStatus, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsClientsDocumentsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocumentOnlyDocTypeIdStatus, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Confirm documents
 */
export declare const patchApiInternalDocumentsClientsDocuments: (changeDocsRequest1: ChangeDocsRequest1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPatchApiInternalDocumentsClientsDocumentsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: ChangeDocsRequest1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: ChangeDocsRequest1;
}, TContext>;
export declare type PatchApiInternalDocumentsClientsDocumentsMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiInternalDocumentsClientsDocuments>>>;
export declare type PatchApiInternalDocumentsClientsDocumentsMutationBody = ChangeDocsRequest1;
export declare type PatchApiInternalDocumentsClientsDocumentsMutationError = AxiosError<unknown>;
/**
 * @summary Confirm documents
 */
export declare const usePatchApiInternalDocumentsClientsDocuments: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        data: ChangeDocsRequest1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    data: ChangeDocsRequest1;
}, TContext>;
/**
 * @summary Confirm document by id
 */
export declare const patchApiInternalDocumentsClientsDocumentsId: (id: string, documentOnlyStatus: DocumentOnlyStatus, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSuccessResponse>>;
export declare const getPatchApiInternalDocumentsClientsDocumentsIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: DocumentOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: DocumentOnlyStatus;
}, TContext>;
export declare type PatchApiInternalDocumentsClientsDocumentsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiInternalDocumentsClientsDocumentsId>>>;
export declare type PatchApiInternalDocumentsClientsDocumentsIdMutationBody = DocumentOnlyStatus;
export declare type PatchApiInternalDocumentsClientsDocumentsIdMutationError = AxiosError<unknown>;
/**
 * @summary Confirm document by id
 */
export declare const usePatchApiInternalDocumentsClientsDocumentsId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSuccessResponse, any>, TError, {
        id: string;
        data: DocumentOnlyStatus;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSuccessResponse, any>, TError, {
    id: string;
    data: DocumentOnlyStatus;
}, TContext>;
/**
 * @summary Download document
 */
export declare const getApiInternalDocumentsClientsDocumentsIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsClientsDocumentsIdDownloadQueryKey: (id: string) => readonly [`/api/internal-documents/clients/documents/${string}/download`];
export declare const getGetApiInternalDocumentsClientsDocumentsIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsClientsDocumentsIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsClientsDocumentsIdDownload>>>;
export declare type GetApiInternalDocumentsClientsDocumentsIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download document
 */
export declare const useGetApiInternalDocumentsClientsDocumentsIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get contract documents grouped by signing groups
 */
export declare const getApiInternalDocumentsClientsContractsIdDocumentsSigningGroups: (id: number, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataGroupedDocsResponseMany>>;
export declare const getGetApiInternalDocumentsClientsContractsIdDocumentsSigningGroupsQueryKey: (id: number) => readonly [`/api/internal-documents/clients/contracts/${number}/documents/signing_groups`];
export declare const getGetApiInternalDocumentsClientsContractsIdDocumentsSigningGroupsQueryOptions: <TData = AxiosResponse<DataGroupedDocsResponseMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGroupedDocsResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataGroupedDocsResponseMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsClientsContractsIdDocumentsSigningGroupsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsClientsContractsIdDocumentsSigningGroups>>>;
export declare type GetApiInternalDocumentsClientsContractsIdDocumentsSigningGroupsQueryError = AxiosError<unknown>;
/**
 * @summary Get contract documents grouped by signing groups
 */
export declare const useGetApiInternalDocumentsClientsContractsIdDocumentsSigningGroups: <TData = AxiosResponse<DataGroupedDocsResponseMany, any>, TError = AxiosError<unknown, any>>(id: number, options?: {
    query?: UseQueryOptions<AxiosResponse<DataGroupedDocsResponseMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send OTP
 */
export declare const postApiInternalDocumentsClientsDocumentsIdOtpSend: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSendOTPResponseExcludeCode>>;
export declare const getPostApiInternalDocumentsClientsDocumentsIdOtpSendMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendOTPResponseExcludeCode, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSendOTPResponseExcludeCode, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiInternalDocumentsClientsDocumentsIdOtpSendMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsClientsDocumentsIdOtpSend>>>;
export declare type PostApiInternalDocumentsClientsDocumentsIdOtpSendMutationError = AxiosError<unknown>;
/**
 * @summary Send OTP
 */
export declare const usePostApiInternalDocumentsClientsDocumentsIdOtpSend: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendOTPResponseExcludeCode, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSendOTPResponseExcludeCode, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Sign by OTP
 */
export declare const postApiInternalDocumentsClientsDocumentsIdOtpSign: (id: string, signByOTPBody: SignByOTPBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocumentExcludeS3Key>>;
export declare const getPostApiInternalDocumentsClientsDocumentsIdOtpSignMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: SignByOTPBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: SignByOTPBody;
}, TContext>;
export declare type PostApiInternalDocumentsClientsDocumentsIdOtpSignMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsClientsDocumentsIdOtpSign>>>;
export declare type PostApiInternalDocumentsClientsDocumentsIdOtpSignMutationBody = SignByOTPBody;
export declare type PostApiInternalDocumentsClientsDocumentsIdOtpSignMutationError = AxiosError<unknown>;
/**
 * @summary Sign by OTP
 */
export declare const usePostApiInternalDocumentsClientsDocumentsIdOtpSign: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
        id: string;
        data: SignByOTPBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocumentExcludeS3Key, any>, TError, {
    id: string;
    data: SignByOTPBody;
}, TContext>;
/**
 * @summary Init aadhaar signing
 */
export declare const postApiInternalDocumentsClientsDocumentsIdInitAadhaarSigning: (id: string, initAadhaarSigningBody: InitAadhaarSigningBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataInitAadhaarSigningResponse>>;
export declare const getPostApiInternalDocumentsClientsDocumentsIdInitAadhaarSigningMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataInitAadhaarSigningResponse, any>, TError, {
        id: string;
        data: InitAadhaarSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataInitAadhaarSigningResponse, any>, TError, {
    id: string;
    data: InitAadhaarSigningBody;
}, TContext>;
export declare type PostApiInternalDocumentsClientsDocumentsIdInitAadhaarSigningMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsClientsDocumentsIdInitAadhaarSigning>>>;
export declare type PostApiInternalDocumentsClientsDocumentsIdInitAadhaarSigningMutationBody = InitAadhaarSigningBody;
export declare type PostApiInternalDocumentsClientsDocumentsIdInitAadhaarSigningMutationError = AxiosError<unknown>;
/**
 * @summary Init aadhaar signing
 */
export declare const usePostApiInternalDocumentsClientsDocumentsIdInitAadhaarSigning: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataInitAadhaarSigningResponse, any>, TError, {
        id: string;
        data: InitAadhaarSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataInitAadhaarSigningResponse, any>, TError, {
    id: string;
    data: InitAadhaarSigningBody;
}, TContext>;
/**
 * @summary Complete zoop signing by webhook
 */
export declare const postApiInternalDocumentsClientsDocumentsCompleteAadhaarSigning: (completeZoopSigningBody: CompleteZoopSigningBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getPostApiInternalDocumentsClientsDocumentsCompleteAadhaarSigningMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: CompleteZoopSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<void, any>, TError, {
    data: CompleteZoopSigningBody;
}, TContext>;
export declare type PostApiInternalDocumentsClientsDocumentsCompleteAadhaarSigningMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsClientsDocumentsCompleteAadhaarSigning>>>;
export declare type PostApiInternalDocumentsClientsDocumentsCompleteAadhaarSigningMutationBody = CompleteZoopSigningBody;
export declare type PostApiInternalDocumentsClientsDocumentsCompleteAadhaarSigningMutationError = AxiosError<unknown>;
/**
 * @summary Complete zoop signing by webhook
 */
export declare const usePostApiInternalDocumentsClientsDocumentsCompleteAadhaarSigning: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<void, any>, TError, {
        data: CompleteZoopSigningBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<void, any>, TError, {
    data: CompleteZoopSigningBody;
}, TContext>;
/**
 * Handle frontend zoop callback & redirect
 */
export declare const postApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirect: (id: string, postApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody: PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<unknown>>;
export declare const getPostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectMutationOptions: <TError = AxiosError<void, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<unknown, any>, TError, {
        id: string;
        data: PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<unknown, any>, TError, {
    id: string;
    data: PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody;
}, TContext>;
export declare type PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirect>>>;
export declare type PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectMutationBody = PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody;
export declare type PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectMutationError = AxiosError<void>;
export declare const usePostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirect: <TError = AxiosError<void, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<unknown, any>, TError, {
        id: string;
        data: PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<unknown, any>, TError, {
    id: string;
    data: PostApiInternalDocumentsClientsAadhaarZoopSigningsIdRedirectBody;
}, TContext>;
/**
 * @summary Get zoop signings
 */
export declare const getApiInternalDocumentsClientsAadhaarZoopSignings: (params?: GetApiInternalDocumentsClientsAadhaarZoopSigningsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated>>;
export declare const getGetApiInternalDocumentsClientsAadhaarZoopSigningsQueryKey: (params?: GetApiInternalDocumentsClientsAadhaarZoopSigningsParams) => readonly ["/api/internal-documents/clients/aadhaar/zoop/signings", ...GetApiInternalDocumentsClientsAadhaarZoopSigningsParams[]];
export declare const getGetApiInternalDocumentsClientsAadhaarZoopSigningsQueryOptions: <TData = AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsClientsAadhaarZoopSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsClientsAadhaarZoopSigningsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsClientsAadhaarZoopSignings>>>;
export declare type GetApiInternalDocumentsClientsAadhaarZoopSigningsQueryError = AxiosError<unknown>;
/**
 * @summary Get zoop signings
 */
export declare const useGetApiInternalDocumentsClientsAadhaarZoopSignings: <TData = AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsClientsAadhaarZoopSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedCreatedDocumentIdIdStatusStatusDescriptionPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get zoop signing
 */
export declare const getApiInternalDocumentsClientsAadhaarZoopSigningsId: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription>>;
export declare const getGetApiInternalDocumentsClientsAadhaarZoopSigningsIdQueryKey: (id: string) => readonly [`/api/internal-documents/clients/aadhaar/zoop/signings/${string}`];
export declare const getGetApiInternalDocumentsClientsAadhaarZoopSigningsIdQueryOptions: <TData = AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsClientsAadhaarZoopSigningsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsClientsAadhaarZoopSigningsId>>>;
export declare type GetApiInternalDocumentsClientsAadhaarZoopSigningsIdQueryError = AxiosError<unknown>;
/**
 * @summary Get zoop signing
 */
export declare const useGetApiInternalDocumentsClientsAadhaarZoopSigningsId: <TData = AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningOnlyCompletedDocumentIdIdStatusStatusDescription, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search zoop signings
 */
export declare const getApiInternalDocumentsAadhaarZoopSignings: (params?: GetApiInternalDocumentsAadhaarZoopSigningsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataZoopSigningManyPaginated>>;
export declare const getGetApiInternalDocumentsAadhaarZoopSigningsQueryKey: (params?: GetApiInternalDocumentsAadhaarZoopSigningsParams) => readonly ["/api/internal-documents/aadhaar/zoop/signings", ...GetApiInternalDocumentsAadhaarZoopSigningsParams[]];
export declare const getGetApiInternalDocumentsAadhaarZoopSigningsQueryOptions: <TData = AxiosResponse<DataZoopSigningManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsAadhaarZoopSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataZoopSigningManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsAadhaarZoopSigningsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsAadhaarZoopSignings>>>;
export declare type GetApiInternalDocumentsAadhaarZoopSigningsQueryError = AxiosError<unknown>;
/**
 * @summary Search zoop signings
 */
export declare const useGetApiInternalDocumentsAadhaarZoopSignings: <TData = AxiosResponse<DataZoopSigningManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsAadhaarZoopSigningsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataZoopSigningManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Rerun download signed document task
 */
export declare const postApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTask: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataZoopSigning>>;
export declare const getPostApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTaskMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataZoopSigning, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataZoopSigning, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTaskMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTask>>>;
export declare type PostApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTaskMutationError = AxiosError<unknown>;
/**
 * @summary Rerun download signed document task
 */
export declare const usePostApiInternalDocumentsAadhaarZoopSigningsIdRerunDownloadTask: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataZoopSigning, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataZoopSigning, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Register user in Privy
 */
export declare const postApiInternalDocumentsPrivyClientIdRegister: (clientId: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPrivyRegistration>>;
export declare const getPostApiInternalDocumentsPrivyClientIdRegisterMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPrivyRegistration, any>, TError, {
        clientId: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPrivyRegistration, any>, TError, {
    clientId: string;
}, TContext>;
export declare type PostApiInternalDocumentsPrivyClientIdRegisterMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsPrivyClientIdRegister>>>;
export declare type PostApiInternalDocumentsPrivyClientIdRegisterMutationError = AxiosError<unknown>;
/**
 * @summary Register user in Privy
 */
export declare const usePostApiInternalDocumentsPrivyClientIdRegister: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPrivyRegistration, any>, TError, {
        clientId: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPrivyRegistration, any>, TError, {
    clientId: string;
}, TContext>;
/**
 * @summary Sign document
 */
export declare const postApiInternalDocumentsPrivyDocumentsIdSign: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataPrivySigning>>;
export declare const getPostApiInternalDocumentsPrivyDocumentsIdSignMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPrivySigning, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataPrivySigning, any>, TError, {
    id: string;
}, TContext>;
export declare type PostApiInternalDocumentsPrivyDocumentsIdSignMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsPrivyDocumentsIdSign>>>;
export declare type PostApiInternalDocumentsPrivyDocumentsIdSignMutationError = AxiosError<unknown>;
/**
 * @summary Sign document
 */
export declare const usePostApiInternalDocumentsPrivyDocumentsIdSign: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataPrivySigning, any>, TError, {
        id: string;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataPrivySigning, any>, TError, {
    id: string;
}, TContext>;
/**
 * @summary Create signature
 */
export declare const postApiInternalDocumentsSignatures: (signatureExcludeArchivedCreatedIdUpdated: SignatureExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSignature>>;
export declare const getPostApiInternalDocumentsSignaturesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSignature, any>, TError, {
        data: SignatureExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSignature, any>, TError, {
    data: SignatureExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiInternalDocumentsSignaturesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsSignatures>>>;
export declare type PostApiInternalDocumentsSignaturesMutationBody = SignatureExcludeArchivedCreatedIdUpdated;
export declare type PostApiInternalDocumentsSignaturesMutationError = AxiosError<unknown>;
/**
 * @summary Create signature
 */
export declare const usePostApiInternalDocumentsSignatures: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSignature, any>, TError, {
        data: SignatureExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSignature, any>, TError, {
    data: SignatureExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Search document template
 */
export declare const getApiInternalDocumentsDocTemplates: (params?: GetApiInternalDocumentsDocTemplatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocTemplateResponseManyPaginated>>;
export declare const getGetApiInternalDocumentsDocTemplatesQueryKey: (params?: GetApiInternalDocumentsDocTemplatesParams) => readonly ["/api/internal-documents/doc_templates", ...GetApiInternalDocumentsDocTemplatesParams[]];
export declare const getGetApiInternalDocumentsDocTemplatesQueryOptions: <TData = AxiosResponse<DataDocTemplateResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsDocTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocTemplateResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocTemplateResponseManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocTemplates>>>;
export declare type GetApiInternalDocumentsDocTemplatesQueryError = AxiosError<unknown>;
/**
 * @summary Search document template
 */
export declare const useGetApiInternalDocumentsDocTemplates: <TData = AxiosResponse<DataDocTemplateResponseManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiInternalDocumentsDocTemplatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocTemplateResponseManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary upload document template
 */
export declare const postApiInternalDocumentsDocTemplates: (postApiInternalDocumentsDocTemplatesBody: PostApiInternalDocumentsDocTemplatesBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocTemplate>>;
export declare const getPostApiInternalDocumentsDocTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
        data: PostApiInternalDocumentsDocTemplatesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
    data: PostApiInternalDocumentsDocTemplatesBody;
}, TContext>;
export declare type PostApiInternalDocumentsDocTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocTemplates>>>;
export declare type PostApiInternalDocumentsDocTemplatesMutationBody = PostApiInternalDocumentsDocTemplatesBody;
export declare type PostApiInternalDocumentsDocTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary upload document template
 */
export declare const usePostApiInternalDocumentsDocTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
        data: PostApiInternalDocumentsDocTemplatesBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocTemplate, any>, TError, {
    data: PostApiInternalDocumentsDocTemplatesBody;
}, TContext>;
/**
 * @summary Delete document template
 */
export declare const deleteApiInternalDocumentsDocTemplates: (docTemplateOnlyId: DocTemplateOnlyId, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocTemplate>>;
export declare const getDeleteApiInternalDocumentsDocTemplatesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
        data: DocTemplateOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
    data: DocTemplateOnlyId;
}, TContext>;
export declare type DeleteApiInternalDocumentsDocTemplatesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiInternalDocumentsDocTemplates>>>;
export declare type DeleteApiInternalDocumentsDocTemplatesMutationBody = DocTemplateOnlyId;
export declare type DeleteApiInternalDocumentsDocTemplatesMutationError = AxiosError<unknown>;
/**
 * @summary Delete document template
 */
export declare const useDeleteApiInternalDocumentsDocTemplates: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTemplate, any>, TError, {
        data: DocTemplateOnlyId;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocTemplate, any>, TError, {
    data: DocTemplateOnlyId;
}, TContext>;
/**
 * @summary Download doc template by id
 */
export declare const getApiInternalDocumentsDocTemplatesIdDownload: (id: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsDocTemplatesIdDownloadQueryKey: (id: string) => readonly [`/api/internal-documents/doc_templates/${string}/download`];
export declare const getGetApiInternalDocumentsDocTemplatesIdDownloadQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocTemplatesIdDownloadQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocTemplatesIdDownload>>>;
export declare type GetApiInternalDocumentsDocTemplatesIdDownloadQueryError = AxiosError<unknown>;
/**
 * @summary Download doc template by id
 */
export declare const useGetApiInternalDocumentsDocTemplatesIdDownload: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Preview document template
 */
export declare const getApiInternalDocumentsDocTemplatesIdPreview: (id: string, params?: GetApiInternalDocumentsDocTemplatesIdPreviewParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiInternalDocumentsDocTemplatesIdPreviewQueryKey: (id: string, params?: GetApiInternalDocumentsDocTemplatesIdPreviewParams) => readonly [`/api/internal-documents/doc_templates/${string}/preview`, ...GetApiInternalDocumentsDocTemplatesIdPreviewParams[]];
export declare const getGetApiInternalDocumentsDocTemplatesIdPreviewQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiInternalDocumentsDocTemplatesIdPreviewParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocTemplatesIdPreviewQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocTemplatesIdPreview>>>;
export declare type GetApiInternalDocumentsDocTemplatesIdPreviewQueryError = AxiosError<unknown>;
/**
 * @summary Preview document template
 */
export declare const useGetApiInternalDocumentsDocTemplatesIdPreview: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(id: string, params?: GetApiInternalDocumentsDocTemplatesIdPreviewParams, options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get possible tags for document
 */
export declare const getApiInternalDocumentsDocTemplatesTags: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocTemplateTagsMany>>;
export declare const getGetApiInternalDocumentsDocTemplatesTagsQueryKey: () => readonly ["/api/internal-documents/doc_templates/tags"];
export declare const getGetApiInternalDocumentsDocTemplatesTagsQueryOptions: <TData = AxiosResponse<DataDocTemplateTagsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocTemplateTagsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataDocTemplateTagsMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiInternalDocumentsDocTemplatesTagsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiInternalDocumentsDocTemplatesTags>>>;
export declare type GetApiInternalDocumentsDocTemplatesTagsQueryError = AxiosError<unknown>;
/**
 * @summary Get possible tags for document
 */
export declare const useGetApiInternalDocumentsDocTemplatesTags: <TData = AxiosResponse<DataDocTemplateTagsMany, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataDocTemplateTagsMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create doc types
 */
export declare const postApiInternalDocumentsDocTemplatesTypes: (createDocType: CreateDocType, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocTypeSchema>>;
export declare const getPostApiInternalDocumentsDocTemplatesTypesMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTypeSchema, any>, TError, {
        data: CreateDocType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocTypeSchema, any>, TError, {
    data: CreateDocType;
}, TContext>;
export declare type PostApiInternalDocumentsDocTemplatesTypesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocTemplatesTypes>>>;
export declare type PostApiInternalDocumentsDocTemplatesTypesMutationBody = CreateDocType;
export declare type PostApiInternalDocumentsDocTemplatesTypesMutationError = AxiosError<unknown>;
/**
 * @summary Create doc types
 */
export declare const usePostApiInternalDocumentsDocTemplatesTypes: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocTypeSchema, any>, TError, {
        data: CreateDocType;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocTypeSchema, any>, TError, {
    data: CreateDocType;
}, TContext>;
/**
 * @summary Create doc group
 */
export declare const postApiInternalDocumentsDocTemplatesGroups: (docGroupOnlyDocGroupSortOrder: DocGroupOnlyDocGroupSortOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocGroup>>;
export declare const getPostApiInternalDocumentsDocTemplatesGroupsMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
        data: DocGroupOnlyDocGroupSortOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
    data: DocGroupOnlyDocGroupSortOrder;
}, TContext>;
export declare type PostApiInternalDocumentsDocTemplatesGroupsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiInternalDocumentsDocTemplatesGroups>>>;
export declare type PostApiInternalDocumentsDocTemplatesGroupsMutationBody = DocGroupOnlyDocGroupSortOrder;
export declare type PostApiInternalDocumentsDocTemplatesGroupsMutationError = AxiosError<unknown>;
/**
 * @summary Create doc group
 */
export declare const usePostApiInternalDocumentsDocTemplatesGroups: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
        data: DocGroupOnlyDocGroupSortOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocGroup, any>, TError, {
    data: DocGroupOnlyDocGroupSortOrder;
}, TContext>;
/**
 * @summary Update doc group
 */
export declare const patchApiInternalDocumentsDocTemplatesGroupsDocGroup: (docGroup: string, docGroupOnlySortOrder: DocGroupOnlySortOrder, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDocGroup>>;
export declare const getPatchApiInternalDocumentsDocTemplatesGroupsDocGroupMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
        docGroup: string;
        data: DocGroupOnlySortOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
    docGroup: string;
    data: DocGroupOnlySortOrder;
}, TContext>;
export declare type PatchApiInternalDocumentsDocTemplatesGroupsDocGroupMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiInternalDocumentsDocTemplatesGroupsDocGroup>>>;
export declare type PatchApiInternalDocumentsDocTemplatesGroupsDocGroupMutationBody = DocGroupOnlySortOrder;
export declare type PatchApiInternalDocumentsDocTemplatesGroupsDocGroupMutationError = AxiosError<unknown>;
/**
 * @summary Update doc group
 */
export declare const usePatchApiInternalDocumentsDocTemplatesGroupsDocGroup: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDocGroup, any>, TError, {
        docGroup: string;
        data: DocGroupOnlySortOrder;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDocGroup, any>, TError, {
    docGroup: string;
    data: DocGroupOnlySortOrder;
}, TContext>;
