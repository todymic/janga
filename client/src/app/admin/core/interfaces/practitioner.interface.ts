import {Language} from "./language.interface";
import {Speciality} from "./speciality.interface";

export interface Practitioner {
  id?: string,
  firstname: string;
  lastname: string;
  email: string;
  description?: string|null;
  active?: boolean;
  degrees?: string;
  languages?: Language[] |null;
  specialities?: Speciality[] | null;
}
