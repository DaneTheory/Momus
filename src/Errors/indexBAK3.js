import util from 'util'
import httpStatus from 'http-status';
import expressValidation from 'express-validation';
// import EnhancedError from './EnhancedError';
// import APIError from './APIError';
// import BaseError from './BaseError'

import Config from '../Config';
import BaseError from './BaseError'
import MomusError from './MomusError'


const handler = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (Config().env !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
  res.end();
};
exports.handler = handler;

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
exports.converter = (err, req, res, next) => {
  let convertedError = err;

  if (err instanceof expressValidation.ValidationError) {
    convertedError = new APIError({
      message: 'Erro de Validação',
      errors: err.errors,
      status: err.status,
      stack: err.stack,
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  });
  return handler(err, req, res);
};


export const validateErrorType = (err) => {
  let validErrorObj = MomusError.NotFoundError.create("Some error", err)
  // let validErrorObj = MomusError(err)


  // console.log(util.inspect(validErrorObj.message));
  //
  // const response = {
  //   code: err.status,
  //   message: err.message || httpStatus[err.status],
  //   errors: err.errors,
  //   stack: err.stack,
  // };

  // if(err instanceof Error) {
    // validErrorObj = err
    // console.log(util.inspect(err.constructor.stackTraceLimit));

    // this.name = this.constructor.name;
    // this.message = message;
    // this.status = status;
    // this.isPublic = isPublic;
    // this.isOperational = true;
    // Error.captureStackTrace(this, this.constructor.name);


  // }


  // if (err instanceof expressValidation.ValidationError) {
  //   // validation error contains errors which is an array of error each containing message[]
  //   const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
  //   const error = new APIError(unifiedErrorMessage, err.status, true);
  //   return next(error);
  // } else if (!(err instanceof APIError)) {
  //   const apiError = new APIError(err.message, err.status, err.isPublic);
  //   return next(apiError);
  // }
  // return next(err);


  // console.log(util.inspect(validErrorObj));
  return validErrorObj
};
