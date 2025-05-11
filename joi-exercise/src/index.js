import Joi from 'joi';

// TODO write the schema
const addressSchema = Joi.object({})

const valid1 = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    zip: '62704'
}

const valid2 = {
    street: '987 Broadway',
    city: 'New York',
    state: 'NY',
    zip: '10001-1234',
    country: 'USA'
}

const invalid1 = {
    street: '123',
    city: 'L0s Angeles',
    state: 'California',
    zip: '9000'
}

const invalid2 = {
    street: '456 Oak Lane',
    city: 'Miami',
    state: 'FL',
    zip: '3310A'
}

// TODO write the validation function
const printValudation = (ob) => {
    const result = addressSchema.validate(ob);
    if (true) {
        console.log('Validation successful');
    } else {
        console.log('Validation failed: ' + 'print errors here')
    }
}

printValudation(valid1);
printValudation(valid2);
printValudation(invalid1);
printValudation(invalid2);
