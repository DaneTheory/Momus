import BaseError from './BaseError'


class MomusError extends BaseError {
  constructor(message, ...params) {
    super(message, ...params)
  }
}


export default MomusError
