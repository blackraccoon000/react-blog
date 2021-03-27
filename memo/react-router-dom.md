(マウントを使用する場合：React17 で未定義のプロパティ「子」を読み取ることができません
＃2462)[https://github.com/enzymejs/enzyme/issues/2462]
enzyme はまだ React17 と互換性がありません-React16 アダプターを使用しているため、react16 が必要です。

(enzyme mount)[https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/mount.html]

(history.push がルーターでコンポーネントをレンダリングしない
)[https://github.com/ReactTraining/react-router/issues/7415]
$ yarn list history
yarn list v1.13.0
warning Filtering by arguments is deprecated. Please use the pattern option instead.
├─ history@5.0.0
├─ react-router-dom@5.2.0
│ └─ history@4.10.1
└─ react-router@5.2.0
└─ history@4.10.1

$ yarn add history@4.10.1

```js
// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { MemoryRouter } from "react-router-dom"
// import AppRouter from "../../routers/AppRouter"
// // import Header from "../../components/Header"
// // import Home from "../../components/Home"
// // import Dashboard from "../../components/Dashboard"

// describe('routes using memory router', () => {

//   it('should show Home component for / router (using memory router)', () => {
//     const component = mount(
//       <MemoryRouter initialEntries={["/"]}>
//         <AppRouter/>
//       </MemoryRouter>
//     );
//     console.log(component)
//   })

//   it('should show No match component for route dashboard', () => {
//     const component = mount(
//       <MemoryRouter initialEntries="{['/dashboard']}">
//         <AppRouter/>
//       </MemoryRouter>
//     );
//     console.log(component)
//   })

// })

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import { shallow, render, mount } from "enzyme"
import { render, screen } from '@testing-library/react';
import AppRouter from '../../routers/AppRouter';
import { createBrowserHistory } from 'history';

import Header from '../../components/Header';
import Home from '../../components/Home';
import Dashboard from '../../components/Dashboard';

jest.mock('../../components/Header');
jest.mock('../../components/Home');
jest.mock('../../components/Dashboard');

let wrapper;

// Sample: https://reactrouter.com/web/api/MemoryRouter

it('should AppRouter Routing for Home Component', () => {
  // const history = createBrowserHistory();

  Header.mockImplementation(() => (
    <div className="header-title">Header Mock Event</div>
  ));
  Home.mockImplementation(() => (
    <div className="home-title">Home Mock Event</div>
  ));
  Dashboard.mockImplementation(() => (
    <div className="dashboard-title">Dashboard Mock Event</div>
  ));

  wrapper = render(
    <MemoryRouter initialEntries={['/']}>
      <AppRouter />
    </MemoryRouter>
  );
  // console.log(wrapper)
  console.log(screen.getByText('Home Mock Event'));
  // expect(screen.getByText("Home Mock Event"))
});

// it("should AppRouter Routing for Dashboard Component",() => {
//   wrapper = mount(
//     <MemoryRouter initialEntries={["/dashboard"]}>
//       <AppRouter/>
//     </MemoryRouter>
//   )
//   // expect(wrapper).toMatchSnapshot()
// })

// 参考
// https://javascript.plainenglish.io/testing-react-router-with-jest-bc13d367bad

// 実装
// まず最初に、Router がルーティングするすべてのコンポーネントのモジュールをモックする必要があります。
// コンポーネントを含むモジュールをインポートし、jade.mock関数を使用してモック化する必要があります。

// import Header from "../../components/Header"
// import Home from "../../components/Home"
// import Dashboard from "../../components/Dashboard"

// jest.mock("../../components/Header")
// jest.mock("../../components/Home")
// jest.mock("../../components/Dashboard")

// その後、具体的な例のテストを書き始めることができます。
// 最初のテストでは、ルートが指定されていない場合（ルートが「/」の場合）に
// HomePageコンポーネントとPageHeaderがレンダリングされるかどうかをチェックします。
// このテストを準備する最初のステップは、HomePageとPageHeaderの戻り値を、
// 後で検索できるようにハードコードされた文字列の値にモックすることです。
// 両方に同じ値を使ってしまうと、テストが無効になってしまうので注意が必要です。

// test("Should render page header and HomePage on default route", () => {
//   // Arrange
//   Home.mockImplementation(() => <div>Home</div>);
//   Dashboard.mockImplementation(() => <div>Dashboard</div>);
// }

// mockImplementationの呼び出しがテスト内で行われていることと、
// ハードコードされた文字列がdivで囲まれていることに注意してください。
// この2つはソリューションが正しく動作するために必要であり、その理由は後のセクションで説明します。
// モックの配置が完了したら、今度はrender関数を呼び出します。
// Appコンポーネントにルートを渡すために、MemoryRouterを使いました。
// MemoryRouter には initialEntries というパラメータがあり、
// 初期ルートの配列を入力として受け取ります。
// ルートが与えられない場合、Appは空のパス「/」に使われているコンポーネントをレンダリングするはずです。
// 今回は、デフォルトのルートに対する動作をテストしたいので、MemoryRouter に何も渡す必要はありません。

// test("Should render page header and HomePage on default route", () => {
//   // Arrange
//   // Header.mockImplementation(() => <div className="header-title">Header Mock Event</div>)
//   // Home.mockImplementation(() => <div className="home-title">Home Mock Event</div>);
//   Dashboard.mockImplementation(() => <div className="dashboard-title">Dashboard Mock Event</div>);

//   // Act
//   wrapper = render(
//     <MemoryRouter initialEntries={["/dashboard"]}>
//       <AppRouter/>
//     </MemoryRouter>
//     // <MemoryRouter initialEntries={["/"]}>
//     //   <AppRouter/>
//     // </MemoryRouter>
//   );

//   // console.log(screen.getByText("Home Mock Event"))
//   console.log(screen.getByText("Dashboard Mock Event"))
//   // console.log(wrapper.text())
//   // expect(wrapper).toMatchSnapshot()
//   // expect()
//   // console.log(wrapper)
//   // Assert
//   // expect(screen.getByText("Home Mock Event")).toBeInTheDocument();
//   // expect(screen.getByText("Dashboard")).toBeInTheDocument();
// })

// 最後に、レンダリングされたドキュメントの中に、
// 先ほど設定した文字列を含む要素があることを確認することで、
// 正しいコンポーネントがレンダリングされたことを確認します。
```
