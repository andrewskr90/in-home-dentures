import React, { useEffect, useState } from 'react'

const useCheckWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    return screenWidth
}

export default useCheckWidth
