import { Counter } from '@/components/Counter'
import { render, screen } from '@testing-library/react'

describe('Counter 컴포넌트 테스트', () => {
  it('InitialCount = 0', () => {
    render(<Counter />)

    expect(screen.getByRole('count').textContent).toBe('0')
  })

  it("Counter initialValue", () => {
    const { getByRole } = render(<Counter initialCount={1} />)

    expect(screen.getByRole('display').textContent).toBe("1")

    expect(screen.getByRole('button', { name: "+" })).toBeInTheDocument()
    expect(getByRole('button', { name: "-" })).toBeInTheDocument()
  })

  it("Counter initialValueChanged", () => {
    const { rerender } = render(<Counter initialCount={1} />)
    expect(screen.getByRole('display').textContent).toBe("1")
    rerender(<Counter initialCount={2} />)
    expect(screen.getByRole('display').textContent).toBe("2")
  })
})
