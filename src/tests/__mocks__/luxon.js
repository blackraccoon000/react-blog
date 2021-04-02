// const mock = jest.mock("luxon",()=>{
//   return { DateTime : {
//     now : () => {
//       return { ts: "1600000000000" }
//     }
//   }}
// })

// const mock = jest.mock("luxon", () => {
//   return jest.fn().mockImplementation(() => {
//     return { DateTime : {
//       now : () => {
//         return { ts: "1600000000000"}
//       }
//     }}
//   })
// })

const mock = jest.mock("luxon",() => {
  return { DateTime : {
      now : () => {
        return { ts: "1600000000000" }
      }
    }
  }
})

export default mock