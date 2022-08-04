import { render, fireEvent } from "@testing-library/react";
import { StickerSetWrapper } from "../pages/home/StickerSetWrapper";
import { mockStickerSets, mockSetSets, mockSetTeammates } from "../__mocks__";
import dateService from "../services/DateService";
import stickerSetService from "../services/StickerSetService";
import teammateService from "../services/TeammateService";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {
  return "";
});

const spyAddDate = jest.spyOn(dateService, "addDate");
const spyMarkAsSeen = jest.spyOn(stickerSetService, "markAsSeen");
const spyAddAvatar = jest.spyOn(teammateService, "addAvatar");

const stickerSetWrapper = ({ nonSeenSets, setSets, setTeammates }) => {
  return (
    <StickerSetWrapper
      nonSeenSets={nonSeenSets}
      setSets={setSets}
      setTeammates={setTeammates}
    />
  );
};

const testProps = {
  nonSeenSets: mockStickerSets,
  setSets: mockSetSets,
  setTeammates: mockSetTeammates,
};

describe("StickerSetWrapper", () => {
  spyAddDate.mockImplementation(() => Promise.resolve());
  spyMarkAsSeen.mockImplementation(() => Promise.resolve());
  spyAddAvatar.mockImplementation(() => Promise.resolve());

  it("should render component correctly", () => {
    const { getByText } = render(stickerSetWrapper(testProps));
    const title = getByText(/DAILY STICKER SETS/i);
    const subtitle = getByText(/YOU HAVE 3 STICKER SETS TO OPEN/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("should have 3 daily stickers set and mark one as seen after opening", () => {
    const { getAllByRole } = render(stickerSetWrapper(testProps));
    const btns = getAllByRole("button", { name: /open/i });
    expect(btns.length).toEqual(3);

    fireEvent.click(btns[0]);

    expect(spyAddDate).toHaveBeenCalled();
    expect(spyMarkAsSeen).toHaveBeenCalled();
  });

  it("should close modal by clicking on overlay", () => {
    const { getAllByRole } = render(stickerSetWrapper(testProps));
    const btns = getAllByRole("button", { name: /open/i });
    expect(btns.length).toEqual(3);

    fireEvent.click(btns[0]);

    const overlay = document.querySelector(".ReactModal__Overlay");
    fireEvent.click(overlay);

    expect(mockSetSets).toHaveBeenCalled();
  });

  it("should add avatars to teammates when clicking paste button", () => {
    const { getAllByRole, getByRole } = render(stickerSetWrapper(testProps));
    const btns = getAllByRole("button", { name: /open/i });
    fireEvent.click(btns[0]);

    const stickerBtn = getByRole("button", { name: /paste to your album/i });
    fireEvent.click(stickerBtn);

    expect(spyAddAvatar).toHaveBeenCalled();
  });

  it("should catch error in case addAvatar fails", async () => {
    spyAddAvatar.mockImplementationOnce(() => Promise.reject("Test Error"));
    const { getAllByRole, getByRole } = render(stickerSetWrapper(testProps));
    const btns = getAllByRole("button", { name: /open/i });
    fireEvent.click(btns[0]);
    try {
      const stickerBtn = getByRole("button", { name: /paste to your album/i });
      fireEvent.click(stickerBtn);
    } catch (error) {
      expect(error).toBe("Test Error");
    }
  });

  it("should render subtitle correctly", async () => {
    const { getByText } = render(
      stickerSetWrapper({
        ...testProps,
        nonSeenSets: [mockStickerSets[0]],
      })
    );
    const subtitle = getByText(/YOU HAVE 1 STICKER SET TO OPEN/i);
    expect(subtitle).toBeInTheDocument();
  });
});
