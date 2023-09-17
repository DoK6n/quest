import { useEffect, useRef } from 'react'

type Callback = () => void
type AnyFunction = (...args: unknown[]) => unknown
const isFunction = (target: unknown): target is AnyFunction => typeof target === 'function'

/**
 * useDidMount hook
 *
 * Calls a function on mount
 */
export const useDidMount = (callback: Callback): void => {
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    if (isMounted.current) {
      if (isFunction(callback)) {
        callback()
      }
    }
    isMounted.current = true
  }, [])
}

/**
 * useUnMount hook
 *
 * Calls a function on unmount
 */
export const useUnMount = (callback: Callback): void => {
  const isUnMounted = useRef<boolean>(false)

  useEffect(() => {
    return () => {
      if (isUnMounted.current) {
        if (isFunction(callback)) {
          callback()
        }
      }
      isUnMounted.current = true
    }
  }, [])
}
