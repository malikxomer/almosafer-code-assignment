import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsCard from "../index";
import { blogListMock } from "../../../__mocks__/blogData";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const props: any = blogListMock.data[0];

describe("News Card component test cases", () => {
  it("should render News Card component", async () => {
    const { findByText } = render(<NewsCard {...props} />);

    const title = await findByText(blogListMock.data[0].title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(
      "Almosafer and Aseer Development Authority unveil strategic partnership to elevate Aseer as a premier tourism destination in KSA"
    );
  });

  it("should navigate component to blog page", async () => {
    const { findByText } = render(<NewsCard {...props} />);

    const navigateButton = await findByText("Read more");
    expect(navigateButton).toBeInTheDocument();

    fireEvent.click(navigateButton);
    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toBeCalledWith("/blog/90");
  });
});
