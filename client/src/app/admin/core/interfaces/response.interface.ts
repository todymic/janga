import {Practitioner} from "./practitioner.interface";
import {Office} from "./office.interface";
export interface GetPractitionerResponse {
  status: boolean,
  practitioner: Practitioner;
}

export interface GetPractitionersResponse {
  status: boolean,
  practitioners: Practitioner[];
}

// Office API response
export interface GetOfficeResponse {
  status: boolean,
  office: Office;
}

export interface GetOfficesResponse {
  status: boolean,
  offices: Office[];
}


export interface StatusExceptedResponse {
  status: boolean,
  message: string
}

