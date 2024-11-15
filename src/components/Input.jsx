import { forwardRef } from "react";

 function Inputf({ isTextArea, label, ...props }, ref) {
    const inputStyling = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600';
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {isTextArea ?
                <textarea className={inputStyling} {...props} ref={ref} />
                : <input className={inputStyling} {...props} ref={ref} />}
        </p>
    )
}


const Input = forwardRef(Inputf)

export default Input;