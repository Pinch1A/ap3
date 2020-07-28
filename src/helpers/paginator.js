export const paginator = ({ items, page = 1, perPage = 20 }) => {
  if (items === null || items === undefined) return null
  const offset = (page - 1) * perPage,
    paginatedItems = items.slice(offset).slice(0, perPage),
    totalPages = Math.ceil(items.length / perPage)
  return {
    page,
    perPage,
    prePage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    totalItems: items.length,
    totalPages,
    data: paginatedItems,
  }
}
