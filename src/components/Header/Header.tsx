import {  } from 'react';

export default function Header() {

  return (
    <header className='w-full h-16 bg-white flex flex-row flex-wrap content-center justify-between px-12'>
      <span className='cursor-pointer text-4xl'>LOA</span>
      <section className='flex content-center flex-wrap gap-x-8'>
        <p className='cursor-pointer text-slate-500 font-bold font-sans text-base hover:text-indigo-400'>공지사항</p>
        <p className='cursor-pointer text-slate-500 font-bold font-sans text-base hover:text-indigo-400'>캐릭터 검색</p>
      </section>
    </header>
  );
}