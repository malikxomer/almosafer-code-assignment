import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../index";

describe("Loader component test cases", () => {
  it("should render loader component", async () => {
    const { findByTestId } = render(<Loader />);

    const loader = await findByTestId("loader-component");
    expect(loader).toBeInTheDocument();
  });
});
