import { setAvatar } from "../utils";

const mockTeammates = [
  {
    id: 1,
    name: "AHMET",
    team: "WEB TEAM",
    position: "TEAM LEAD",
    contact: "10 YIL",
  },
  {
    id: 7,
    name: "BURCU",
    team: "WEB TEAM",
    position: "DEVELOPER IN TEST",
    contact: "2 YIL",
  },
];

const mockSet = {
  id: 2,
  seen: false,
  stickers: [
    {
      id: 1,
      name: "AHMET",
      team: "WEB TEAM",
      position: "TEAM LEAD",
      contact: "2 YIL",
      avatar: "https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg",
    },
    {
      id: 7,
      name: "BURCU",
      team: "WEB TEAM",
      position: "DEVELOPER IN TEST",
      contact: "2 YIL",
      avatar:
        "https://png.pngitem.com/pimgs/s/262-2620564_woman-office-worker-light-skin-tone-icon-mulher.png",
    },
  ],
};

const mockTeammates_1 = [
  mockTeammates[0],
  {
    ...mockTeammates[1],
    id: 2,
  },
];

describe("setAvatar test", () => {
  it("should find teammate and add avatar link", () => {
    const res = setAvatar(mockTeammates, mockSet);
    expect(res[0]).toHaveProperty("avatar");
    expect(res[1]).toHaveProperty("avatar");
  });

  it("should return initial data if teammate not found", () => {
    const res = setAvatar(mockTeammates_1, mockSet);
    expect(res[0]).toHaveProperty("avatar");
    expect(res[1]).not.toHaveProperty("avatar");
  });
});
