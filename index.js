import { useState, useEffect } from 'react'

let defaultWidth

// This conditional makes the build work if using a SSR solution.
// The browser handles this fine during development,
// but--because Node has no window object--we check here to see if it exists.
if (typeof window !== 'undefined') {
    defaultWidth = window.innerWidth
}

// Customize breakpoints
export const XS = 575
export const SM = 768
export const MD = 991
export const LG = 1200

export const useWindowWidth = (initialWidth = defaultWidth) => {
    const [windowWidth, setWindowWidth] = useState(initialWidth)
    
    useEffect(() => {
        setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
    }, [])
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return { windowWidth, XS, SM, MD, LG }
}
