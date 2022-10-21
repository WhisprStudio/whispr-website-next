import { useState, useEffect } from 'react';

export function getDims() {
    if (typeof window !== "undefined") {
        let width = window.innerWidth;
        let height = window.innerHeight;
        return {
            width,
            height,
        }
    }
    return {width: 0, height: 0}
}


export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getDims());

    const getWindowDimensions = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}