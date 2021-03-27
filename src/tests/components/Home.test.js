import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import Home from "../../components/Home"

let wrapper,history

beforeEach(() => {
  history = { push:jest.fn() }
  wrapper = render(
    <Home history={history}/>
  )
})

it("Home ComponentのSnapshot", () => {
  expect(wrapper.container).toMatchSnapshot()
})

it("homeDisplayが描画されていることを確認", () => {
  expect(screen.getByTestId('homeDisplay')).toBeInTheDocument()
})

it("homeToDashboardButtonが描画されていること、Clickできることを確認", () => {
  const leftClick = { button: 0 }
  userEvent.click(screen.getByTestId('homeToDashboardButton'), leftClick)
  expect(history.push).toHaveBeenLastCalledWith("/dashboard")
})