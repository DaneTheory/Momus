import Momus from '../lib';

const example = Momus(100, 200);

const foo = () => {
  console.log(example);
  console.log('MOMUS: God of RESTful API Errors!');
  return example;
};

foo();
