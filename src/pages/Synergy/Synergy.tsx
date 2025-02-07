import { useState, useEffect } from 'react';
import synergyData from '../../assets/Synergy.json';

interface ISynergy {
  synergy: string;
  class: Array<string>;
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

  return (
    <section className='w-full h-full flex justify-center'>
      <table className='table-auto'>
        <thead>
          <tr>
            <th>시너지</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          {synergy.map((v,idx) => (
            <tr key={idx}><td>{v.synergy}</td><td>{v.class.join(', ')}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}