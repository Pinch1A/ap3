import DropdownItem from './DropdownItem'
import React from 'react'
import { shallow, mount } from 'enzyme'

const props = {
  name: 'Select',
  flag: 'test',
  isSelected: false,
  setSelected: () => jest.fn(),
}

describe('<DropdownItem>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<DropdownItem {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('setSelected function is called on item click', () => {
    const mockSetSelected = jest.fn()

    const props = {
      name: 'test',
      flag: 'test-flag',
      isSelected: false,
      setSelected: mockSetSelected,
    }

    const wrapper = mount(<DropdownItem {...props} />)
    const item = wrapper.find('Item')
    item.simulate('click')
    expect(props.setSelected.mock.calls.length).toEqual(1)
  })
})
