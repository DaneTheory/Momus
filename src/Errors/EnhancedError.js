import PrettyError from 'pretty-error'
import util from 'util'

class EnhancedError extends Error {
  constructor(message, ...args) {
    super(...args);
    const pe = new PrettyError();

    const oldStackTrace = Error.prepareStackTrace;

    try {
      Error.prepareStackTrace = (err, structuredStackTrace) => structuredStackTrace;
      Error.captureStackTrace(this);

      this.name = this.constructor.name;
      this.message = message;
      this.isOperational = true;
      this.timecode = new Date();
      this.type = null;
      this.service = null;
      this.stack;


    // this.stack = stack
    // if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor.name)

    // const stk = Object.getOwnPropertyDescriptors(this).stack.value

    // console.log(util.inspect(Object.entries(this)));

    // console.log(util.inspect(Error));

    pe.start();
    // console.log(util.inspect(pe));




    pe.appendStyle({
    // we can use black, red, green, yellow, blue, magenta, cyan, white,
    // grey, bright-red, bright-green, bright-yellow, bright-blue,
    // bright-magenta, bright-cyan, and bright-white
    //
    // it understands paddings too!
    //padding: '0 1' // top/bottom left/right
    //
    // ... and a bullet character!
    // bullet: '"<bright-magenta>o</bright-magenta>"'
    // example: '"<bg-white><cyan> - </cyan></bg-white>"'
   'pretty-error > header > title > kind': {
     color: 'bright-red',
     background: 'none'
   },
   'pretty-error > header > colon': {
     color: 'bright-red'
   },
   'pretty-error > header > wrapper': {
     color: 'bright-blue'
   },
   'pretty-error > arguments': {
     color: 'bright-blue'
   },
   'pretty-error > trace > item': {
     marginLeft: 5,
     bullet: '"<bg-white><cyan> o </cyan></bg-white>"'
   },
   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'magenta'
   },

   'pretty-error > trace > item > header > what': {
      marginLeft: 1,
      color: 'bright-white'
   },

   'pretty-error > trace > item > footer > addr': {
      display: 'none'
   }
})

} finally {

  Error.prepareStackTrace = oldStackTrace;

}

  }
}


export default EnhancedError;
