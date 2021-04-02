const sortFilters = (blogData, filters) => {
  const { text, sortBy, startDate, endDate, squeezeNum = null, sortOrder } = filters

  return [...blogData].sort((a,b)=>{
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
}

export default sortFilters