import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { WebTeam } from "../pages/webTeam/WebTeam";
import { mockTeammates } from "../__mocks__";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {
  return "";
});

const webTeam = ({ data }) => {
  return (
    <BrowserRouter>
      <WebTeam data={data} />
    </BrowserRouter>
  );
};

const testProps = {
  data: mockTeammates,
};

describe("WebTeam", () => {
  it("should render component correctly", () => {
    const { getByRole } = render(webTeam(testProps));
    const title = getByRole("heading", {
      name: /web team/i,
    });
    const subtitle = getByRole("heading", {
      name: /blazing fast web/i,
    });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("should display stickers correctly", () => {
    const { queryAllByRole } = render(webTeam(testProps));
    const stickers = queryAllByRole("img", { name: /avatar/i });

    expect(stickers.length).toEqual(mockTeammates.length);
  });
});
