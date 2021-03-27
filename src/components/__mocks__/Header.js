/**
 * Headerは執筆時クラス化してある。
 * mock化にあたり関数化してあるので、そのつもりで。
 */

import React from "react"
const mock = jest.fn().mockImplementation(() => (<div>HeaderPage Use ManualMock</div>))
export default mock