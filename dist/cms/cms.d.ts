declare type CMSApiConfig = {
    token: string;
    url: string;
};
export declare const useGetFAQ: (apiConfig: CMSApiConfig, locale?: string) => import("@tanstack/react-query/build/legacy/types").UseQueryResult<import("axios").AxiosResponse<any, any>, Error>;
export declare const getFAQ: (apiConfig: CMSApiConfig, locale?: string) => Promise<import("axios").AxiosResponse<any, any>>;
export {};
