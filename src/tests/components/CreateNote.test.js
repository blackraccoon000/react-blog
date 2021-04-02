import React from "react"
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CreateNote } from "../../components/CreateNote"

let onChange, onSubmit, wrapper

beforeEach(()=>{
  onChange = jest.fn()
  onSubmit = jest.fn()
  wrapper = render(<CreateNote
    onChange = {onChange}
    onSubmit = {onSubmit}
  />)
})

it("CreateNote Render", () => {
  expect(wrapper.container).toMatchSnapshot()
})

it("Generate title", () => {
  userEvent.type(wrapper.getByTestId('title'), 'Hello,World!')
  expect(wrapper.getByTestId('title')).toHaveValue('Hello,World!')
})

it("Generate note", () => {
  userEvent.type(wrapper.getByTestId('note'), 'Hello,{enter}World!')
  expect(wrapper.getByTestId('note')).toHaveValue('Hello,\nWorld!')
})