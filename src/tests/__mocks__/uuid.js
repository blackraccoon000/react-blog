// import { v4 as uuidv4, v4 } from "uuid"

const mock = jest.mock("uuid", () => {
  return {v4 : ()=> "some-short-v4-uuid-00"}
})

export default mock