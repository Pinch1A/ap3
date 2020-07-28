import DropdownListWrap from './DropdownListWrap'
import React from 'react'
import { shallow, mount } from 'enzyme'

const props = {
  data: [
    { name: 'test1', flag: 'flag1' },
    { name: 'test2', flag: 'flag2' },
  ],
  setSelected: jest.fn(),
  setOpen: jest.fn(),
  selected: { name: '', flag: null },
  loadMore: jest.fn(),
  hasMore: false,
}

describe('<DropdownListWrap>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<DropdownListWrap {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
  it(`render ${props.data.length} items`, () => {
    const wrapper = mount(<DropdownListWrap {...props} />)
    const itemList = wrapper.find('Item')
    expect(itemList).toHaveLength(2)
  })
  it(`render with hasMore button`, () => {
    const newProps = { ...props, hasMore: true }
    const wrapper = mount(<DropdownListWrap {...newProps} />)
    const HasMore = wrapper.find('button')
    expect(HasMore).toBeDefined()
  })
  it(`render with hasMore button and trigger loadMore function`, () => {
    const newProps = { ...props, hasMore: true }
    const wrapper = mount(<DropdownListWrap {...newProps} />)
    const HasMore = wrapper.find('button')
    expect(HasMore).toBeDefined()
    HasMore.simulate('click')
    expect(props.loadMore.mock.calls.length).toEqual(1)
  })
})
