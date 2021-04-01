import blogNoteSample from "../fixtures/blogNoteSample"
import squeezeFilters from "../../selectors/squeezeFilters"

it("squeezeFilter : No change", () => {
  const squeeze = {
    squeezeNum: ""
  }
  const result = squeezeFilters(blogNoteSample,squeeze)
  expect(result).toStrictEqual(blogNoteSample)
})

it("squeezeFilter : 3 Hit", () => {
  const squeeze = {
    squeezeNum: "3"
  }
  const result = squeezeFilters(blogNoteSample,squeeze)
  expect(result).toStrictEqual([
    blogNoteSample[0],
    blogNoteSample[1],
    blogNoteSample[2]
  ])
})
