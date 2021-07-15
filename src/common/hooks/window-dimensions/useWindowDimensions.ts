import { useState, useEffect } from 'react'
import { useWindowDimensionsTP } from 'src/common/hooks/window-dimensions/types/useWindowDimensionsTP'

/**
 * @author rafaelvictor01
 * @returns A largura e a altura do browser atualizados de forma reativa.
 *
 * @see https://qastack.com.br/programming/36862334/get-viewport-window-height-in-reactjs
 */
export default function useWindowDimensions(): useWindowDimensionsTP {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  } as useWindowDimensionsTP)

  function getWindowDimensions() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      getWindowDimensions()

      // Add event listener
      window.addEventListener('resize', getWindowDimensions)

      // Call handler right away so state gets updated with initial window size
      getWindowDimensions()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', getWindowDimensions)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
