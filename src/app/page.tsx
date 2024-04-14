'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>테스트 코드 작성</h1>
      <ul>
        <ol><Link href='/counter'>Counter 테스트</Link></ol>
        <ol><Link href='/todo'>TodoList 테스트</Link></ol>
      </ul>
    </div>
  );
}
