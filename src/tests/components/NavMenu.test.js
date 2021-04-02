import React from "react"
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import NavMenu from "../../components/NavMenu"

let wrapper
const leftClick = { button: 0 }

beforeEach(() => {
  wrapper = render(
    <MemoryRouter>
      <NavMenu/>
    </MemoryRouter>
  )
})

it("should render NavMenu Components", () => {
  expect(wrapper.container).toMatchSnapshot()
})

it("testid: navMenuBarがあることの確認",()=>{
  expect(screen.getByTestId("navMenuBar")).toBeInTheDocument()
})

it("testid: HomeLinkがあることの確認",()=>{
  const getId = screen.getByTestId("HomeLink")
  expect(getId).toHaveAttribute('href', '/')
})

it("testid: DashboardLinkがあることの確認",()=>{
  const getId = screen.getByTestId("DashboardLink")
  expect(getId).toHaveAttribute('href', '/dashboard')
})

it("testid: CreateLinkがあることの確認",()=>{
  const getId = screen.getByTestId("CreateLink")
  expect(getId).toHaveAttribute('href', '/create')
})
