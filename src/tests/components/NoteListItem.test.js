import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import NoteListItem from "../../components/NoteListItem"
import blogNoteSample from "../fixtures/blogNoteSample"

let wrapper

it("NoteListItem Render", () => {
  const sample = blogNoteSample[0]
  wrapper = render(<NoteListItem {...sample} />)
  expect(wrapper.container).toMatchSnapshot()
})