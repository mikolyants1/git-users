import { useState } from "react"

export const useHover = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    
    const onMouseEnter = () => setIsHover(true);
    const onMouseLeave = () => setIsHover(false);

    return {
        isHover,
        handlers: {
            onMouseEnter,
            onMouseLeave
        }
    }
}