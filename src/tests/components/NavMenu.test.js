import React from "react"
import { shallow } from "enzyme"
import NavMenu from "../../components/NavMenu"

let wrapper

beforeEach(() => {
  wrapper = shallow(<NavMenu/>)
})

it("should render NavMenu Components", () => {
  expect(wrapper).toMatchSnapshot()
})