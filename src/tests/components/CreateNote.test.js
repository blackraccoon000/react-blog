import React from "react"
import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import CreateNote from "../../components/CreateNote"

it("CreateNote Render", () => {
  const wrapper = render(<CreateNote/>)
  expect(wrapper).toMatchSnapshot()
})