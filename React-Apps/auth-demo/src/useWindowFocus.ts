import { useEffect, useState } from "react";

export function useWindowsFocus(): boolean {
    const [isFocused, setIsFocused] = useState<boolean>(document.hasFocus());

    useEffect(() => {
        const onFocus = () => setIsFocused(true);
        const onBlur = () => setIsFocused(false);
        window.addEventListener('focus', onFocus);
        window.addEventListener('blur', onBlur);

        return () => {
            window.removeEventListener('focus', onFocus);
            window.removeEventListener('blur', onBlur);
        };
    }, []);
    
    return isFocused;
}