import { setSetsAsSeen } from "../utils";

const mockSet = [
  {
    id: 2,
    seen: false,
    stickers: [
      {
        id: 1,
        name: "AHMET",
        team: "WEB TEAM",
        position: "TEAM LEAD",
        contact: "2 YIL",
        avatar:
          "https://icon-library.com/images/avatar-icon/avatar-icon-27.jpg",
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
  },
];

describe("setSetsAsSeen test", () => {
  it("should change the seen prop to true", () => {
    const res = setSetsAsSeen(2, mockSet);
    expect(res[0]).toHaveProperty("seen", true);
  });

  it("should leave the seen prop unchanged", () => {
    const res = setSetsAsSeen(3, mockSet);
    expect(res[0]).toHaveProperty("seen", mockSet[0].seen);
  });
});
