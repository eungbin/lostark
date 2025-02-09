import { useState, useEffect } from 'react';
import synergyData from '../../assets/Synergy.json';
import Box from '../../components/Box/Box';

interface ISynergy {
  synergy: string;
  class: Array<string>;
}

interface IParty {
  class: string;
}

export default function Synergy() {
  const [synergy, setSynergy] = useState<ISynergy[]>([
    { synergy: '치명타 적중률 증가', class: [] },
    { synergy: '치명타 피해 증가', class: [] },
    { synergy: '공격력 증가', class: [] },
    { synergy: '받는 피해 증가', class: [] },
    { synergy: '방어력 감소', class: [] },
    { synergy: '헤드어택/백어택 피해 증가', class: [] },
    { synergy: '정화', class: [] },
    { synergy: '피해 감소/보호막', class: [] },
    { synergy: '무력화 피해 증가', class: [] },
    { synergy: '공격속도 증가', class: [] },
    { synergy: '이동속도 증가', class: [] },
    { synergy: '마나 회복', class: [] }
  ]);

  const [partys, setPartys] = useState<IParty[][]>([]);

  useEffect(() => {
    const gettedSynergy: ISynergy[] = [...synergy];
    if(gettedSynergy[0].class.length === 0) {
      synergyData.data.forEach(v => {
        gettedSynergy.forEach((value, index) => {
          if(v.synergy.includes(value.synergy)) gettedSynergy[index].class.push(v.class);
        })
      })
      setSynergy([...gettedSynergy]);
    }
  }, []);

  const _addParty = () => {
    setPartys([
      ...partys,
      []
    ]);
  }

  return (
    <section className='w-full h-full flex justify-center mt-8'>
      <section className='flex flex-row gap-x-8 min-w-120'>
        <table className='table-auto bg-white rounded-xl shadow-xl'>
          <thead className=''>
            <tr className='border-b-2 border-indigo-500 text-indigo-700 border-dotted'>
              <th className='p-4'>시너지</th>
              <th className=''>직업</th>
            </tr>
          </thead>
          <tbody>
            {synergy.map((v,idx) => (
              <tr key={idx}><td className='p-4 px-8 text-sm text-indigo-500'>{v.synergy}</td><td className='p-4 px-8 text-sm'>{v.class.join(', ')}</td></tr>
            ))}
          </tbody>
        </table>
        <section className='flex flex-col gap-y-4 w-xl'>
          <button className='py-2 px-4 rounded-xl shadow-md active:shadow-none w-28' onClick={_addParty}>
            <p className='text-slate-500'>파티 추가</p>
          </button>
          <section className='flex gap-x-4'>
              {partys.map(v => (
                <Box />
              ))}
          </section>
        </section>
      </section>
    </section>
  );
}