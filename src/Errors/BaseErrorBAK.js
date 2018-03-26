class BaseError extends Error {
  constructor(message, ...args) {
    this._message = message;
    // super(...args);

    Error.captureStackTrace(this, this.constructor.name);

    // this.message = message;
    this.name = this.constructor.name;
    this.isOperational = true;

    this.timecode = new Date();
    this.type = null;
    this.service = null;
    this.status = null;
    this.isPublic = null;

    console.log(`BASE ${this}`);
  }

}


export default BaseError;
