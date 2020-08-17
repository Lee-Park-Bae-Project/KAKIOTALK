/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DependencyList, useCallback, useRef,
} from 'react'

interface UseIntersectionObserver {
  (cb: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit,
  deps: DependencyList): (node: any) => void
}

const useIntersectionObserver: UseIntersectionObserver = (cb, options, deps) => {
  const intersectionObserver = useRef<IntersectionObserver | null>(null)

  return useCallback((node) => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect()
    }

    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      cb(entry)
    }, options)

    if (node) intersectionObserver.current.observe(node)
  }, deps)
}

export default useIntersectionObserver
