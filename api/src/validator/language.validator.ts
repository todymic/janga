import {body, query} from "express-validator";


export const languagePayload = [
    body('name')
        .notEmpty().withMessage('name is empty')
        .isString().withMessage('name must be a string'),
    body('code')
        .notEmpty().withMessage('code is empty')
        .isString().withMessage('code must be a string')

];
