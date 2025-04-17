import { renderHook } from "@testing-library/react";
import { useWindowsFocus } from "./useWindowFocus";

describe('Testing custom react hook', () => {
    test('should return false if window is not focused initially', () => {
        const { result } = renderHook(() => useWindowsFocus());
        expect(result.current).toBe(false);
    });
});