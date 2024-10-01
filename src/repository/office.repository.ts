import {Office} from "../model/Office";

interface OfficeRepoInterface {

    save(reqOffice: Office): Promise<Office>;
    getById(practitionerId: string): Promise<Office | null>;
    getAll(): Promise<Office[] | null>;
    update(id:string, practitioner: Office): Promise<Office|null>;
    delete(practitionerId: string): Promise<void>;

}
export class OfficeRepository implements OfficeRepoInterface {

    async delete(OfficeId: string): Promise<void> {

        try {

            const office = await Office.findOne({ where: { id: OfficeId } });

            if(!office) {
                throw new Error("Office not found");
            }

            await office.destroy();

        }catch (e) {
            throw e;
        }
    }

    async getAll(): Promise<Office[] | null> {

        try {
            return await Office.findAll();
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async getById(OfficeId: string): Promise<Office | null> {
        try {
            const office = await Office.findOne({ where: { id: OfficeId } });

            if(!office) {
                throw new Error("Office not found");
            }

            return office;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async save(reqOffice: Office): Promise<Office> {

        try {
            return await Office.create({
                name: reqOffice.name,
                street: reqOffice.street,
                zipcode: reqOffice.zipcode,
                city: reqOffice.street,
                country: reqOffice.country,
            });
        } catch (e: any) {
            throw new Error(e.message);
        }

    }

   async update(id: string, office: Office): Promise<Office> {
        try {
           const updatedOffice = await Office.findOne({ where: { id: id } });

           if(!updatedOffice) {
               throw new Error("Office not found");
           }

            updatedOffice.name = office.name;
            updatedOffice.street = office.street;
            updatedOffice.city = office.city;
            updatedOffice.zipcode = office.zipcode;
            updatedOffice.country = office.country;

            return updatedOffice.save();

        } catch (e) {
            console.log(e)
            throw e;
        }

    }
}
