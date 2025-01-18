import { useRef } from "react";

export function useDebounce(originalFn) {
    const currentClock = useRef();

    const fn = () => {
        clearInterval(currentClock.current);

        currentClock.current = setTimeout(originalFn, 200)
    }

    return fn;
}