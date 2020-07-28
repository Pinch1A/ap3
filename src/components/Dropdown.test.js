import Dropdown from './Dropdown'
import React from 'react'
import { shallow, mount } from 'enzyme'

const props = {
  headerTitle: 'Select',
  data: [],
  isOpen: false,
  loadMore: () => jest.fn(),
  hasMore: false,
  setOpen: () => jest.fn(),
  toggleList: () => jest.fn(),
  selected: { name: '', flag: null },
  setSelected: () => jest.fn(),
  setSearchInput: () => jest.fn(),
}

describe('<Dropdown>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Dropdown {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Shows items list when header is clicked', () => {
    let isOpen = false
    const mockToggle = jest.fn(() => !isOpen)
    const props = {
      headerTitle: 'Select',
      data: [{ name: 'test', flag: 'test-flag' }],
      isOpen,
      loadMore: () => jest.fn(),
      hasMore: false,
      setOpen: () => jest.fn(),
      toggleList: mockToggle,
      selected: { name: '', flag: null },
      setSelected: () => jest.fn(),
      setSearchInput: () => jest.fn(),
    }

    const wrapper = mount(<Dropdown {...props} />)
    const dropdownHeader = wrapper.find('DropdownHeader')
    expect(wrapper.props().isOpen).toEqual(false)
    dropdownHeader.simulate('click')
    expect(props.toggleList.mock.calls.length).toEqual(1)
  })
})
