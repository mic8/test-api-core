/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * notifications service
 * OpenAPI spec version: 0.0.1
 */
import type { PushData } from "./pushData";
import type { PushPriority } from "./pushPriority";
export interface Push {
    body?: string;
    data?: PushData;
    priority?: PushPriority;
    title?: string;
}
