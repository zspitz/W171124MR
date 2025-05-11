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
// ouput: Validation successful

printValudation(valid2);
// ouput: Validation successful

printValudation(invalid1);
/*output:
Validation failed:
"street" length must be at least 5 characters long
"city" with value "L0s Angeles" fails to match the required pattern: /^[A-Za-z\s]+$/
"state" length must be 2 characters long
"zip" with value "9000" fails to match the required pattern: /^\d{5}(-\d{4})?$/
*/

printValudation(invalid2);
/*output:
Validation failed:
"zip" with value "3310A" fails to match the required pattern: /^\d{5}(-\d{4})?$/
*/
