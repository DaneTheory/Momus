import util from 'util'

import Constants from '../Constants'


class BaseError extends Error {
  constructor(message,status,errors,stack) {
    super(message)

    // this.constructor = BaseError
    // this.__proto__   = BaseError.prototype

    this.name = this.constructor.name
    this.type = this.constructor
    this.identity = Constants.identity
    this.message = (message || Constants.msg)
    this.kind = (null || Constants.kind)
    this.code = (null || Constants.code)
    this.id = (null || Constants.id)
    this.isPublic = (null || Constants.isPublic)
    this.timecode = new Date()  // TODO: Replace with better universal UNIX solution
    this.MomusError = true
    this.isOperational = true
    this.errors = []

    // this.stack

    // console.log(util.inspect(this.type()));
    // Error.captureStackTrace(this, BaseError)
    Error.captureStackTrace(this, this.constructor)

    this.stack

    // this.stack = this.stack
    //
    // this.raw = util.inspect(this, { depth: null })
  }
}


export default BaseError
