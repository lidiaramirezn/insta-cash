const { formatterAmount } = require("../helpers/amountFormatter");

describe('Test to amount formatter', () => {

  test('Should be show formatted amount', () => {
    const value = 1500;
    const currency = 'PEN';
    const formatter = formatterAmount(value, currency);

    expect(formatter).toEqual("S/ 1,500");
  })
})