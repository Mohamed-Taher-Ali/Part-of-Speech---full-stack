const Joi = require('joi');


exports.rankValidate= (body) => {
    const schema = Joi.object({
        score: Joi.number().min(0).max(100).required(),
    });

    return schema.validate(body);
}

exports.getWordsValidate = (params) => {
    const schema = Joi.object({
        count: Joi.number().integer().min(0).optional(),
    });

    return schema.validate(params);
}
