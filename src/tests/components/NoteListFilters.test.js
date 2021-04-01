import React from "react"
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import { NoteListFilters } from "../../components/NoteListFilters"
import filters from "../fixtures/sampleFilters"

let wrapper, inputFilter, selectValueFilter, inputSqueezeFilter

beforeEach(()=>{
  inputFilter = jest.fn()
  selectValueFilter = jest.fn()
  inputSqueezeFilter = jest.fn()
  wrapper = render(<NoteListFilters
    inputFilter={inputFilter}
    selectValueFilter={selectValueFilter}
    inputSqueezeFilter={inputSqueezeFilter}
    filters={filters}
  />)
})

afterEach(()=>{
  cleanup
})

it("NoteListFilters Render", () => {
  expect(wrapper.container).toMatchSnapshot()
})

describe("Test ID find textFilter",()=>{
  it("textFilter to Be in the Document", () => {
    expect(screen.getByTestId("textFilter")).toBeInTheDocument()
  })
  it("textFilter to have attribute default value", () => {
    expect(screen.getByTestId("textFilter")).toHaveAttribute("value","filtersText")
  })
})

describe("Test ID find dataOrText",()=>{
  it("dataOrText to Be in the Document", () => {
    expect(screen.getByTestId("dataOrText")).toBeInTheDocument()
  })
  it("dataOrText to have attribute default value", () => {
    expect(screen.getByTestId("dataOrText")).toHaveDisplayValue("date")
  })
  /**
   * select の内容を変更するテストを書きたかったが、失敗した。
   */
  // it("dataOrText select value change Testing", () => {
    // console.log(wrapper.getByDisplayValue("date"))
    // fireEvent.change(wrapper.getByDisplayValue("date"),{ target: { value: 'text' } })
    // expect(wrapper.getByTestId("dataOrText")).toHaveDisplayValue("text")
  // })
})

describe("Test ID find ascOrDes",()=>{
  it("ascOrDes to Be in the Document", () => {
    expect(screen.getByTestId("ascOrDes")).toBeInTheDocument()
  })
  it("ascOrDes to have attribute default value", () => {
    expect(screen.getByTestId("ascOrDes")).toHaveDisplayValue("ascending")
  })
})
