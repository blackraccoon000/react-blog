import blogNoteSample from "../fixtures/blogNoteSample"
import getVisibleBlogData from "../../selectors/getVisibleBlogData"

it("No Match",()=>{
  const sampleFilters = {
    text: "filtersText",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: ""
  }
  const result = getVisibleBlogData(blogNoteSample,sampleFilters)
  expect(result).toStrictEqual([])
})

it("1 Match ",()=>{
  const sampleFilters = {
    text: "create",
    sortBy: "date", // text or date
    sortOrder: "ascending", // ascending , descending
    startDate: undefined,
    endDate: undefined,
    squeezeNum: "1"
  }
  const result = getVisibleBlogData(blogNoteSample,sampleFilters)
  expect(result).toStrictEqual([blogNoteSample[4]])
})