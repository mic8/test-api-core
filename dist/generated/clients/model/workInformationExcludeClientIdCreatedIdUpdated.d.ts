/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * crm service
 * OpenAPI spec version: 0.0.1
 */
import type { WorkInformationExcludeClientIdCreatedIdUpdatedHowLongWorkThisCompany } from "./workInformationExcludeClientIdCreatedIdUpdatedHowLongWorkThisCompany";
import type { WorkInformationExcludeClientIdCreatedIdUpdatedIndustry } from "./workInformationExcludeClientIdCreatedIdUpdatedIndustry";
import type { WorkInformationExcludeClientIdCreatedIdUpdatedSessionType } from "./workInformationExcludeClientIdCreatedIdUpdatedSessionType";
export interface WorkInformationExcludeClientIdCreatedIdUpdated {
    archived?: boolean;
    company_name?: string | null;
    contact_phone?: string | null;
    employer_type_id?: string | null;
    frequency_of_income_id?: string | null;
    how_long_work_this_company?: WorkInformationExcludeClientIdCreatedIdUpdatedHowLongWorkThisCompany;
    how_long_work_this_company_id?: string | null;
    income?: number | null;
    industry?: WorkInformationExcludeClientIdCreatedIdUpdatedIndustry;
    industry_id?: string | null;
    office_address?: string | null;
    office_phone_number?: string | null;
    position?: string | null;
    relationship_id?: string | null;
    salary_payday?: number | null;
    session_id?: string | null;
    session_type?: WorkInformationExcludeClientIdCreatedIdUpdatedSessionType;
}
