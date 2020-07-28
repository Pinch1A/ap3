import React from 'react'
import DropdownListWrap from './DropdownListWrap'
import styled from 'styled-components'
import { ChevronDown } from '../assets/icons'

export const Flag = styled.img`
  width: 17px;
  height: 12px;
  margin-right: 10px;
`

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 432px;
`
const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-color: ${(props) => (props.isOpen ? '#1300cb' : '#decec8')};
  padding: 10px 20px;
  border-radius: 6px;
  color: #777;
`
DropdownHeader.displayName = 'DropdownHeader'

const Input = styled.input`
  border: none;
  height: 20px;
  width: 100%;
  outline: none;
`

const Dropdown = ({
  headerTitle,
  data,
  isOpen,
  loadMore,
  hasMore,
  setOpen,
  toggleList,
  selected,
  setSelected,
  setSearchInput,
}) => {
  const handleOnChange = (val) => {
    setSelected({ name: '', flag: null })
    setSearchInput(val.target.value)
    setOpen(true)
  }

  const valueInput = selected.name !== '' ? selected.name : headerTitle

  return (
    <FlexWrap>
      <DropdownHeader tabIndex="0" isOpen={isOpen} onClick={() => toggleList()}>
        {selected.flag && <Flag src={selected.flag} alt={selected.name} />}
        <Input value={valueInput} placeholder="Select" type="text" onChange={handleOnChange} />
        <ChevronDown />
      </DropdownHeader>
      {isOpen && (
        <DropdownListWrap
          loadMore={loadMore}
          hasMore={hasMore}
          data={data}
          setSelected={setSelected}
          selected={selected}
          setOpen={setOpen}
        />
      )}
    </FlexWrap>
  )
}

export default Dropdown
