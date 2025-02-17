import { useState } from 'react';

interface IProps {
  checked: boolean;
  // onChange: () => void;
}

export default function CheckBox(props: IProps) {
  const [checked, setChecked] = useState(props.checked);

  const _onChange = () => { setChecked(!checked); }

  return (
      <input
          type="checkbox"
          checked={checked}
          onChange={_onChange}
          className="w-5 h-5 text-indigo-600 bg-white border-gray-300 rounded-md focus:ring-indigo-500 
                    checked:bg-indigo-500 checked:border-transparent focus:outline-none cursor-pointer accent-indigo-500"
        />
  );
}