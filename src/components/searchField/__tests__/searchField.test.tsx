import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { blogListMock } from "../../../__mocks__/blogData";
import SearchField from "../index";

const props: any = {
  value: "Saudi",
  handleChange: jest.fn(),
  searchResults: blogListMock.data,
};

describe("Search Field component test cases", () => {
  it("should render Search Field component", async () => {
    const screen = render(<SearchField {...props} />);

    const searchInput = screen.container.querySelector(
      "input[name='search-blogs']"
    ) as HTMLInputElement;

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue("Saudi");
  });

  it("should search the value in Search Field", async () => {
    const screen = render(<SearchField {...props} />);
    const searchInput = screen.container.querySelector(
      "input[name='search-blogs']"
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "Saudi Travel" } });
    expect(props.handleChange).toHaveBeenCalled();
  });
});
