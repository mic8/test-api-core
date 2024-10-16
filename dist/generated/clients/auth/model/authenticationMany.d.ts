/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * python-web
 * OpenAPI spec version: 0.0.1
 */
import type { AuthenticationManyAfMarks } from "./authenticationManyAfMarks";
import type { AuthenticationManyCreatedFrom } from "./authenticationManyCreatedFrom";
import type { AuthenticationManyExternalResponse } from "./authenticationManyExternalResponse";
import type { AuthenticationManyMeta } from "./authenticationManyMeta";
import type { AuthenticationManySendType } from "./authenticationManySendType";
import type { AuthenticationManyStatus } from "./authenticationManyStatus";
import type { AuthenticationManyUtmMarks } from "./authenticationManyUtmMarks";
export interface AuthenticationMany {
    af_marks?: AuthenticationManyAfMarks;
    android_id?: string;
    app_version?: string | null;
    appsflyer_id?: string;
    attempts?: number;
    browser?: string | null;
    code?: string | null;
    code_hash?: string;
    created?: string;
    created_from?: AuthenticationManyCreatedFrom;
    external_response?: AuthenticationManyExternalResponse;
    firebase_id?: string;
    id?: string;
    ios_id?: string | null;
    landing_url?: string | null;
    meta?: AuthenticationManyMeta;
    phone_number?: string | null;
    referrer?: string | null;
    send_type?: AuthenticationManySendType;
    status?: AuthenticationManyStatus;
    updated?: string;
    user_agent?: string | null;
    utm_marks?: AuthenticationManyUtmMarks;
}
