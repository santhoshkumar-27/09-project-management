import Input from './Input';


export default function NewProject() {
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
                <Input label='Title' />
                <Input label='Description' isTextArea />
                <Input label='Due Date' />
            </div>
        </div>
    )
}