import { formatterTwoDecimals } from "../helpers/twoDecimalsFormatter"

describe('Test to two decimals formatter', () => {

  test('Should be show formatted value', () => {
    const value = 45.7896
    const formatter = formatterTwoDecimals(value);

    expect(formatter).toEqual(45.79);
  })
})