/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { ExperianExperianResponse } from "./experianExperianResponse";
import type { ExperianStatus } from "./experianStatus";
export interface Experian {
    archived?: boolean;
    client_id?: string;
    created?: string;
    experian_response?: ExperianExperianResponse;
    id?: string;
    stage_one_id?: string;
    stage_two_id?: string;
    status?: ExperianStatus;
    updated?: string;
}
