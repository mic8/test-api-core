/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { Info } from "./info";
export interface LookupInfo {
    info: Info;
    lookup_id?: number | null;
    number: string;
    request_id: string;
    state: string;
    [key: string]: any;
}
