const forEach = ( items, callback ) => {
  for (let index = 0; index < items.length ; index++ ) {
    callback(items[index])
  }
}

it("forEach Test",()=>{
  const mockCallback = jest.fn(x => 42 + x)
  forEach([0,1],mockCallback)

  // console.log(mockCallback.mock)
  expect(mockCallback.mock.calls.length).toBe(2)

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
})

// test("test",() => {
//   function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//       callback(items[index]);
//     }
//   }

//   const mockCallback = jest.fn(x => 42 + x);
//   forEach([0, 1], mockCallback);

//   // The mock function is called twice
//   expect(mockCallback.mock.calls.length).toBe(2);

//   // The first argument of the first call to the function was 0
//   expect(mockCallback.mock.calls[0][0]).toBe(0);

//   // The first argument of the second call to the function was 1
//   expect(mockCallback.mock.calls[1][0]).toBe(1);

//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(42);
// })

it("myMock test",()=>{
  const myMock = jest.fn();

  // console.log("myMock1:",myMock.mock)
  // console.log("呼ばれた回数:",myMock.mock.calls.length)
  const a = new myMock();
  // console.log(myMock.mock.instances[0] === a) // true
  // console.log("呼ばれた回数:",myMock.mock.calls.length) // １回目newされたとき
  // console.log("呼ばれた回数:",myMock.mock.calls[0][0]) // 引数なし
  // console.log("myMock2:",myMock.mock)
  const b = {};
  // console.log(myMock.mock.instances[1] === b) // false
  const bound = myMock.bind(b);
  // console.log(myMock.mock.instances[1] === b) // false
  // console.log("myMock3:",myMock.mock)
  bound();
  // console.log(myMock.mock.instances[1] === b) // true
  // console.log("呼ばれた回数:",myMock.mock.calls.length) // ２回目bound呼び出し
  // console.log("呼ばれた回数:",myMock.mock.calls[1][0]) // 引数なし

  // console.log(myMock.mock.instances[0]);
  // > [ <a>, <b> ]
})

// *** 下記、未テスト

// it("mock return value", () => {
//   const myMock = jest.genMockFunction();
//   // console.log( myMock() );

//   myMock
//     .mockReturnValueOnce(10)
//     .mockReturnValueOnce('x')
//     .mockReturnValue(true);

//   console.log(myMock(), myMock(), myMock(), myMock(), myMock());
// })