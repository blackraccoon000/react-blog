import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import { NoteList } from "../../components/NoteList"
import blogNoteSample from "../fixtures/blogNoteSample"

let wrapper

it("NoteList Render", () => {
  wrapper = render(<NoteList blogData={blogNoteSample} />)
  expect(wrapper.container).toMatchSnapshot()
})