import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';


export default function NewProject({ onAddProject, onCancel }) {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function onSubmit() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        // validations
        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            // 
            modalRef.current.open();
            return;
        }

        onAddProject({
            title, description, dueDate
        })
    }

    return (
        <>
            <Modal ref={modalRef} closeLabel='Close'>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='text-stone-800 hover:text-stone-950 px-8 py-2 rounded-md' onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className='px-8 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-50' onClick={onSubmit}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input type='text' label='Title' ref={titleRef} />
                    <Input label='Description' isTextArea ref={descriptionRef} />
                    <Input type='date' label='Due Date' ref={dueDateRef} />
                </div>
            </div>
        </>
    )
}