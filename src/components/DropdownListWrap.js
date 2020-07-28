import React from 'react'
import DropdownItem from './DropdownItem'
import styled from 'styled-components'

const ListWrap = styled.div`
  -webkit-box-shadow: 10px 10px 35px -15px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 10px 10px 35px -15px rgba(0, 0, 0, 0.58);
  box-shadow: 10px 10px 35px -15px rgba(0, 0, 0, 0.58);
  border: 1px solid transparent;
  border-radius: 6px;
  margin: 3px 0;
  max-height: 550px;
  overflow: auto;
`
const HasMore = styled.button`
  border: none;
  width: 100%;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1px;
  outline: none;
`

const DropdownListWrap = ({ data, setSelected, setOpen, selected, loadMore, hasMore }) => {
  const selectCountry = (item) => {
    setSelected(item)
    setOpen(false)
  }

  return (
    <ListWrap>
      {data.map((item, index) => (
        <DropdownItem
          {...item}
          key={index}
          isSelected={selected.name === item.name}
          setSelected={selectCountry}
        />
      ))}
      {hasMore && <HasMore onClick={() => loadMore()}>Load More</HasMore>}
    </ListWrap>
  )
}
export default DropdownListWrap
