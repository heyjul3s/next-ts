import Joi from 'joi';
import { validationRegex } from './formRegex';

export const validator = {
  text(fieldName: string): Joi.StringSchema {
    return Joi.string()
      .required()
      .messages({
        'string.empty': `"${fieldName}" cannot include white space"`,
        'string.base': `"${fieldName}" should be a type of "text"`,
        'any.required': `"${fieldName}" is a required field`
      });
  },

  email(fieldName = 'Email'): Joi.StringSchema {
    return Joi.string()
      .trim()
      .email({ tlds: false })
      .required()
      .messages({
        'string.empty': `"${fieldName}" cannot include white space"`,
        'string.email': `"${fieldName}" must be a valid e-mail address`,
        'any.required': `"${fieldName}" is a required field`
      });
  },

  password(fieldName = 'Password'): Joi.StringSchema {
    return Joi.string()
      .pattern(validationRegex.password)
      .trim()
      .required()
      .messages({
        'string.empty': `"${fieldName}" cannot include white space"`,
        'string.pattern.base': `"${fieldName}" must be at least 6 characters with at least 1 uppercase and 1 special character`,
        'any.required': `"${fieldName}" is a required field`
      });
  },

  confirmPassword(
    ref: string,
    refFieldName: string,
    fieldName = 'Confirm Password'
  ): Joi.StringSchema {
    return Joi.string()
      .trim()
      .valid(Joi.ref(ref))
      .required()
      .messages({
        'any.valid': `"${refFieldName}" and "${fieldName}" fields must match`,
        'string.empty': `"${fieldName}" cannot include white space"`,
        'any.required': `"${fieldName}" is a required field`
      });
  },

  recaptcha(): Joi.StringSchema {
    return Joi.string().required().messages({
      'any.required': 'Please verify that you are not a robot'
    });
  }
};
