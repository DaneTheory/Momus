import Config from '../Config'


const GlobalVars = () => {
  const fallbackMsg = `Global fallback message. Swap out with a more relevant message. Prolly internal server error or emmiter...`
  const fallbackKind = `MomusError`
  const fallbackCode = 500
  const fallbackIsPublicBool  = false
  const fallbackID = `00000000`
  const fallbackServiceIdentity = () => Config.get('serviceIdentity')

  return {
    fallbackMsg,
    fallbackKind,
    fallbackCode,
    fallbackIsPublicBool,
    fallbackID,
    fallbackServiceIdentity: fallbackServiceIdentity()
  }

}


export default GlobalVars
