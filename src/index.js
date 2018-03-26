import util from 'util'

import MomusError from './Errors/MomusError'
import Config from './Config'
import Constants from './Constants'


class Momus extends MomusError {
  constructor(...params) {
    super(...params)
    const argz = [...arguments]
    this.args = util.inspect(argz)
  }
}

const MomusFactory = (data, debug) => {
  let flag
  let tmp

  const debugFlagSanitizer = (debug) => {
    if(typeof debug !== 'boolean') flag = false
    else { flag = true }
    const sanitizer = (debug) => {
      let sanatizedDebugFlag
      if(debug === 'true') sanatizedDebugFlag = true
      if(debug === 'false') sanatizedDebugFlag = false
      return sanatizedDebugFlag
    }
    return flag ? debug : sanitizer(debug)
  }

  if(debugFlagSanitizer(debug)) {
    console.debug(`                                                                                    `)
    console.warn(`MOMUS DEBUG MODE`)
    console.info(`Verbose output enabled. Make sure to disable debug mode before pushing to production!`)
    console.debug(`____________________________________________________________________________________`)
    if(Config.get('serviceIdentity') === null) console.warn(`IMPORTANT!:
        Service Identity value not configured by current application state!
        Fallback value set as null.
        Please set Service Identity value in NodeJS runtime env variable (i.e. process.env.SERVICE_IDENTITY)

          Additional Info: ${util.inspect(Config.getSchema().properties.serviceIdentity.doc)}`)
    console.debug(`                                                                        `)
    console.debug(`Current Environemt Mode: ${util.inspect(Config.get('env'))}`)
    console.debug(`Current Service Identity: ${util.inspect(Config.get('serviceIdentity'))}`)
    console.debug(`                                                                        `)
    console.debug(`Default Configuration Schema:
      ${util.inspect(Config.getSchema())}
    `)
  }

  // if(data instanceof Error) {
  //   console.log('err is an instance of Error')
  //   tempErr = new Momus(data)
  // }
  // else {
  //   console.log(`data arg not an Error?`)
  //   console.log(typeof data);
  //   let tmp = new Error(data)
  //   tempErr = new Momus(tmp)
  // }

  console.log(data);

  const momus = new Momus(data)

  if (momus instanceof Error) {
    if (momus instanceof Momus) {
      tmp = momus
    }
  }

  console.log(tmp)

  return tmp
}

export default MomusFactory
