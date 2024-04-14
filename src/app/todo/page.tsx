'use client';

import { TodoCreate } from '@/components/todo/TodoCreate';
import { TodoList } from '@/components/todo/TodoList';

export default function TodoPage() {
  return (
    <div>
      <main>
        <h1>
          해야 할 업무를 등록해 주세요
        </h1>
        <TodoCreate />
        <h1>
          해야할 일 목록
        </h1>
        <TodoList />
      </main>
    </div>
  )
}
