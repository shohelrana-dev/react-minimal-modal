import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RxCross2 as CancelIcon } from "react-icons/rx"
import { createPortal } from "react-dom"
import classes from "../styles/style.module.css"

export interface ModalProps {
    isVisible: boolean,
    toggle: () => void
    title?: string
    className?: string
    hideIcon?: boolean
    children: ReactNode
}

export default function Modal( props: ModalProps ){
    const { isVisible, toggle, title, children, hideIcon, className = '' } = props

    const headerMarkup = ! hideIcon || title ? (
        <header className={ classes.header }>
            <h3 className={ classes.title }>{ title }</h3>
            { ! hideIcon ? (
                <div>
                    <button onClick={ toggle } className={ classes.icon }>
                        <CancelIcon size="20"/>
                    </button>
                </div>
            ) : null }
        </header>
    ) : null

    const component = (
        <AnimatePresence>
            { isVisible ? (
                <div className={ classes.modal }>
                    <motion.div
                        className={ classes.darkOverlay }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        transition={ { duration: 0.2 } }
                        onClick={ toggle }
                    />
                    <motion.div
                        className={ classes.popup + ` ${ className }` }
                        initial={ { opacity: 0, y: -10 } }
                        animate={ { opacity: 1, y: 0 } }
                        exit={ { opacity: 0, y: 10 } }
                        transition={ { duration: 0.3 } }
                    >
                        { headerMarkup }

                        { children }
                    </motion.div>
                </div>
            ) : null }
        </AnimatePresence>
    )

    return createPortal( component, document.body )
}