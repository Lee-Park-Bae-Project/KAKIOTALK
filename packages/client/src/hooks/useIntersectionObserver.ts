/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DependencyList, useCallback, useEffect, useRef,
} from 'react'

interface UseIntersectionObserver {
  (cb: (isVisible: boolean) => void, deps: DependencyList): (node: any) => void
}

const useIntersectionObserver: UseIntersectionObserver = (cb, deps) => {
  const intersectionObserver = useRef<IntersectionObserver | null>(null)

  return useCallback((node) => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect()
    }

    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      cb(entry.isIntersecting)
    })

    if (node) intersectionObserver.current.observe(node)
  }, deps)
}

export default useIntersectionObserver
