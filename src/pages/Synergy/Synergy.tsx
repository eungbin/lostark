import { useState, useEffect, useRef } from 'react';
import synergyData from '../../assets/Synergy.json';
import Box from '../../components/Box/Box';

const classList = synergyData.data.map((item: { class: string }) => item.class) as readonly string[];
type ClassType = (typeof classList)[number];

interface ISynergy {
  synergy: string;
  class: Array<ClassType>;
}
interface IParty {
  class: ClassType[];
  synergy: string[];
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

  const [parties, setParties] = useState<IParty[]>([]);
  const memberRef = useRef<HTMLInputElement>(null);

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

  /**
   * 입력된 클래스가 유효한지 아닌지 검삭해주는 함수
   * @param value 입력된 클래스
   * @returns (boolean) 유효한 직업인지 아닌지
   */
  const _isValidClass = (value: string): value is ClassType => {
    return classList.includes(value as ClassType);
  }

  /**
   * 해당 직업의 시너지 목록을 반환해주는 함수
   * @param value 
   * @returns string[]
   */
  const _getSynergy = (value: ClassType): string[] => {
    return synergy.filter((v) => v.class.includes(value))
                  .map((v) => v.synergy);
  }

  /**
   * 파티를 늘려주는 함수
   */
  const _addParty = () => { setParties([...parties, { class:[],synergy:[] }]); }

  /**
   * index에 맞는 파티를 제거해주는 함수
   * @param index 
   */
  const _removeParty = (index: number) => {
    const copiedParties = [...parties];
    setParties([...copiedParties.filter((v,idx) => idx !== index)]);
  }

  /**
   * 빈 파티에 멤버를 추가해주는 함수
   * @returns 
   */
  const _addMember = () => {
    let flag: boolean = false;

    if(memberRef.current?.value === '') { alert('클래스를 입력해 주세요.'); return; }
    if(parties.length === 0) { alert('파티가 존재하지 않습니다.'); return; }
    if(!(_isValidClass(memberRef.current?.value))) { alert('정확한 클래스명을 입력해 주세요.'); return; }

    const copiedParties = [...parties];
    for(let i=0; i<copiedParties.length; i++) {
      if(copiedParties[i].class.length === 3) continue;
      else {
        const typedClass = memberRef.current?.value.toString();
        const addedSynergies: string[] = _getSynergy(typedClass).filter(v => !copiedParties[i].synergy.includes(v)).map(v => {
          copiedParties[i].synergy.push(v);
          return v;
        });
        
        if(addedSynergies.length === 0) { flag = true; continue; }

        copiedParties[i].class.push(typedClass);
        setParties([...copiedParties]);
        memberRef.current.value = '';
        return; 
      }
    }

    if(flag) { alert('해당 직업이 들어갈 적정한 파티가 존재하지 않습니다.'); return; }
    if(memberRef.current?.value !== '') { alert('빈자리가 존재하지 않습니다.'); return; }
  }

  return (
    <section className='w-full h-full flex justify-center mt-8'>
      <section className='flex flex-row gap-x-8'>
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
        <section className='flex flex-col gap-y-4' style={{width:''}}>
          <button className='py-2 px-4 rounded-md shadow-md active:shadow-none active:bg-indigo-400 w-28 bg-indigo-500' onClick={_addParty}>
            <p className='text-white'>파티 추가</p>
          </button>
          <div className='flex flex-row gap-x-4'>
            <input className='border w-28 flex rounded-md py-1 text-center focus:outline-indigo-500 shadow-md' placeholder='클래스 입력' ref={memberRef} />
            <button className='py-2 px-4 rounded-md shadow-md active:shadow-none active:bg-indigo-400 w-28 bg-indigo-500' onClick={_addMember}>
              <p className='text-white'>공대원 추가</p>
            </button>
          </div>
          <section className='flex gap-x-4'>
              {parties.map((v, idx) => (
                <Box key={idx} index={idx} removeBox={_removeParty} members={v} />
              ))}
          </section>
        </section>
      </section>
    </section>
  );
}