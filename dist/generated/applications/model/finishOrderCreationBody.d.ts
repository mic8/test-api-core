/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * applications
 * OpenAPI spec version: 0.0.1
 */
import type { FinishOrderCreationBodyMeta } from "./finishOrderCreationBodyMeta";
import type { FinishOrderCreationBodyResult } from "./finishOrderCreationBodyResult";
export interface FinishOrderCreationBody {
    error_msg?: string | null;
    error_type?: string | null;
    meta?: FinishOrderCreationBodyMeta;
    result: FinishOrderCreationBodyResult;
}
