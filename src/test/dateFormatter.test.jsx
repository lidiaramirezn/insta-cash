import { dateFormatter } from "../helpers/dateFormatter";

describe('', () => {
  test('', () => {
    const value = "2019-12-26T16:30:04.591Z";

    const formatter = dateFormatter(value);
    expect(formatter).toEqual("26 dic.");
  })
})