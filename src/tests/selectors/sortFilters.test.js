import blogNoteSample from "../fixtures/blogNoteSample"
import sortFilters from "../../selectors/sortFilters"

it("sortFilters date / ascending",()=>{
  const ascFilters = {
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
  }
  const ascArray = [
    blogNoteSample[4],
    blogNoteSample[3],
    blogNoteSample[2],
    blogNoteSample[1],
    blogNoteSample[0]
  ]
  const ascResultArray = sortFilters(blogNoteSample,ascFilters)
  expect(ascResultArray).toStrictEqual(ascArray)
})

it("sortFilters date / descending",()=>{
  const desFilters = {
    sortBy: "date", // text or date
    sortOrder: "descending", // ascending , descending
  }
  const desArray = [
    blogNoteSample[0],
    blogNoteSample[1],
    blogNoteSample[2],
    blogNoteSample[3],
    blogNoteSample[4]
  ]
  const desResultArray = sortFilters(blogNoteSample,desFilters)
  expect(desResultArray).toStrictEqual(desArray)
})

it("sortFilters text / ascending",()=>{
  const ascFilters = {
    sortBy: "text", // text or date
    sortOrder: "ascending", // ascending , descending
  }
  const ascArray = [
    blogNoteSample[2],
    blogNoteSample[1],
    blogNoteSample[0],
    blogNoteSample[3],
    blogNoteSample[4]
  ]
  const ascResultArray = sortFilters(blogNoteSample,ascFilters)
  expect(ascResultArray).toStrictEqual(ascArray)
})

it("sortFilters text / descending",()=>{
  const desFilters = {
    sortBy: "text", // text or date
    sortOrder: "descending", // ascending , descending
  }
  const desArray = [
    blogNoteSample[4],
    blogNoteSample[3],
    blogNoteSample[0],
    blogNoteSample[1],
    blogNoteSample[2]
  ]
  const desResultArray = sortFilters(blogNoteSample,desFilters)
  expect(desResultArray).toStrictEqual(desArray)
})