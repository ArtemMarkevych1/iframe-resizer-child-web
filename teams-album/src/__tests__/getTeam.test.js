import { getTeam } from "../utils";

const mockTeammates = [
  {
    id: 1,
    name: "NUMAN",
    team: "WEB TEAM",
    position: "SOFTWARE DEVELOPER",
  },
  {
    id: 2,
    name: "KUTLU",
    team: "MOBILE WEB TEAM",
    position: "TEAM LEAD",
  },
];

describe("getTeam test", () => {
  it("should return WEB TEAM teammates", () => {
    const expected = [
      {
        id: 1,
        name: "NUMAN",
        team: "WEB TEAM",
        position: "SOFTWARE DEVELOPER",
      },
    ];
    const res = getTeam(mockTeammates, "WEB TEAM");
    expect(res).toEqual(expected);
  });

  it("should return MOBILE WEB TEAM teammates", () => {
    const expected = [
      {
        id: 2,
        name: "KUTLU",
        team: "MOBILE WEB TEAM",
        position: "TEAM LEAD",
      },
    ];
    const res = getTeam(mockTeammates, "MOBILE WEB TEAM");
    expect(res).toEqual(expected);
  });
});
