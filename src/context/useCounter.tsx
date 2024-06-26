import React, { useState, useContext, useCallback, PropsWithChildren } from 'react'

const CounterStepContext = React.createContext(1)

type Props = {
  step: number
}
export const CounterStepProvider: React.FC<PropsWithChildren<Props>> = ({ step, children }) => (
  <CounterStepContext.Provider value={step}>{children}</CounterStepContext.Provider>
)

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  const step = useContext(CounterStepContext)
  const increment = useCallback(() => setCount((x) => x + step), [step])
  // testing async
  const incrementAsync = useCallback(() => setTimeout(increment, 100), [increment])
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  return { count, increment, incrementAsync, reset }
}
