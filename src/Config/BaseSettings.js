import util from 'util'
import * as Default from './default.json'


const BaseSettings = () => {
  let configObj

  if (!process.env.SERVICE_IDENTITY || !process.SERVICE_IDENTITY || !process.env.NODE_ENV) {
    const argFlagCheck1 = process.argv.filter(key => key === '--service-identity')
    const argValueCheck1 = process.argv.filter((key,i,arr) => key[i] === key[arr.indexOf('--service-identity') + 1]).toString()
    const argFlagCheck2 = process.argv.filter(key => key === '--env-mode')
    const argValueCheck2 = process.argv.filter((key,i,arr) => key[i] === key[arr.indexOf('--env-mode') + 1]).toString()


    // Validate Service Identity
    if(argFlagCheck1.length !== 0) {
      if(argValueCheck1 !== '') {
        configObj = Default.settings
        let msg = `Successfully loaded Service Identity!`
        if(process.env.NODE_ENV !== 'production') console.log(msg)
      } else {
        let msg = `Invalid value passed using --service-identity. Service Identity cannot be left blank.
          More Info:
            ${Default.settings.serviceIdentity.doc}
        `
        throw new Error(msg)
      }
    } else {
      configObj = Default.settings
      let msg = `Service Identity value not found in NodeJS runtime env (i.e. process.env.SERVICE_IDENTITY is undefined).
        No arguments passed when running application to set default Service Identity (i.e. --service-identity [YOUR_SERVICE_IDENTITY] was NOT called when running application).
        More Info On Initial Setup Requirements:
          ${Default.settings.serviceIdentity.doc}
      `
      if(process.env.NODE_ENV !== `production`) console.warn(msg)
    }


    // Validate Environemt
    if(argFlagCheck2.length !== 0) {
      if(argValueCheck2 !== '') {
        configObj = Default.settings
        let msg = `Successfully loaded Environment Mode`
        if(process.env.NODE_ENV !== 'production') console.log(msg)
      } else {
        let msg = `Invalid value passed using --env-mode. Environment cannot be left blank.
          More Info:
            ${Default.settings.env.doc}
        `
        throw new Error(msg)
      }
    } else {
      configObj = Default.settings
      let msg = `Environment variable value not found in NodeJS runtime env (i.e. process.env.NODE_ENV is undefined).
        No arguments passed when running application to set default Environment (i.e. --env-mode [YOUR_PREFERED_ENVIRONMENT] was NOT called when running application).
        More Info On Initial Setup Requirements:
          ${Default.settings.env.doc}
      `
      if(process.env.NODE_ENV !== `production`) console.warn(msg)
    }

  }

  return configObj
}


export default BaseSettings()
