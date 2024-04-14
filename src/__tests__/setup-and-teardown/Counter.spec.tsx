import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from '@/components/Counter'

describe('Counter 컴포넌트 BDD', () => {
  let unmount: any

  // 테스트 코드 실행 전 컴포넌트 초기화 해주기
  beforeEach(() => {
    const rendered = render(<Counter />);
    unmount = rendered.unmount;
  })

  it('랜더링 초기값 테스트', () => {
    const count = screen.getByRole('count');

    expect(count).toBeDefined();
    const countValue = Number.parseInt(count.textContent ?? '');
    expect(countValue).toBe(0);
  })

  it('초기값 속성 테스트', () => {
    unmount()

    render(<Counter initialCount={1} />)
    const count = screen.getByRole('count')
    expect(count.textContent).toBe('1')
  })

  it('플러스 버튼 클릭 테스트', () => {
    const count = screen.getByRole('count')
    const increaseCount = screen.getByRole('button', {name: '+'})

    fireEvent.click(increaseCount)
    expect(count.textContent).toBe('1')
  })

  it('마이너스 버튼 클릭 테스트', () => {
    const count = screen.getByRole('count')
    const decreaseCount = screen.getByRole('button', {name: '-'})

    fireEvent.click(decreaseCount)
    // -1을 허용하는지 확인해야 한다. (기획자가 놓친 부분 확인 가능)
    expect(count.textContent).toBe('-1')
  })

  it('리셋 버튼 테스트', () => {
    const count = screen.getByRole('count')
    const resetButton = screen.getByRole('button', {name: 'reset'})

    fireEvent.click(resetButton)
    expect(count.textContent).toBe('0')
  })
})
