import { Counter } from '@/components/Counter'
import { render, screen } from '@testing-library/react'

describe('Counter 컴포넌트 테스트', () => {
  it('InitialCount = 0', () => {
    render(<Counter />)

    expect(screen.getByRole('count').textContent).toBe('0')
  })
})
