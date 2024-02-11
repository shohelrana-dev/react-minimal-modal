import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CancelIcon from './CancelIcon'
import './modal.css'

export interface ModalProps extends ComponentProps<'div'> {
   open: boolean
   toggle?: () => void
   onClose?: () => void
   title?: string
   header?: ReactNode
   footer?: ReactNode
   wrapperClassName?: string
   hideIcon?: boolean
   position?: 'center' | 'top'
   onOpenChange?: (open: boolean) => void
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
      position,
      wrapperClassName,
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
      if (open) return setIsClosed(false)

      const timerId = setTimeout(() => {
         setIsClosed(true)
      }, 500)

      return () => clearTimeout(timerId)
   }, [open])

   function handleClose() {
      if (toggle) toggle()
      if (onClose) onClose()
      if (onOpenChange) onOpenChange(false)
   }

   if (typeof window === 'undefined' || (!open && isClosed)) return null

   //merge classes
   const containerClasses = ['modal']
   if (open) containerClasses.push('modal__open')
   if (position) containerClasses.push(`modal__position-${position}`)
   if (wrapperClassName) containerClasses.push(wrapperClassName)

   const headerMarkup =
      !hideIcon || title ? (
         <header className="modal__header">
            {header ? header : <h3 className="modal__title">{title}</h3>}

            {hideIcon ? null : (
               <button onClick={handleClose} className="modal__close-button">
                  <CancelIcon />
               </button>
            )}
         </header>
      ) : null

   const component = (
      <div className={containerClasses.join(' ')}>
         <div onClick={handleClose} className="modal__backdrop" />

         <div className={'modal__popup'} {...restProps}>
            {headerMarkup}

            <div className="modal__body">{children}</div>

            {!!footer && <footer>{footer}</footer>}
         </div>
      </div>
   )

   return createPortal(component, document.body)
}
