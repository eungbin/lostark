import React, { useState } from 'react';

export default function Box() {

  return (
    <div className='rounded-xl px-8 py-4 bg-white shadow-md relative w-72'>
      <div className='rounded-full border flex justify-center items-center border-white-500 bg-white text-xs h-6 absolute -top-2 -right-1 w-6 cursor-pointer active:bg-white/50'>
        <p className='text-red-500'>X</p>
      </div>
      <div className='flex flex-row justify-around flex-wrap gap-y-2 text-sm'>
        <input className='border border-slate-500 w-24 flex justify-center items-center rounded-md p-1 text-center' />
        <input className='border border-slate-500 w-24 flex justify-center items-center rounded-md p-1 text-center' />
        <input className='border border-slate-500 w-24 flex justify-center items-center rounded-md p-1 text-center' />
        <input className='border border-slate-500 w-24 flex justify-center items-center rounded-md p-1 text-center' defaultValue={'서포터'} disabled />
      </div>
    </div>
  );
}