import { useRef, useState, useEffect } from 'react';

export default function Main() {
  const accessToken = import.meta.env.VITE_API_KEY;

  const normalRef = useRef<HTMLInputElement>(null);
  const advancedRef = useRef<HTMLInputElement>(null);
  const durableRef = useRef<HTMLInputElement>(null);
  const abydosRef = useRef<HTMLInputElement>(null);
  const costRef = useRef<HTMLInputElement>(null);
  const unionRef = useRef<HTMLInputElement>(null);

  const [wood, setWood] = useState({
    normal: 0, advanced: 0, durable: 0, abydos: 0, cost: 0, union: 0
  });

  const [아비도스총제작비용, 아비도스총제작비용설정] = useState(0);

  // fetch('https://developer-lostark.game.onstove.com/news/notices', {
  //   method: 'GET',
  //   headers: {
  //     "Content-Type": "application/json",
  //     "authorization": "bearer " + accessToken
  //   }
  // })
  // .then(res => res.json())
  // .then(res => console.log(res))

  const _handleWoodValue = (idx: number) => {
    if(idx === 0) { setWood({ ...wood, normal: Number(normalRef.current?.value) }); }
    else if(idx === 1) { setWood({ ...wood, advanced: Number(advancedRef.current?.value) }); }
    else if(idx === 2) { setWood({ ...wood, durable: Number(durableRef.current?.value) }); }
    else if(idx === 3) { setWood({ ...wood, abydos: Number(abydosRef.current?.value) }); }
    else if(idx === 4) { setWood({ ...wood, cost: Number(costRef.current?.value) }); }
    else if(idx === 5) { setWood({ ...wood, union: Number(unionRef.current?.value) }); }
  }

  useEffect(() => {
    아비도스총제작비용설정(wood.normal*0.86 + wood.advanced*0.45 + wood.abydos*0.33 + wood.cost);
  }, [wood]);

  return (
    <section className='w-full h-full flex flex-col items-center mt-8 gap-y-4'>
      <div className='flex items-center gap-x-4'>
        <p>목재</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={normalRef} onChange={() => _handleWoodValue(0)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>부드러운 목재</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={advancedRef} onChange={() => _handleWoodValue(1)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>튼튼한 목재</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={durableRef} onChange={() => _handleWoodValue(2)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>아비도스 목재</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={abydosRef} onChange={() => _handleWoodValue(3)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>제작 비용</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={costRef} onChange={() => _handleWoodValue(4)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>아비도스 융화 재료</p><input className='border w-24 flex rounded-md py-1 pl-2 focus:outline-indigo-500 shadow-md' type='number' ref={unionRef} onChange={() => _handleWoodValue(5)} />
      </div>
      <div className='flex items-center gap-x-4'>
        <p>아비도스 융화 재료(10개) 제작비용: {아비도스총제작비용}, 만들어서 팔 경우 {(wood.union*10-아비도스총제작비용)*0.95}만큼 이득</p>
      </div>
      <div className='flex items-center gap-x-4'>
        <p>튼튼한 목재 vs 아비도스 목재: {wood.abydos*0.8 > wood.durable ? '아비도스가 이득' : '튼튼한 목재가 이득'}</p>
      </div>
    </section>
  );
}