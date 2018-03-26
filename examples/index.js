import Momus from '../src';
import util from 'util'


// const instanceOfMomusRef = Momus().type
// const basicErr = Momus('Hey Im a basic Momus error')

const MomusDemo = () => {
  // console.log('MOMUS: God of RESTful API Errors!');
  // console.log(`_________________________________`);
  // console.log(``);

  // console.log(require('util').inspect(process.env.SERVICE_NAME))
  // console.log(util.inspect(Momus.get('serviceIdentity')))

  // console.log(process.env);

  // const momus = Momus(err, true)


  // try {
  //
  //   Momus(err)
  //
  // } catch (err) {
  //
  //   if (err instanceof Error) {
  //     console.log(`error object passed in is instance of Error`)
  //     console.error(err)
  //   }
  //
  //   else if (err instanceof EnrichedError) {
  //     console.log(`error object passed in is instance of Momus`)
  //     console.error(err)
  //   }
  //
  //   else {
  //     console.error(`error object passed isnt an instance of anything.... uh ohhhh`)
  //     throw new Error(err)
  //   }
  //
  //   // return err
  // }

  // let tempErr
  //
  // if (err instanceof Error) {
  //   console.log('error object passed through is an instance of Error. Now for custom checks...')
  //
  //   // const momus = Momus(err)
  //
  //   // console.log(util.inspect(err))
  //
  //   if (err === Momus) {
  //     console.log('error object passed thorugh is has a constructor equal to MomusError')
  //     tempErr = err
  //   }
  //   else {
  //     console.log('error object passed through is ONLY an instance of Error')
  //     tempErr = err
  //   }
  // }
  // else {
  //   console.log('error object didnt get recognized... as any Errors... uh ohhhh')
  //   tempErr = err
  // }
  //
  // return tempErr

  // const basicErr = Momus('Hey Im a basic Momus error', 533);


  try {
    // console.log(basicErr);
    throw Momus('uh looky an error', { ok: 'deal'})
  }
  catch (error) {
    // console.log(error)
    Momus(error)
  }
}

// console.log(util.inspect(instanceOfMomusRef, { depth: null }))
console.log(util.inspect(MomusDemo(), { depth: null }))


// const exampleErr = new Error('Hey look a message wow!')

// console.log(util.inspect(basicErr));

// console.log(Momus);
// console.log(util.inspect(Momus('Hey Im an basic error example')))
// console.log(util.inspect(Momus('Hey Im an basic error example') instanceof instanceOfMomusRef))
