/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * applications
 * OpenAPI spec version: 0.0.1
 */
import type { ApplicationExcludeStatusStatusDescriptionExpectedProductType } from "./applicationExcludeStatusStatusDescriptionExpectedProductType";
import type { Period } from "./period";
import type { ApplicationExcludeStatusStatusDescriptionPayload } from "./applicationExcludeStatusStatusDescriptionPayload";
import type { ApplicationExcludeStatusStatusDescriptionPublicStatus } from "./applicationExcludeStatusStatusDescriptionPublicStatus";
export interface ApplicationExcludeStatusStatusDescription {
    assigned?: string;
    calc_id?: number | null;
    client_id?: string;
    contract_id?: number | null;
    created?: string;
    expected_product_type?: ApplicationExcludeStatusStatusDescriptionExpectedProductType;
    id?: string;
    is_test?: boolean | null;
    loan_amount?: number;
    loan_tenor?: Period;
    offer_id?: number | null;
    payload?: ApplicationExcludeStatusStatusDescriptionPayload;
    process_definition?: string;
    process_version?: number;
    public_status?: ApplicationExcludeStatusStatusDescriptionPublicStatus;
    purpose?: string;
    session_id?: string | null;
    updated?: string;
}
