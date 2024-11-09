import { useRef } from 'react';
import Input from './Input';


export default function NewProject() {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li> 
                    <button className='text-stone-800 hover:text-stone-950 px-8 py-2 rounded-md'>Cancel</button>
                </li>
                <li>
                    <button className='px-8 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-50'>Save</button>
                </li>
            </menu>
            <div>
                <Input label='Title' ref={titleRef} />
                <Input label='Description' isTextArea ref={descriptionRef} />
                <Input label='Due Date' ref={dueDateRef} />
            </div>
        </div>
    )
}