/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * python-web
 * OpenAPI spec version: 0.0.1
 */
import type { RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedAfMarks } from "./refreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedAfMarks";
import type { RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedCreatedFrom } from "./refreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedCreatedFrom";
import type { RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedGeo } from "./refreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedGeo";
import type { RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedUtmMarks } from "./refreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedUtmMarks";
export interface RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdated {
    access_token: string;
    af_marks?: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedAfMarks;
    android_id?: string;
    app_version?: string;
    appsflyer_id?: string;
    auth_id?: string;
    browser?: string | null;
    created_from?: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedCreatedFrom;
    fcm_token?: string;
    firebase_id?: string;
    geo?: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedGeo;
    ios_id?: string | null;
    is_deleted?: boolean | null;
    js_fingerprint?: string;
    landing_url?: string | null;
    referrer?: string | null;
    refresh_token: string;
    seon_fingerprint?: string;
    user_agent?: string | null;
    utm_marks?: RefreshSessionRequestExcludeArchivedClientIdCreatedIdIpRefreshTokenHashUpdatedUtmMarks;
}
