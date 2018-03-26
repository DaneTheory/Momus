import util from 'util'

import Constants from '../Constants'
import BaseError from './BaseError'


class EnrichedError extends BaseError {
  constructor(...params) {
    super(...params)

    // console.log(util.inspect(this, { depth: null }))

    // this.name = this.constructor.name
    // this.serviceIdentity = Constants.service.identity
    // this.message = (message || Constants.msg)
    // this.type = (null || Constants.type)
    // this.code = (null || Constants.code)
    // this.isPublic = (null || Constants.isPublic)
    // this.errors = (null || [])
    //
    // this.BaseError = true
    // this.isOperational = true
    // this.id = null
    // this.timecode = new Date()    // TODO: Replace with better universal UNIX solution
    //
    // Error.captureStackTrace(this, (implementationContext || BaseError))
    // this.stack = super().stack
    //
    // this.raw = super()
  }
}


export default EnrichedError
