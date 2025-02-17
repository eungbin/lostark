import CheckBox from "../../components/CheckBox/CheckBox";

export default function Work() {
  
  return (
    <section className='w-full h-full flex justify-center mt-8'>
      <table className='table-auto bg-white rounded-xl shadow-xl'>
        <thead className=''>
          <tr className='border-b-2 border-indigo-300 text-indigo-700 border-solid'>
            <th className='p-4'></th>
            <th className='p-4' colSpan={3}>레이드</th>
            <th className='p-4'>카오스 던전</th>
            <th className='p-4'>가디언 토벌</th>
            <th className='p-4'>일일 에포나</th>
            <th className='p-4'>주간 에포나</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-t border-indigo-300 border-solid'>
            <td className='p-4' rowSpan={2}>절정야키토리</td>
            <td className='py-2 px-4'>레이드1</td>
            <td className='px-4'>레이드2</td>
            <td className='px-4'>레이드3</td>
            <td className='text-center' rowSpan={2}><CheckBox checked={false} /></td>
            <td className='text-center' rowSpan={2}><CheckBox checked={false} /></td>
            <td className='text-center' rowSpan={2}><CheckBox checked={false} /></td>
            <td className='text-center' rowSpan={2}><CheckBox checked={false} /></td>
          </tr>
          <tr>
            <td className='py-2 px-4 text-center'><CheckBox checked={false} /></td>
            <td className='px-4 text-center'><CheckBox checked={false} /></td>
            <td className='px-4 text-center'><CheckBox checked={false} /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}