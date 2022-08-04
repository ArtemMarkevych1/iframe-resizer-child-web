import { getSetById } from "../utils";
import { mockSets } from "../__mocks__";

describe("getSetById test", () => {
  it("should return only unseen sets", () => {
    const expected = {
      id: 1,
      seen: false,
    };
    const res = getSetById(1, mockSets);
    expect(res).toEqual(expected);
  });

  it("should return nothing if there is no set with passed Id", () => {
    const res = getSetById(3, mockSets);
    expect(res).toBe(undefined);
  });
});
