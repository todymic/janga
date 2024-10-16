import {Inject, Service} from "typedi";
import {Practitioner} from "../model/Practitioner";
import {PractitionerRepository} from "../repository/practitioner.repository";
import {Office} from "../model/Office";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
import {OfficeRepository} from "../repository/office.repository";
import {SpecialityRepository} from "../repository/speciality.repository";
import {LanguageRepository} from "../repository/language.repository";

export interface PractitionerRequest {
    firstname: string
    lastname: string
    description: string
    email: string
    officeId?: number,
    languages?: Array<Number>
    specialities?: Array<Number>
}

@Service()
export class PractitionerService {

    @Inject()
    private practitionerRepository!: PractitionerRepository

    @Inject()
    private officeRepository!: OfficeRepository

    @Inject()
    private languageRepository!: LanguageRepository

    @Inject()
    private specialityRepository!: SpecialityRepository
    async createPractitioner(bodyRequest: PractitionerRequest): Promise<Practitioner> {

        let newPractitioner = new Practitioner();

        // get Office
        if(bodyRequest.officeId) {

            this.officeRepository.getById(bodyRequest.officeId)
                .then((office: Office|null) => {
                    newPractitioner.$set('office', office);
                })
        }

        // get languages
        if(bodyRequest.languages) {
            this.languageRepository.getAll({ where: { id: [ bodyRequest.languages ] }})
                .then((languages: Language[]) => {
                    newPractitioner.$set('languages', languages);
                });
        }

        // get specialities
        if(bodyRequest.specialities) {
            this.specialityRepository.getAll({ where: { id: [ bodyRequest.specialities ] }})
                .then((specialities: Speciality[]) => {
                    newPractitioner.$set('specialities', specialities);
                })
        }

        return this.practitionerRepository.save(newPractitioner);
    }

}
