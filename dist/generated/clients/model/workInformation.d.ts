/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { WorkInformationHowLongWorkThisCompany } from "./workInformationHowLongWorkThisCompany";
import type { WorkInformationIndustry } from "./workInformationIndustry";
import type { WorkInformationSessionType } from "./workInformationSessionType";
export interface WorkInformation {
    archived?: boolean;
    client_id?: string;
    company_name?: string | null;
    contact_phone?: string | null;
    created?: string;
    employer_type_id?: string | null;
    frequency_of_income_id?: string | null;
    how_long_work_this_company?: WorkInformationHowLongWorkThisCompany;
    how_long_work_this_company_id?: string | null;
    id?: string;
    income?: number | null;
    industry?: WorkInformationIndustry;
    industry_id?: string | null;
    office_address?: string | null;
    office_phone_number?: string | null;
    position?: string | null;
    relationship_id?: string | null;
    salary_payday?: number | null;
    session_id?: string | null;
    session_type?: WorkInformationSessionType;
    updated?: string;
}
