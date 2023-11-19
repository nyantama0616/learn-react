import { act, renderHook, within, screen, waitFor, cleanup } from "@testing-library/react";
import useGreeterEnglish from "../useGreeterEnglish";

describe("test useGreeterEnglish", () => {
    beforeEach(() => {
        jest.useFakeTimers(); //リアルな時間を使わずに、jestのタイマーを使う
    });

    afterEach(() => {
        cleanup(); //これを書かないと、greeter内のsetIntervalが動き続けるので、warningが出る
        jest.runOnlyPendingTimers(); //保留中のタイマーを実行する(TODO: よく分かってない)
        jest.useRealTimers(); //リアルな時間に戻す
    });

    function clock() {
       jest.advanceTimersByTime(500);
    }

    test("test useGreeterEnglish", async () => {
        const { result } = renderHook(() => useGreeterEnglish());
        
        expect(result.current.message).toBe("Hello");

        act(clock);
        expect(result.current.message).toBe("World");
        
        act(clock);
        expect(result.current.message).toBe("☆☆☆");
    });
});
