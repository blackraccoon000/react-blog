import React from "react"
import { shallow, render } from "enzyme"
import Header from "../../components/Header"

let wrapper, onClickBtn

beforeEach(()=>{
  onClickBtn = jest.fn()
  wrapper = shallow(<Header onClickBtn={onClickBtn}/>)
})

it("should render Header Components", () => {
  expect(wrapper).toMatchSnapshot()
})

// it("should Header Components Button Click for flag false => true", () => {
//   expect(wrapper.find("button").length).toBe(1)
//   expect(wrapper.state("flag")).toBe(false)
//   wrapper.find("button").simulate("click")
//   expect(wrapper.state("flag")).toBe(true)
//   expect(wrapper.find("NavMenu").length).toBe(1)
//   expect(wrapper).toMatchSnapshot()
// })