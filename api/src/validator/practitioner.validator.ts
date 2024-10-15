import {body, query} from "express-validator";


export const practitionerPayload = [
    body('firstname')
        .notEmpty().withMessage('firstname is empty')
        .isString().withMessage('firstname must be a string'),
    body('lastname')
        .notEmpty().withMessage('lastname is empty')
        .isString().withMessage('lastname must be a string'),
    body('email')
        .notEmpty()
        .isEmail().withMessage('email is empty or invalid'),
    body('office')
        .notEmpty().withMessage('office is required'),
    body('office.name')
        .notEmpty()
        .isString().withMessage('office name is required'),
    body('office.street')
        .notEmpty().withMessage('office street is required')
        .isAlphanumeric().withMessage('office street must be a alphanumeric'),
    body('office.city')
        .notEmpty().withMessage('office city is required')
        .isString().withMessage('office city must be a string'),
    body('office.zipcode')
        .notEmpty().withMessage('office zipcode is required')
        .isString().withMessage('office zipcode must be a string'),
    body('office.country')
        .notEmpty()
        .isString().withMessage('office country  is required'),
    body('specialities')
        .notEmpty().withMessage('specialities is required'),
    body('specialities.*.name')
        .notEmpty().withMessage('specialities name is required')
        .isString().withMessage('specialities name is required'),
    body('languages')
        .notEmpty().withMessage('languages is required'),
    body('languages.*.name')
        .notEmpty().withMessage('languages name is required')
        .isString().withMessage('languages name must be a string'),
    body('languages.*.code')
        .notEmpty().withMessage('languages code is required')
        .isString().withMessage('languages code must be a string'),

];
