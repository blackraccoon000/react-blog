const squeezeFilters = (blogData, filters) => {
  const { text, sortBy, startDate, endDate, squeezeNum = "", sortOrder } = filters

  return blogData.filter((value,index) => {
    if(squeezeNum === "") {
      return true
    } else if(squeezeNum) {
      return index < squeezeNum
    }
  })
}

export default squeezeFilters