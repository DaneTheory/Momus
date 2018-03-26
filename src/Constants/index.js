import GlobalVars from './GlobalVars'


const Constants = () => {
  const gVars = GlobalVars()

  return {
    msg: gVars.fallbackMsg,
    kind: gVars.fallbackKind,
    code: gVars.fallbackCode,
    isPublic: gVars.fallbackIsPublicBool,
    identity: gVars.fallbackServiceIdentity,
    id: gVars.fallbackID
  }
}


export default Constants()
