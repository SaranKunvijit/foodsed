import type { FC, ReactNode } from "react"
import './DialogComponent.css'

type DialogComponentProps = {
    open:boolean
    title:string
    children:ReactNode
    onClose: () => void
    onConfirm: () => void
}

const DialogComponent:FC<DialogComponentProps> = ({open, title, children, onClose, onConfirm}) => {
    if(!open) return null

    return(
        <div>
            <div className="dialog-overlay">
                <div className="dialog-box">
                    <h2>{title}</h2>
                    <div className="dialog-content">
                        {children}
                    </div>
                    <div className="dialog-btn">
                        <button onClick={onClose} className="btn-cancel">ยกเลิก</button>
                        <button onClick={onConfirm} className="btn-confirm">ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DialogComponent