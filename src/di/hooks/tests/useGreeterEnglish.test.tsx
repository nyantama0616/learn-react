import { renderHook } from "@testing-library/react";
import useGreeterEnglish from "../useGreeterEnglish";

describe("test useGreeterEnglish", () => {
    test("test useGreeterEnglish", async () => {
        const { result } = renderHook(() => useGreeterEnglish());

        // await new Promise((r) => setTimeout(r, 1000));

        expect(result.current.message).toBe("Hello");
    });
});
