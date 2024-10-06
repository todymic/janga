import {body} from "express-validator";


const practitionerPayload = [
    body('firstname').notEmpty().isString().withMessage('firstname is empty'),
    body('lastname').notEmpty().isString().withMessage('firstname is empty'),
    body('email').notEmpty().isEmail().withMessage('email is empty or invalid'),
    body('office.name').notEmpty().isString().withMessage('firstname is required'),
    body('office.street').notEmpty().isString().withMessage('office street is required'),
    body('office.city').notEmpty().isString().withMessage('office city  is required'),
    body('office.zipcode').notEmpty().isString().withMessage('office zipcode  is required'),
    body('office.country').notEmpty().isString().withMessage('office country  is required'),
    body('specialities').notEmpty().withMessage('specialities is required'),
    body('specialities.*.name').notEmpty().isString().withMessage('specialities name is required'),
    body('specialities.*.slug').notEmpty().isString().withMessage('specialities slug is required')

];

export {practitionerPayload}
