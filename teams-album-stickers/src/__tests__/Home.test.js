import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { mockStickerSets } from "../__mocks__";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {
  return "";
});

const homeComponent = ({ sets, setSets, setTeammates }) => {
  return (
    <BrowserRouter>
      <Home sets={sets} setSets={setSets} setTeammates={setTeammates} />
    </BrowserRouter>
  );
};

const testProps = {
  sets: mockStickerSets,
  setSets: jest.fn(),
  setTeammates: jest.fn(),
};

describe("Home", () => {
  it("should render component correctly", () => {
    const { getByText } = render(homeComponent(testProps));
    const title = getByText(/trendyol/i);
    expect(title).toBeInTheDocument();
  });

  it("should open and close modal dialog", () => {
    const { getByRole } = render(homeComponent(testProps));

    const btn = getByRole("button", {
      name: /get your daily stickers/i,
    });
    fireEvent.click(btn);

    const modal = getByRole("dialog");
    expect(modal).toBeInTheDocument();

    const overlay = document.querySelector(".ReactModal__Overlay");
    fireEvent.click(overlay);

    expect(modal).not.toBeInTheDocument();
  });
});
