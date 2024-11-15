import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from './Button'


const Modal = forwardRef(function Modalf({ children, closeLabel }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal(),
            close: () => dialog.current.close(),
        }
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{closeLabel}</Button>
            </form>
        </dialog>
        , document.querySelector('#modal-root')
    )
})


export default Modal