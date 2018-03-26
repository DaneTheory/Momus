import util from 'util'

import BaseError from './BaseError'


// --
// * type: I am the type of error being thrown.
// * message: I am the reason the error is being thrown.
// * detail: I am an explanation of the error.
// * extendedInfo: I am additional information about the error context.
// * errorCode: I am a custom error code associated with this type of error.
// --
const MomusError = (settings) => (new BaseError(settings, MomusError));


export default MomusError
