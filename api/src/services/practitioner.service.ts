import {Inject, Service} from "typedi";
import {Practitioner} from "../model/Practitioner";
import {PractitionerRepository} from "../repository/practitioner.repository";
import {Office} from "../model/Office";
import {Language} from "../model/Language";
import {Speciality} from "../model/Speciality";
import {OfficeRepository} from "../repository/office.repository";
import {SpecialityRepository} from "../repository/speciality.repository";
import {LanguageRepository} from "../repository/language.repository";
import {Op} from "sequelize";
import {NotFoundException} from "../exceptions/NotFoundException";

export interface PractitionerRequest {
    firstname: string,
    lastname: string,
    description: string,
    email: string,
    active: boolean,
    officeId: number,
    languages?: Array<Number>
    specialities?: Array<Number>
}

@Service()
export class PractitionerService {

    @Inject()
    private practitionerRepository!: PractitionerRepository

    @Inject()
    private languageRepository!: LanguageRepository

    @Inject()
    private specialityRepository!: SpecialityRepository

    async createPractitioner(bodyRequest: PractitionerRequest): Promise<Practitioner> {

        let newPractitioner = new Practitioner();

        newPractitioner.firstname = bodyRequest.firstname;
        newPractitioner.lastname = bodyRequest.lastname;
        newPractitioner.email = bodyRequest.email;
        newPractitioner.description = bodyRequest.description;
        newPractitioner.active = bodyRequest.active;
        newPractitioner.officeId = bodyRequest.officeId;

        return this.practitionerRepository.save(newPractitioner)
            .then(() => {
                // get languages
                if (bodyRequest.languages) {

                    this.languageRepository
                        .getAll({
                            where: {
                                id: {
                                    [Op.or]: [bodyRequest.languages]
                                }
                            }
                        })
                        .then((languages: Language[]) => {
                            newPractitioner.$set('languages', languages);
                        });
                }

                // get specialities
                if (bodyRequest.specialities) {
                    this.specialityRepository
                        .getAll({
                            where: {
                                id: {
                                    [Op.or]: [bodyRequest.specialities]
                                }
                            }
                        })
                        .then((specialities: Speciality[]) => {
                            newPractitioner.$set('specialities', specialities);
                        })
                }

                return newPractitioner.save();
            });


    }

    async updatePractitioner(id: number, bodyRequest: PractitionerRequest): Promise<Practitioner> {

        return await this.practitionerRepository.getById(id)
            .then(async (practitioner: Practitioner | null) => {

                if (!practitioner) {
                    throw new NotFoundException(`Practitioner ID ${id} is not found`);
                }
                practitioner.firstname = bodyRequest.firstname;
                practitioner.lastname = bodyRequest.lastname;
                practitioner.email = bodyRequest.email;
                practitioner.description = bodyRequest.description;
                practitioner.active = bodyRequest.active;
                practitioner.officeId = bodyRequest.officeId;

                await this.practitionerRepository.save(practitioner);
                // get languages
                if (bodyRequest.languages) {

                    this.languageRepository
                        .getAll({
                            where: {
                                id: {
                                    [Op.or]: [bodyRequest.languages]
                                }
                            }
                        })
                        .then((languages: Language[]) => {

                            practitioner.$set('languages', languages);
                        });
                }
                // get specialities
                if (bodyRequest.specialities) {
                    this.specialityRepository
                        .getAll({
                            where: {
                                id: {
                                    [Op.or]: [bodyRequest.specialities]
                                }
                            }
                        })
                        .then((specialities: Speciality[]) => {
                            practitioner.$set('specialities', specialities);
                        });
                }
                return practitioner.save();
            })






    }

}
