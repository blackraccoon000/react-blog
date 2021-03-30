const getVisibleBlogData = (blogData, filters) => {
  const { text, sortBy, startDate, endDate, squeezeNum = null, sortOrder } = filters

  const matchFilters = blogData.filter(blog => {
    const startDateMatch = typeof startDate !== "number" || blog.createdAt >= startDate
    const endDateMatch = typeof endDate !== "number" ||  blog.createdAt <= endDate
    const titleAndNote = blog.title.concat(" ",blog.note)
    const textMatch = titleAndNote.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  })

  const sortFilters = matchFilters.sort((a,b)=>{
    if(sortBy === "date") {
      if(sortOrder === "ascending") {
        return a.createdAt < b.createdAt ? 1 : -1 // biggest -> smallest
      } else if(sortOrder === "descending") {
        return a.createdAt < b.createdAt ? -1 : 1 // smallest -> biggest
      }
    } else if(sortBy === "text") {
      if(sortOrder === "ascending") {
        return a.title < b.title ? 1 : -1 // biggest -> smallest
      } else if(sortOrder === "descending") {
        return a.title < b.title ? -1 : 1 // smallest -> biggest
      }
    }
  })

  const outputFilters = sortFilters.filter((value,index) => {
    if(squeezeNum === null) {
      return true
    } else if(squeezeNum) {
      return index < squeezeNum
    }
  })

  return outputFilters
  // return matchFilters
}

export default getVisibleBlogData