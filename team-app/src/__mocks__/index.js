export const mockSets = [
    {
        id: 1,
        seen: false,
    },
    {
        id: 2,
        seen: true,
    },
];

const mockSetSetsAsSeen = jest.fn();
const mockSetId = 1;
export const mockSetSets = jest.fn((sets) => {
    return mockSetSetsAsSeen(mockSetId, sets);
});

const mockSetAvatar = jest.fn();
export const mockSetTeammates = jest.fn(([], {}) => {
    return mockSetAvatar([], {});
});

export const mockStickerSets = [
    {
        id: 1,
        seen: false,
        stickers: [
            {
                id: 5,
                name: "TULAY",
                team: "WEB TEAM",
                position: "SOFTWARE DEVELOPER",
                contact: "2 YIL",
                avatar:
                    "https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png",
            },
        ],
    },
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
        ],
    },
    {
        id: 3,
        seen: false,
        stickers: [
            {
                id: 9,
                name: "SERHAT",
                team: "WEB TEAM",
                position: "SR SOFTWARE DEVELOPER",
                contact: "8 AY",
                avatar:
                    "https://static.vecteezy.com/system/resources/previews/004/477/337/non_2x/face-young-man-in-frame-circular-avatar-character-icon-free-vector.jpg",
            },
        ],
    },
];

export const mockTeammates = [
    {
        id: 1,
        name: "AHMET",
        team: "WEB TEAM",
        position: "TEAM LEAD",
        contact: "10 YIL",
    },
    {
        id: 2,
        name: "FILIZ",
        team: "WEB TEAM",
        position: "SR PRODUCT OWNER",
        contact: "5 YIL",
    },
    {
        id: 3,
        name: "NUMAN",
        team: "WEB TEAM",
        position: "SOFTWARE DEVELOPER",
        contact: "5 YIL",
    },
    {
        id: 4,
        name: "MUSTAFA",
        team: "WEB TEAM",
        position: "SOFTWARE DEVELOPER",
        contact: "5 YIL",
    },
    {
        id: 5,
        name: "TULAY",
        team: "WEB TEAM",
        position: "SOFTWARE DEVELOPER",
        contact: "2 YIL",
    },
    {
        id: 6,
        name: "AYDIN",
        team: "WEB TEAM",
        position: "SR SOFTWARE DEVELOPER",
        contact: "8 AY",
    },
];
