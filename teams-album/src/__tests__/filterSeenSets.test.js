import { filterSeenSets } from "../utils";
import { mockSets } from "../__mocks__";

const mockAllSeenSets = [
  {
    id: 1,
    seen: true,
  },
  {
    id: 2,
    seen: true,
  },
];

describe("filterSeenSets test", () => {
  it("should return only unseen sets", () => {
    const expected = [
      {
        id: 1,
        seen: false,
      },
    ];
    const res = filterSeenSets(mockSets);
    expect(res).toEqual(expected);
  });

  it("should return empty array if all passed sets have been seen", () => {
    const res = filterSeenSets(mockAllSeenSets);
    expect(res).toEqual([]);
  });
});
