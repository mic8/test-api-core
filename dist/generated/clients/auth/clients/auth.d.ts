import type { QueryKey, UseMutationOptions, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, ContactRequestExcludeArchivedCreatedIdUpdated, ContactRequestExcludeArchivedCreatedIdUpdated1, CreateClientTokenRequest, DataAuthenticationsPaginated, DataConfirmCodeResponse, DataContactRequest, DataContactRequestManyPaginated, DataCountByFcmTokenManyPaginated, DataDeleteSessionsResponse, DataLivenessResponse, DataLogOutResp, DataReadinessResponse, DataSendCodeResponse, DataSession, DataSessionAggregates, DataSessionMany, DataSessions, DataTokensResponse, DeleteSessionByFcmRequestOnlyFcmTokenFullDelete, DeleteSessionsRequest, GetApiClientsAuthCrmAuthenticationsParams, GetApiClientsAuthCrmClientIdSessionsAggregatesParams, GetApiClientsAuthCrmContactRequestParams, GetApiClientsAuthCrmSessionsCountByFcmTokenParams, GetApiClientsAuthCrmSessionsLastByClientsParams, GetApiClientsAuthSessionsParams, LogOutRequestBody, RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, SendCodeRequest, SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, TokensRequest } from "../model";
/**
 * @summary Check application and container is alive
 */
export declare const getApiClientsAuthReadiness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataReadinessResponse>>;
export declare const getGetApiClientsAuthReadinessQueryKey: () => readonly ["/api/clients/auth/readiness"];
export declare const getGetApiClientsAuthReadinessQueryOptions: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthReadinessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthReadiness>>>;
export declare type GetApiClientsAuthReadinessQueryError = AxiosError<unknown>;
/**
 * @summary Check application and container is alive
 */
export declare const useGetApiClientsAuthReadiness: <TData = AxiosResponse<DataReadinessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataReadinessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Return status code 500 if any of main services not available.
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const getApiClientsAuthLiveness: (options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLivenessResponse>>;
export declare const getGetApiClientsAuthLivenessQueryKey: () => readonly ["/api/clients/auth/liveness"];
export declare const getGetApiClientsAuthLivenessQueryOptions: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthLivenessQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthLiveness>>>;
export declare type GetApiClientsAuthLivenessQueryError = AxiosError<unknown>;
/**
 * @summary Check accessibility of external services: DB, S3, etc.
 */
export declare const useGetApiClientsAuthLiveness: <TData = AxiosResponse<DataLivenessResponse, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<DataLivenessResponse, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get app metrics
 */
export declare const getApiClientsAuthMetrics: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsAuthMetricsQueryKey: () => readonly ["/api/clients/auth/metrics"];
export declare const getGetApiClientsAuthMetricsQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthMetricsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthMetrics>>>;
export declare type GetApiClientsAuthMetricsQueryError = AxiosError<unknown>;
/**
 * @summary Get app metrics
 */
export declare const useGetApiClientsAuthMetrics: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Send auth code
 */
export declare const postApiClientsAuthGetCode: (sendCodeRequest: SendCodeRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSendCodeResponse>>;
export declare const getPostApiClientsAuthGetCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
        data: SendCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
    data: SendCodeRequest;
}, TContext>;
export declare type PostApiClientsAuthGetCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthGetCode>>>;
export declare type PostApiClientsAuthGetCodeMutationBody = SendCodeRequest;
export declare type PostApiClientsAuthGetCodeMutationError = AxiosError<unknown>;
/**
 * @summary Send auth code
 */
export declare const usePostApiClientsAuthGetCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSendCodeResponse, any>, TError, {
        data: SendCodeRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSendCodeResponse, any>, TError, {
    data: SendCodeRequest;
}, TContext>;
/**
 * @summary Confirm auth code and create session. Returns pair or auth tokens
 */
export declare const postApiClientsAuthConfirmCode: (confirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated: ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConfirmCodeResponse>>;
export declare const getPostApiClientsAuthConfirmCodeMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
export declare type PostApiClientsAuthConfirmCodeMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthConfirmCode>>>;
export declare type PostApiClientsAuthConfirmCodeMutationBody = ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
export declare type PostApiClientsAuthConfirmCodeMutationError = AxiosError<unknown>;
/**
 * @summary Confirm auth code and create session. Returns pair or auth tokens
 */
export declare const usePostApiClientsAuthConfirmCode: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: ConfirmCodeRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const postApiClientsAuthRefreshSession: (refreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataConfirmCodeResponse>>;
export declare const getPostApiClientsAuthRefreshSessionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
export declare type PostApiClientsAuthRefreshSessionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthRefreshSession>>>;
export declare type PostApiClientsAuthRefreshSessionMutationBody = RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
export declare type PostApiClientsAuthRefreshSessionMutationError = AxiosError<unknown>;
/**
 * @summary Refresh session by refresh token. Returns pair or auth tokens
 */
export declare const usePostApiClientsAuthRefreshSession: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
        data: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataConfirmCodeResponse, any>, TError, {
    data: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
/**
 * @summary Update session by id
 */
export declare const postApiClientsAuthUpdateSession: (sessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated: SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSession>>;
export declare const getPostApiClientsAuthUpdateSessionMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSession, any>, TError, {
        data: SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSession, any>, TError, {
    data: SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
export declare type PostApiClientsAuthUpdateSessionMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthUpdateSession>>>;
export declare type PostApiClientsAuthUpdateSessionMutationBody = SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
export declare type PostApiClientsAuthUpdateSessionMutationError = AxiosError<unknown>;
/**
 * @summary Update session by id
 */
export declare const usePostApiClientsAuthUpdateSession: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSession, any>, TError, {
        data: SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSession, any>, TError, {
    data: SessionDataExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated;
}, TContext>;
/**
 * @summary Delete current session by token
 */
export declare const postApiClientsAuthLogOut: (logOutRequestBody: LogOutRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLogOutResp>>;
export declare const getPostApiClientsAuthLogOutMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
        data: LogOutRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
    data: LogOutRequestBody;
}, TContext>;
export declare type PostApiClientsAuthLogOutMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthLogOut>>>;
export declare type PostApiClientsAuthLogOutMutationBody = LogOutRequestBody;
export declare type PostApiClientsAuthLogOutMutationError = AxiosError<unknown>;
/**
 * @summary Delete current session by token
 */
export declare const usePostApiClientsAuthLogOut: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
        data: LogOutRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLogOutResp, any>, TError, {
    data: LogOutRequestBody;
}, TContext>;
/**
 * @summary Delete all sessions by token
 */
export declare const postApiClientsAuthLogOutAll: (logOutRequestBody: LogOutRequestBody, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataLogOutResp>>;
export declare const getPostApiClientsAuthLogOutAllMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
        data: LogOutRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
    data: LogOutRequestBody;
}, TContext>;
export declare type PostApiClientsAuthLogOutAllMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthLogOutAll>>>;
export declare type PostApiClientsAuthLogOutAllMutationBody = LogOutRequestBody;
export declare type PostApiClientsAuthLogOutAllMutationError = AxiosError<unknown>;
/**
 * @summary Delete all sessions by token
 */
export declare const usePostApiClientsAuthLogOutAll: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataLogOutResp, any>, TError, {
        data: LogOutRequestBody;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataLogOutResp, any>, TError, {
    data: LogOutRequestBody;
}, TContext>;
/**
 * @summary Get public key to validate tokens
 */
export declare const getApiClientsAuthPublicKey: (options?: AxiosRequestConfig) => Promise<AxiosResponse<void>>;
export declare const getGetApiClientsAuthPublicKeyQueryKey: () => readonly ["/api/clients/auth/public_key"];
export declare const getGetApiClientsAuthPublicKeyQueryOptions: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthPublicKeyQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthPublicKey>>>;
export declare type GetApiClientsAuthPublicKeyQueryError = AxiosError<unknown>;
/**
 * @summary Get public key to validate tokens
 */
export declare const useGetApiClientsAuthPublicKey: <TData = AxiosResponse<void, any>, TError = AxiosError<unknown, any>>(options?: {
    query?: UseQueryOptions<AxiosResponse<void, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Search session
 */
export declare const getApiClientsAuthSessions: (params?: GetApiClientsAuthSessionsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSessions>>;
export declare const getGetApiClientsAuthSessionsQueryKey: (params?: GetApiClientsAuthSessionsParams) => readonly ["/api/clients/auth/sessions", ...GetApiClientsAuthSessionsParams[]];
export declare const getGetApiClientsAuthSessionsQueryOptions: <TData = AxiosResponse<DataSessions, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthSessionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessions, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSessions, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthSessions>>>;
export declare type GetApiClientsAuthSessionsQueryError = AxiosError<unknown>;
/**
 * @summary Search session
 */
export declare const useGetApiClientsAuthSessions: <TData = AxiosResponse<DataSessions, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthSessionsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessions, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create client access token
 */
export declare const postApiClientsAuthCrmGetClientToken: (tokensRequest: TokensRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTokensResponse>>;
export declare const getPostApiClientsAuthCrmGetClientTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
        data: TokensRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
    data: TokensRequest;
}, TContext>;
export declare type PostApiClientsAuthCrmGetClientTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthCrmGetClientToken>>>;
export declare type PostApiClientsAuthCrmGetClientTokenMutationBody = TokensRequest;
export declare type PostApiClientsAuthCrmGetClientTokenMutationError = AxiosError<unknown>;
/**
 * @summary Create client access token
 */
export declare const usePostApiClientsAuthCrmGetClientToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
        data: TokensRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTokensResponse, any>, TError, {
    data: TokensRequest;
}, TContext>;
/**
 * @summary Create client access and refresh token. Сan do POST actions with these tokens
 */
export declare const postApiClientsAuthCreateClientToken: (createClientTokenRequest: CreateClientTokenRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataTokensResponse>>;
export declare const getPostApiClientsAuthCreateClientTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
        data: CreateClientTokenRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
    data: CreateClientTokenRequest;
}, TContext>;
export declare type PostApiClientsAuthCreateClientTokenMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthCreateClientToken>>>;
export declare type PostApiClientsAuthCreateClientTokenMutationBody = CreateClientTokenRequest;
export declare type PostApiClientsAuthCreateClientTokenMutationError = AxiosError<unknown>;
/**
 * @summary Create client access and refresh token. Сan do POST actions with these tokens
 */
export declare const usePostApiClientsAuthCreateClientToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataTokensResponse, any>, TError, {
        data: CreateClientTokenRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataTokensResponse, any>, TError, {
    data: CreateClientTokenRequest;
}, TContext>;
/**
 * @summary Search Authentications
 */
export declare const getApiClientsAuthCrmAuthentications: (params?: GetApiClientsAuthCrmAuthenticationsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataAuthenticationsPaginated>>;
export declare const getGetApiClientsAuthCrmAuthenticationsQueryKey: (params?: GetApiClientsAuthCrmAuthenticationsParams) => readonly ["/api/clients/auth/crm/authentications", ...GetApiClientsAuthCrmAuthenticationsParams[]];
export declare const getGetApiClientsAuthCrmAuthenticationsQueryOptions: <TData = AxiosResponse<DataAuthenticationsPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmAuthenticationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAuthenticationsPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataAuthenticationsPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthCrmAuthenticationsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthCrmAuthentications>>>;
export declare type GetApiClientsAuthCrmAuthenticationsQueryError = AxiosError<unknown>;
/**
 * @summary Search Authentications
 */
export declare const useGetApiClientsAuthCrmAuthentications: <TData = AxiosResponse<DataAuthenticationsPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmAuthenticationsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataAuthenticationsPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get clients last session
 */
export declare const getApiClientsAuthCrmSessionsLastByClients: (params?: GetApiClientsAuthCrmSessionsLastByClientsParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSessionMany>>;
export declare const getGetApiClientsAuthCrmSessionsLastByClientsQueryKey: (params?: GetApiClientsAuthCrmSessionsLastByClientsParams) => readonly ["/api/clients/auth/crm/sessions/last_by_clients", ...GetApiClientsAuthCrmSessionsLastByClientsParams[]];
export declare const getGetApiClientsAuthCrmSessionsLastByClientsQueryOptions: <TData = AxiosResponse<DataSessionMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmSessionsLastByClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSessionMany, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthCrmSessionsLastByClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthCrmSessionsLastByClients>>>;
export declare type GetApiClientsAuthCrmSessionsLastByClientsQueryError = AxiosError<unknown>;
/**
 * @summary Get clients last session
 */
export declare const useGetApiClientsAuthCrmSessionsLastByClients: <TData = AxiosResponse<DataSessionMany, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmSessionsLastByClientsParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessionMany, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get client session aggregates
 */
export declare const getApiClientsAuthCrmClientIdSessionsAggregates: (clientId: string, params?: GetApiClientsAuthCrmClientIdSessionsAggregatesParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSessionAggregates>>;
export declare const getGetApiClientsAuthCrmClientIdSessionsAggregatesQueryKey: (clientId: string, params?: GetApiClientsAuthCrmClientIdSessionsAggregatesParams) => readonly [`/api/clients/auth/crm/${string}/sessions/aggregates`, ...GetApiClientsAuthCrmClientIdSessionsAggregatesParams[]];
export declare const getGetApiClientsAuthCrmClientIdSessionsAggregatesQueryOptions: <TData = AxiosResponse<DataSessionAggregates, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiClientsAuthCrmClientIdSessionsAggregatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessionAggregates, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataSessionAggregates, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthCrmClientIdSessionsAggregatesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthCrmClientIdSessionsAggregates>>>;
export declare type GetApiClientsAuthCrmClientIdSessionsAggregatesQueryError = AxiosError<unknown>;
/**
 * @summary Get client session aggregates
 */
export declare const useGetApiClientsAuthCrmClientIdSessionsAggregates: <TData = AxiosResponse<DataSessionAggregates, any>, TError = AxiosError<unknown, any>>(clientId: string, params?: GetApiClientsAuthCrmClientIdSessionsAggregatesParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataSessionAggregates, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete all sessions by client_id
 */
export declare const postApiClientsAuthCrmSessionsDelete: (deleteSessionsRequest: DeleteSessionsRequest, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataDeleteSessionsResponse>>;
export declare const getPostApiClientsAuthCrmSessionsDeleteMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDeleteSessionsResponse, any>, TError, {
        data: DeleteSessionsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataDeleteSessionsResponse, any>, TError, {
    data: DeleteSessionsRequest;
}, TContext>;
export declare type PostApiClientsAuthCrmSessionsDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthCrmSessionsDelete>>>;
export declare type PostApiClientsAuthCrmSessionsDeleteMutationBody = DeleteSessionsRequest;
export declare type PostApiClientsAuthCrmSessionsDeleteMutationError = AxiosError<unknown>;
/**
 * @summary Delete all sessions by client_id
 */
export declare const usePostApiClientsAuthCrmSessionsDelete: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataDeleteSessionsResponse, any>, TError, {
        data: DeleteSessionsRequest;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataDeleteSessionsResponse, any>, TError, {
    data: DeleteSessionsRequest;
}, TContext>;
/**
 * @summary Count sessions by fcm token
 */
export declare const getApiClientsAuthCrmSessionsCountByFcmToken: (params?: GetApiClientsAuthCrmSessionsCountByFcmTokenParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataCountByFcmTokenManyPaginated>>;
export declare const getGetApiClientsAuthCrmSessionsCountByFcmTokenQueryKey: (params?: GetApiClientsAuthCrmSessionsCountByFcmTokenParams) => readonly ["/api/clients/auth/crm/sessions/count_by_fcm_token", ...GetApiClientsAuthCrmSessionsCountByFcmTokenParams[]];
export declare const getGetApiClientsAuthCrmSessionsCountByFcmTokenQueryOptions: <TData = AxiosResponse<DataCountByFcmTokenManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmSessionsCountByFcmTokenParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountByFcmTokenManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataCountByFcmTokenManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthCrmSessionsCountByFcmTokenQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthCrmSessionsCountByFcmToken>>>;
export declare type GetApiClientsAuthCrmSessionsCountByFcmTokenQueryError = AxiosError<unknown>;
/**
 * @summary Count sessions by fcm token
 */
export declare const useGetApiClientsAuthCrmSessionsCountByFcmToken: <TData = AxiosResponse<DataCountByFcmTokenManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmSessionsCountByFcmTokenParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataCountByFcmTokenManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete sessions by fcm token
 */
export declare const deleteApiClientsAuthCrmSessionsByFcmToken: (deleteSessionByFcmRequestOnlyFcmTokenFullDelete: DeleteSessionByFcmRequestOnlyFcmTokenFullDelete, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataSessionMany>>;
export declare const getDeleteApiClientsAuthCrmSessionsByFcmTokenMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSessionMany, any>, TError, {
        data: DeleteSessionByFcmRequestOnlyFcmTokenFullDelete;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataSessionMany, any>, TError, {
    data: DeleteSessionByFcmRequestOnlyFcmTokenFullDelete;
}, TContext>;
export declare type DeleteApiClientsAuthCrmSessionsByFcmTokenMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiClientsAuthCrmSessionsByFcmToken>>>;
export declare type DeleteApiClientsAuthCrmSessionsByFcmTokenMutationBody = DeleteSessionByFcmRequestOnlyFcmTokenFullDelete;
export declare type DeleteApiClientsAuthCrmSessionsByFcmTokenMutationError = AxiosError<unknown>;
/**
 * @summary Delete sessions by fcm token
 */
export declare const useDeleteApiClientsAuthCrmSessionsByFcmToken: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataSessionMany, any>, TError, {
        data: DeleteSessionByFcmRequestOnlyFcmTokenFullDelete;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataSessionMany, any>, TError, {
    data: DeleteSessionByFcmRequestOnlyFcmTokenFullDelete;
}, TContext>;
/**
 * @summary Create contact request
 */
export declare const postApiClientsAuthContactRequest: (contactRequestExcludeArchivedCreatedIdUpdated: ContactRequestExcludeArchivedCreatedIdUpdated, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactRequest>>;
export declare const getPostApiClientsAuthContactRequestMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
        data: ContactRequestExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
    data: ContactRequestExcludeArchivedCreatedIdUpdated;
}, TContext>;
export declare type PostApiClientsAuthContactRequestMutationResult = NonNullable<Awaited<ReturnType<typeof postApiClientsAuthContactRequest>>>;
export declare type PostApiClientsAuthContactRequestMutationBody = ContactRequestExcludeArchivedCreatedIdUpdated;
export declare type PostApiClientsAuthContactRequestMutationError = AxiosError<unknown>;
/**
 * @summary Create contact request
 */
export declare const usePostApiClientsAuthContactRequest: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
        data: ContactRequestExcludeArchivedCreatedIdUpdated;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactRequest, any>, TError, {
    data: ContactRequestExcludeArchivedCreatedIdUpdated;
}, TContext>;
/**
 * @summary Get contact requests
 */
export declare const getApiClientsAuthCrmContactRequest: (params?: GetApiClientsAuthCrmContactRequestParams, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactRequestManyPaginated>>;
export declare const getGetApiClientsAuthCrmContactRequestQueryKey: (params?: GetApiClientsAuthCrmContactRequestParams) => readonly ["/api/clients/auth/crm/contact_request", ...GetApiClientsAuthCrmContactRequestParams[]];
export declare const getGetApiClientsAuthCrmContactRequestQueryOptions: <TData = AxiosResponse<DataContactRequestManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmContactRequestParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContactRequestManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryOptions<AxiosResponse<DataContactRequestManyPaginated, any>, TError, TData, QueryKey> & {
    queryKey: QueryKey;
};
export declare type GetApiClientsAuthCrmContactRequestQueryResult = NonNullable<Awaited<ReturnType<typeof getApiClientsAuthCrmContactRequest>>>;
export declare type GetApiClientsAuthCrmContactRequestQueryError = AxiosError<unknown>;
/**
 * @summary Get contact requests
 */
export declare const useGetApiClientsAuthCrmContactRequest: <TData = AxiosResponse<DataContactRequestManyPaginated, any>, TError = AxiosError<unknown, any>>(params?: GetApiClientsAuthCrmContactRequestParams, options?: {
    query?: UseQueryOptions<AxiosResponse<DataContactRequestManyPaginated, any>, TError, TData, QueryKey> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update contact request
 */
export declare const patchApiClientsAuthCrmContactRequestId: (id: string, contactRequestExcludeArchivedCreatedIdUpdated1: ContactRequestExcludeArchivedCreatedIdUpdated1, options?: AxiosRequestConfig) => Promise<AxiosResponse<DataContactRequest>>;
export declare const getPatchApiClientsAuthCrmContactRequestIdMutationOptions: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
        id: string;
        data: ContactRequestExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
    id: string;
    data: ContactRequestExcludeArchivedCreatedIdUpdated1;
}, TContext>;
export declare type PatchApiClientsAuthCrmContactRequestIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiClientsAuthCrmContactRequestId>>>;
export declare type PatchApiClientsAuthCrmContactRequestIdMutationBody = ContactRequestExcludeArchivedCreatedIdUpdated1;
export declare type PatchApiClientsAuthCrmContactRequestIdMutationError = AxiosError<unknown>;
/**
 * @summary Update contact request
 */
export declare const usePatchApiClientsAuthCrmContactRequestId: <TError = AxiosError<unknown, any>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<AxiosResponse<DataContactRequest, any>, TError, {
        id: string;
        data: ContactRequestExcludeArchivedCreatedIdUpdated1;
    }, TContext> | undefined;
    axios?: AxiosRequestConfig<any> | undefined;
} | undefined) => import("@tanstack/react-query/build/legacy/types").UseMutationResult<AxiosResponse<DataContactRequest, any>, TError, {
    id: string;
    data: ContactRequestExcludeArchivedCreatedIdUpdated1;
}, TContext>;
