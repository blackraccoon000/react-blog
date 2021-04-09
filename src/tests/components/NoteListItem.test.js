import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NoteListItem from "../../components/NoteListItem"
import blogNoteSample from "../fixtures/blogNoteSample"

let wrapper

it("NoteListItem Render", () => {
  const sample = blogNoteSample[0]
  wrapper = render(
    <MemoryRouter>
      <NoteListItem {...sample} />
    </MemoryRouter>
  )
  expect(wrapper.container).toMatchSnapshot()
})