import { useState, useEffect } from "react";

function useResponsiveLimit(){
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        const updateLimit = () => {
            const width = window.innerWidth;
            if (width >= 1024){
                setLimit(8);
            }else if (width >= 768){
                setLimit(6);
            }else {
                setLimit(4);
            }
        }

        updateLimit();

        window.addEventListener('resize', updateLimit);
        return () => window.removeEventListener('resize', updateLimit);
    }, [])
    return limit;
}

export default useResponsiveLimit;