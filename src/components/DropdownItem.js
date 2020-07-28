import React from 'react'
import styled from 'styled-components'
import { Flag } from './Dropdown'

const Flex = styled.div`
  display: flex;
`

const Item = styled(Flex)`
  padding: 15px 30px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? '#f5f5f5' : '#fff')};
  color: ${(props) => (props.isSelected ? '#1300cb' : '#000')};
  &:hover {
    background: #f5f5f5;
  }
`
Item.displayName = 'Item'

const DropdownItem = ({ name, flag, isSelected, setSelected }) => {
  return (
    <Item onClick={() => setSelected({ name, flag })} isSelected={isSelected}>
      <Flag src={flag} alt={name} />
      <Flex>{name}</Flex>
    </Item>
  )
}

export default DropdownItem
