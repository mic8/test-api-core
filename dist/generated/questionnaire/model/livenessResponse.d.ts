/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * questionnaire
 * OpenAPI spec version: 0.0.1
 */
import type { LivenessResponseAdditional } from "./livenessResponseAdditional";
import type { LivenessResponseServices } from "./livenessResponseServices";
export interface LivenessResponse {
    additional?: LivenessResponseAdditional;
    /** Health check flag */
    result: boolean;
    services?: LivenessResponseServices;
}
