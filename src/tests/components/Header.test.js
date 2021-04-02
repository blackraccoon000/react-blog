import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Header from "../../components/Header"

let wrapper, onClickBtn

beforeEach(()=>{
  onClickBtn = jest.fn()
  wrapper = render(
    <MemoryRouter>
      <Header onClickBtn={onClickBtn}/>
    </MemoryRouter>
  )
})

it("should render Header Components", () => {
  expect(wrapper.container).toMatchSnapshot()
})

it("navBarFlagButtonが描画されていること、Click後にNavMenuが描画されることを確認", () => {
  const leftClick = { button: 0 }
  userEvent.click(screen.getByTestId('navBarFlagButton'), leftClick)
  expect(screen.getByTestId("navMenuBar")).toBeInTheDocument()
  expect(wrapper.container).toMatchSnapshot()
})