// function sayHi() {
//   return 'hi';
//   // return 'world';
// }

// const result = sayHi();
// console.log(result);

//*** */

// function* sayHiGenerator() {
//   yield 'hola';
//   yield 'a';
//   yield 'todo';
//   yield 'el';
//   yield 'mundo';
// }

// const resultGenerator = sayHiGenerator();


// console.log(resultGenerator.next());
// console.log(resultGenerator.next());
// console.log(resultGenerator.next());

//*** */

// for (const iterator of resultGenerator) {
//   console.log(iterator);
// }

//*** */

function* newGenerator() {
  yield 'something';
  const final = yield 'give me value'
  return final;
}

const newGeneratorIt = newGenerator();

console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next());
console.log(newGeneratorIt.next('custom value'));