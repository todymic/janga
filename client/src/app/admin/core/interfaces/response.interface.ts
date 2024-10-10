import {Practitioner} from "./practitioner.interface";

export interface GetPractitionersResponse {
  status: boolean,
  practitioners: Practitioner[];
}

export interface PostPractitionerResponse {
  status: boolean,
  practitioner: Practitioner;
}

