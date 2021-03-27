import React from "react"
import { shallow } from "enzyme"
import Dashboard from "../../components/Dashboard"

let wrapper

beforeEach(()=>{
  wrapper = shallow(<Dashboard/>)
})

it("should render Dashboard components",() => {
  expect(wrapper).toMatchSnapshot()
})