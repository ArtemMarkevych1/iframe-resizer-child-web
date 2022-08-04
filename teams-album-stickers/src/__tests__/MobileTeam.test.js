import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MobileTeam } from "../pages/mobileTeam/MobileTeam";
import { mockTeammates } from "../__mocks__";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {
  return "";
});

const mobileTeam = ({ data }) => {
  return (
    <BrowserRouter>
      <MobileTeam data={data} />
    </BrowserRouter>
  );
};

const testProps = {
  data: mockTeammates,
};

describe("MobileTeam", () => {
  it("should render component correctly", () => {
    const { getByRole } = render(mobileTeam(testProps));
    const title = getByRole("heading", {
      name: /mobile web team/i,
    });
    const subtitle = getByRole("heading", {
      name: /our favorite smart phone is iphone 4/i,
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("should display stickers correctly", () => {
    const { queryAllByRole } = render(mobileTeam(testProps));
    const stickers = queryAllByRole("img", { name: /avatar/i });

    expect(stickers.length).toEqual(mockTeammates.length);
  });
});
