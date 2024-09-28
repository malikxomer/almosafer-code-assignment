import { renderHook } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

describe("useDebounce test cases", () => {
  it("should return the debounced value", async () => {
    const { result } = renderHook(() => useDebounce("test", 0));
    const debouncedValue = result.current;

    expect(debouncedValue).toBe("test");
  });
});
