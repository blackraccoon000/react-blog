## testing library を活用する設定やら

```js
{
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFiles": [
    "<rootDir>/src/tests/setupTests.js"
  ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ]
}
```

### setupFiles [array]#

デフォルトでは []

テスト環境を設定するためのコードを実行するモジュールへのパスのリストです。
各 setupFile は、テストファイルごとに一度ずつ実行されます。
各テストはそれぞれの環境で実行されるので、これらのスクリプトはテストコードを実行する直前にテスト環境で実行されます。
また、setupFiles は setupFilesAfterEnv の前に実行されることに注意してください。

### setupFilesAfterEnv [array]#

デフォルトは []

スイート内の各テストファイルが実行される前に
テストフレームワークを設定するためのコードを実行するモジュールへのパスのリストです。
setupFiles はテストフレームワークが環境にインストールされる前に実行されるので、
このスクリプトファイルは、テストフレームワークが環境にインストールされた直後に何らかのコードを実行する機会を提供します。

プロジェクトのルートディレクトリからの相対パスを指定したい場合は、
"<rootDir>/a-configs-folder "のように、パスの文字列の中に<rootDir>を入れてください。

例えば、Jest には、jasmine の API をモンキーパッチして動作する jasmine のプラグインがいくつか同梱されています。
もし、さらに多くの jasmine プラグインを追加したい場合(または、例えばプロジェクト全体のカスタム matcher が欲しい場合)は、
これらのモジュールで追加することができます。

注： setupTestFrameworkScriptFile は廃止され、setupFilesAfterEnv が採用されています。

setupFilesAfterEnv の配列の例を、jest.config.js に示します。

[jest setting](https://jestjs.io/ja/docs/configuration#setupfiles-array)

### 個人的解釈

要は、各ファイルに import するのを省略するのが setupFileAfterEnv で、
それ以前にシステムとして組み込むのが setupFiles なのかな、と。

`"@testing-library/jest-dom/extend-expect"`これがないと、
条件の設定が面倒、というか、testing-library を活用するメリットが薄くなる。

[testing-library/jest-dom](https://github.com/testing-library/jest-dom)
[testing-library/user-event](https://github.com/testing-library/user-event)

### .toBeInTheDocument

[toBeInTheDocument](https://github.com/testing-library/jest-dom#tobeinthedocument)

`expect(screen()).toBeInTheDocument()`のような形で使う。

Sample: Header.test.js

```js
it('navBarFlagButtonが描画されていること、Click後にNavMenuが描画されることを確認', () => {
  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId('navBarFlagButton'), leftClick);
  expect(screen.getByTestId('navMenuBar')).toBeInTheDocument();
  expect(wrapper.container).toMatchSnapshot();
});
```

[toHaveAttribute](https://github.com/testing-library/jest-dom#tobeinthedocument)
これにより、与えられた要素が属性を持っているかどうかをチェックすることができます。また、オプションとして、expect.stringContaining/expect.stringMatching を使って、その属性が特定の期待値や部分一致を持つかどうかをチェックすることもできます。

```js
<button data-testid="ok-button" type="submit" disabled>
  ok
</button>;

const button = getByTestId('ok-button');

expect(button).toHaveAttribute('disabled');
expect(button).toHaveAttribute('type', 'submit');
expect(button).not.toHaveAttribute('type', 'button');

expect(button).toHaveAttribute('type', expect.stringContaining('sub'));
expect(button).toHaveAttribute('type', expect.not.stringContaining('but'));
```
