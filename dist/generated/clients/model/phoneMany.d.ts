/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { PhoneManyPhoneType } from "./phoneManyPhoneType";
export interface PhoneMany {
    archived?: boolean;
    client_id?: string;
    created?: string;
    id?: string;
    phone_number?: string | null;
    phone_type?: PhoneManyPhoneType;
    priority?: number | null;
    updated?: string;
}
