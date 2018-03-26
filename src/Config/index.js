import convict from 'convict'

import BaseSettings from './BaseSettings'


const Config = convict(BaseSettings).validate({allowed: 'warn'})


export default Config
