import { useState, useEffect } from "react";

const useIsDesktop = (breakpoint = 768) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);
        handleResize(); // Vérification immédiate au montage
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isDesktop;
};

export default useIsDesktop;
