const matchFilters = (blogData, filters) => {
  const { text, sortBy, startDate, endDate, squeezeNum = null, sortOrder } = filters

  return blogData.filter(blog => {
    const startDateMatch = typeof startDate !== "number" || blog.createdAt >= startDate
    const endDateMatch = typeof endDate !== "number" ||  blog.createdAt <= endDate
    const titleAndNote = blog.title.concat(" ",blog.note)
    const textMatch = titleAndNote.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  })
}

export default matchFilters