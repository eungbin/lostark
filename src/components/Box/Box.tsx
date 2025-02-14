import React, { useState } from 'react';

interface IParty {
  class: string[];
  synergy: string[];
}

interface IBox {
  index: number;
  removeBox: (index: number) => void;
  members: IParty;
}

export default function Box(props: IBox) {
  const _removeBox = () => { props.removeBox(props.index); }

  return (
    <div className='rounded-xl px-8 py-4 bg-white shadow-md relative w-72'>
      <div onClick={_removeBox} className='rounded-full border flex justify-center items-center border-white-500 bg-white text-xs h-6 absolute -top-2 -right-1 w-6 cursor-pointer active:bg-white/50'>
        <p className='text-red-500'>X</p>
      </div>
      <div className='flex flex-row justify-around flex-wrap gap-y-2 text-sm'>
        <input className='border outline-indigo-500 w-24 flex justify-center items-center rounded-md p-1 text-center' defaultValue={props.members?.class[0]} disabled />
        <input className='border outline-indigo-500 w-24 flex justify-center items-center rounded-md p-1 text-center' defaultValue={props.members?.class[1]} disabled />
        <input className='border outline-indigo-500 w-24 flex justify-center items-center rounded-md p-1 text-center' defaultValue={props.members?.class[2]} disabled />
        <input className='border outline-indigo-500 w-24 flex justify-center items-center rounded-md p-1 text-center' defaultValue={'서포터'} disabled />
      </div>
    </div>
  );
}