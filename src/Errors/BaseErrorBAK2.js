import util from 'util'


// --
// * type: I am the type of error being thrown.
// * message: I am the reason the error is being thrown.
// * detail: I am an explanation of the error.
// * extendedInfo: I am additional information about the error context.
// * errorCode: I am a custom error code associated with this type of error.
// --
const BaseError = (settings,implementationContext) => {
  settings = (settings || {});
  this.name = "BaseError";
  this.type = (settings.type || "API");
  this.message = (settings.message || "An error occurred.");
  this.detail = (settings.detail || "");
  this.extendedInfo = (settings.extendedInfo || "");
  this.errorCode = (settings.errorCode || "");
  this.isMomusError = true;

  Error.captureStackTrace(this, (implementationContext || BaseError));
}

util.inherits(BaseError, Error);


export default BaseError
