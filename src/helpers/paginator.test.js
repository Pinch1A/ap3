import { paginator } from './paginator'

describe('Paginator', () => {
  it('returns null if list is not passed', () => {
    const executed = paginator({ items: null })
    expect(executed).toBeNull()
  })
  it('returns empty data if passed an empty list', () => {
    const { data, page, totalItems, totalPages } = paginator({ items: [] })
    expect(data).toEqual([])
    expect(page).toEqual(1)
    expect(totalItems).toEqual(0)
    expect(totalPages).toEqual(0)
  })
  it('returns first page if page is not passed', () => {
    const testList = ['1', '2', '3', '4']
    const perPageTest = 2
    const page1expected = ['1', '2']
    const { data, page, totalItems, totalPages } = paginator({
      items: testList,
      perPage: perPageTest,
    })
    expect(data).toEqual(page1expected)
    expect(page).toEqual(1)
    expect(totalItems).toEqual(testList.length)
    expect(totalPages).toEqual(testList.length / perPageTest)
  })
  it('returns item subset for specific page', () => {
    const testList = ['1', '2', '3', '4']
    const perPageTest = 2
    const page1expected = ['1', '2']
    const { data, page, totalItems, totalPages } = paginator({
      items: testList,
      perPage: perPageTest,
    })
    expect(data).toEqual(page1expected)
    expect(page).toEqual(1)
    expect(totalItems).toEqual(testList.length)
    expect(totalPages).toEqual(testList.length / perPageTest)
  })
  it('returns item subset for specific page', () => {
    const testList = ['1', '2', '3', '4']
    const perPageTest = 2
    const pageNum = 2
    const page2expected = ['3', '4']
    const { data, page, totalItems, totalPages } = paginator({
      items: testList,
      perPage: perPageTest,
      page: pageNum,
    })
    expect(data).toEqual(page2expected)
    expect(page).toEqual(pageNum)
    expect(totalItems).toEqual(testList.length)
    expect(totalPages).toEqual(testList.length / perPageTest)
  })
  it('returns item subset for specific page', () => {
    const testList = ['1', '2', '3', '4']
    const perPageTest = 2
    const { data } = paginator({
      items: testList,
      perPage: perPageTest,
      page: 3,
    })
    expect(data).toEqual([])
  })
})
