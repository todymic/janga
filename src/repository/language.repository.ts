import {Sequelize} from "sequelize-typescript";
import {Language} from "../model/Language";
export interface LanguageRepoInterface {

    save(reqLanguage: Language): Promise<void>;
    getById(LanguageId: number): Promise<Language|null>;
    getAll(): Promise<Language[] | null>;
    update(Language: Language): Promise<Language|null>;
    delete(LanguageId: number): Promise<void>;

}
export class LanguageRepository implements LanguageRepoInterface {

    async delete(LanguageId: number): Promise<void> {

        try {

            const language = await Language.findOne({ where: { id: LanguageId } });

            if(!Language) {
                throw new Error("Language not found");
            }

            await Language.destroy();

        }catch (e) {
            throw e;
        }
    }

    async getAll(): Promise<Language[] | null> {

        try {
            return await Language.findAll();
        } catch (e) {
            console.log(e)
        }
        return null;
    }

    async getById(LanguageId: number): Promise<Language | null> {
        try {
            const language = await Language.findOne({ where: { id: LanguageId } });

            if(!Language) {
                throw new Error("Language not found");
            }

            return language;
        } catch (e) {
            console.log(e)
            throw e;
        }
    }

    async save(reqLanguage: Language): Promise<void> {

        try {
            await Language.create({
                name: reqLanguage.name,
                code: reqLanguage.code
            })
        } catch (e) {
            console.log(e)
        }

    }

   async update(language: Language): Promise<Language> {
        try {
           const updatedLanguage = await Language.findOne({ where: { id: language.id } });

           if(!updatedLanguage) {
               throw new Error("Language not found");
           }


            updatedLanguage.name = language.name;
            updatedLanguage.code = language.code;

            return updatedLanguage;


        } catch (e) {
            console.log(e)
            throw e;
        }

    }
}