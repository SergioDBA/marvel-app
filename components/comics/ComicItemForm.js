
import { useRef } from 'react';
import Input from "../UI/Input";

const ComicItemForm = ()=>{
    const amountInputRef = useRef();
    return <form className="text-right" onSubmit="">
    <Input
      ref={amountInputRef}
      label='Amount'
      input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}
    />
    <button className='cursor-pointer border-none bg-purple-500	text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold'>+ Add</button>
    {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
  </form>
}

export default ComicItemForm;