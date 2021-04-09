import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NoteList } from "../../components/NoteList"
import blogNoteSample from "../fixtures/blogNoteSample"

let wrapper

it("NoteList Render", () => {
  wrapper = render(
    <MemoryRouter>
      <NoteList blogData={blogNoteSample} />
    </MemoryRouter>
  )
  expect(wrapper.container).toMatchSnapshot()
})