import {  } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const changePage = (page: string) => { navigate(page); }

  return (
    <header className='w-full h-16 bg-white flex flex-row flex-wrap content-center justify-between px-12 shadow-md shadow-indigo-100'>
      <span className='cursor-pointer text-4xl text-indigo-500' onClick={() => changePage('/')}>LOA</span>
      <section className='flex content-center flex-wrap gap-x-8'>
        <p className='cursor-pointer text-slate-500 font-bold text-base hover:text-indigo-400'>공지사항</p>
        <p className='cursor-pointer text-slate-500 font-bold text-base hover:text-indigo-400'>캐릭터 검색</p>
        <p className='cursor-pointer text-slate-500 font-bold text-base hover:text-indigo-400' onClick={() => changePage('/synergy')}>시너지 정리</p>
      </section>
    </header>
  );
}