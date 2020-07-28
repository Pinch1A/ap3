import React, { useState, useEffect, useRef } from 'react'
import { Dropdown } from './components'
import { paginator } from './helpers'
import styled from 'styled-components'
import useOnClickOutside from './hooks/useOnClickOutside'

const AppWrapper = styled.div`
  display: flex;
  padding: 20px;
`

const App = () => {
  const baseUrl = 'https://restcountries.eu/rest/v2/all?fields=name;flag'

  // Paginator wrapper : default = {}
  const [countryPaginator, setPaginator] = useState({})
  // keep the whole list immutable : default = []
  const [apiData, setApiData] = useState([])
  // DropdownList data : default = []
  const [visibleList, setList] = useState(countryPaginator.data || [])
  // Selected Item : default = empty contry obj
  const [selected, setSelected] = useState({ name: '', flag: null })
  // dropdown search input : default = ''
  const [searchInput, setSearchInput] = useState(selected.name)
  // is Dropdown open : default = false
  const [isOpen, setOpen] = useState(false)
  const toggleList = () => setOpen(!isOpen)

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setOpen(false))

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data)
        const paginated = paginator({ items: data })
        setPaginator(paginated)
        setList(paginated.data)
      })
    return () => {
      setApiData([])
      setList([])
    }
  }, [])

  useEffect(() => {
    const filtered = apiData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    const paginated = paginator({ items: filtered })
    setPaginator(paginated)
    setList(paginated.data)
    return () => {
      setList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  const loadMore = () => {
    const { nextPage } = countryPaginator
    if (nextPage) {
      const paginated = paginator({ items: apiData, page: nextPage })
      setPaginator(paginated)
      setList([...visibleList, ...paginated.data])
    }
  }

  return (
    <AppWrapper>
      <div ref={ref}>
        <Dropdown
          data={visibleList}
          hasMore={!!countryPaginator.nextPage}
          isOpen={isOpen}
          setOpen={setOpen}
          loadMore={loadMore}
          toggleList={toggleList}
          headerTitle={searchInput}
          setSearchInput={setSearchInput}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </AppWrapper>
  )
}

export default App
