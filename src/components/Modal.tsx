import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CancelIcon from './CancelIcon'
import './Modal.css'

// default options
const ANIMATION = 'zoom'
const ANIMATION_DURATION = 400
const POSITION = 'center'
const WIDTH = 550

export interface ModalProps extends ComponentProps<'div'> {
    open: boolean
    toggle?: () => void
    onClose?: () => void
    title?: string
    header?: ReactNode
    footer?: ReactNode
    wrapperClassName?: string
    hideIcon?: boolean
    position?: 'center' | 'top' | 'bottom'
    onOpenChange?: (open: boolean) => void
    animation?: 'zoom' | 'slide'
    animationDuration?: number
    showEscape?: boolean
    blur?: boolean
    width?: number
}

export default function Modal(props: ModalProps) {
    const {
        open,
        toggle,
        onClose,
        onOpenChange,
        title,
        footer,
        header,
        children,
        hideIcon,
        className,
        wrapperClassName,
        width = WIDTH,
        position = POSITION,
        animation = ANIMATION,
        animationDuration = ANIMATION_DURATION,
        showEscape = false,
        blur = false,
        style = {},
        ...restProps
    } = props
    const [isClosed, setIsClosed] = useState(!open)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    useEffect(() => {
        if (!open) return

        function handleKeydown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                handleClose()
            }
        }
        document.addEventListener('keydown', handleKeydown)

        return () => {
            document.removeEventListener('keydown', handleKeydown)
        }
    }, [open])

    useEffect(() => {
        if (open) return setIsClosed(false)

        const timerId = setTimeout(() => {
            setIsClosed(true)
        }, animationDuration + 50)

        return () => clearTimeout(timerId)
    }, [open])

    function handleClose() {
        if (toggle) toggle()
        if (onClose) onClose()
        if (onOpenChange) onOpenChange(false)
    }

    if (typeof window === 'undefined' || (!open && isClosed)) return null

    //merge container classes
    const containerClasses = ['modal', `modal__position-${position}`]
    if (open) containerClasses.push('modal__open')
    if (wrapperClassName) containerClasses.push(wrapperClassName)

    //merge modal classes
    const modalClasses = ['modal__popup', `modal__popup--animation-${animation}`, className]

    //merge close button classes
    const buttonClasses = ['modal__close-button']
    if (showEscape) buttonClasses.push('modal__close-button-escape')

    //merge backdrop classes
    const backdropClasses = ['modal__backdrop']
    if (blur) backdropClasses.push(`modal__backdrop--blur`)

    const headerMarkup =
        !hideIcon || title ? (
            <header className='modal__header'>
                {header ? header : <h3 className='modal__title'>{title}</h3>}

                {!hideIcon && (
                    <button onClick={handleClose} className={buttonClasses.join(' ')}>
                        {showEscape ? <kbd>ESC</kbd> : <CancelIcon />}
                    </button>
                )}
            </header>
        ) : null

    const component = (
        <div className={containerClasses.join(' ')}>
            <div onClick={handleClose} className={backdropClasses.join(' ')} />

            <div
                className={modalClasses.join(' ')}
                style={{ animationDuration: `${animationDuration}ms`, maxWidth: `${width}px`, ...style }}
                {...restProps}
            >
                {headerMarkup}

                <div className='modal__body'>{children}</div>

                {!!footer && <footer>{footer}</footer>}
            </div>
        </div>
    )

    return createPortal(component, document.body)
}
