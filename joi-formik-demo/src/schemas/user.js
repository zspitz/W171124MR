import Joi from 'joi'

export const newUserSchema = Joi.object({
    name: Joi.string().required().label("Name of user"),
    isAdmin: Joi.boolean().required()
})