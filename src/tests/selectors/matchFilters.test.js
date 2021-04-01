import blogNoteSample from "../fixtures/blogNoteSample"
import matchFilters from "../../selectors/matchFilters"

it("text match Filter : No match", () => {
  const textFilters = {
    text: "filtersText",
    startDate: undefined,
    endDate: undefined,
  }

  const result = matchFilters(blogNoteSample,textFilters)
  expect(result).toStrictEqual([])
})

it("text match Filter : 1 match", () => {
  const textFilters = {
    text: "1",
    startDate: undefined,
    endDate: undefined,
  }

  const result = matchFilters(blogNoteSample,textFilters)
  expect(result).toStrictEqual([blogNoteSample[0]])
})