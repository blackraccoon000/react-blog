// const testForEach = ( items, callback ) => {
//   for (let index = 0; index < items.length ; index++ ) {
//     callback(items[index])
//   }
// }
// const mockCallback = (x) => console.log(x)
// console.log(typeof mockCallback)
// // testForEach([0,1], mockCallback())


const greeting = name => {
  return ('Hello ' + name)
}

const processUserInput = callback => {
  const name = "aaaa"
  return callback(name);
}

console.log(processUserInput(greeting))

