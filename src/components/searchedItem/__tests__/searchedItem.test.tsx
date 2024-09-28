import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchedItem from "../index";
import { blogListMock } from "../../../__mocks__/blogData";
import { BrowserRouter } from "react-router-dom";

const props: any = blogListMock.data[0];

describe("Searched Item component test cases", () => {
  it("should render Searched Item component", async () => {
    const { findByText } = render(
      <BrowserRouter>
        <SearchedItem searchedBlog={props} />
      </BrowserRouter>
    );

    const title = await findByText(blogListMock.data[0].title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(
      "Almosafer and Aseer Development Authority unveil strategic partnership to elevate Aseer as a premier tourism destination in KSA"
    );
  });
});
