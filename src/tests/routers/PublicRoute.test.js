import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react'
import Header from "../../components/Header"
import Home from "../../components/Home"
import Dashboard from "../../components/Dashboard"
import PublicRoute from "../../routers/PublicRoute"

let wrapper

/**
 * importしたcomponentをmockに置き換える。
 */

jest.mock("../../components/Header")
jest.mock("../../components/Home")
jest.mock("../../components/Dashboard")

it("Homeが描画できているか", () => {
  /**
   * 関数コンポーネントならmock化できる。クラスコンポーネントだと何故できない？
   * https://javascript.plainenglish.io/testing-react-router-with-jest-bc13d367bad
   *
   * 関数コンポーネントのmock化は、
   * ① jest.mock("mock化したい関数やクラスのpath")
   * ② mockの実装、mockImplementationを活用したりする。
   * https://jestjs.io/ja/docs/mock-function-api#mockfnmockimplementationfn
   *
   * 関数時 本コード内のHomeやDashboardは、jest.mock()を実施した後、
   * Home.mockImplementation(() => <div>HomePageMock</div>)
   * でOK
   *
   * クラス時、本コード内のHeaderは、
   * クラス内のコンストラクタをモックする必要があるため、
   * 更に関数やオブジェクトを渡す必要がある。
   *
   * Header.mockImplementation(()=>({render:() => (<div>HeaderPageMock</div>)}))
   * ※一行の場合、()の数に注意
   * mock化し、mock内の返り値を関数化している場合にはクラス化する必要はない。
   *
   * ③ 下記例のように値を渡す場合にはもうひと工夫必要。
   * manual mockは初期時にinstance化されていないため、
   * propsに渡すことができないため、instance化されていないことを確認している。
   *
   * 無理やりやるのが嫌なら、下記のようにする。
   * Home.mockImplementation(() => <div>HomePageMock</div>)
   */

  expect(Home.mock.instances.length).toBe(0)
  wrapper = render(
    <MemoryRouter>
      <PublicRoute component={Home}/>
    </MemoryRouter>
  )
  expect(wrapper.container).toMatchSnapshot()
  expect(Home).toHaveBeenCalled()
})

it("Dashboardが描画できているか", () => {
  expect(Dashboard.mock.instances.length).toBe(0)
  wrapper = render(
    <MemoryRouter>
      <PublicRoute component={Dashboard}/>
    </MemoryRouter>
  )
  expect(wrapper.container).toMatchSnapshot()
  expect(Dashboard).toHaveBeenCalled()
})