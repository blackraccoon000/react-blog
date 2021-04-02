import matchFilters from "./matchFilters"
import sortFilters from "./sortFilters"
import squeezeFilters from "./squeezeFilters"

const getVisibleBlogData = (blogData, filters) => {
  const matchedAry = matchFilters(blogData, filters)
  const sortedAry = sortFilters(matchedAry,filters)
  return squeezeFilters(sortedAry, filters)
}

export default getVisibleBlogData