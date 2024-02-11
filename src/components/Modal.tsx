import { ComponentProps, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
   CancelIcon,
   DarkOverlay,
   Header,
   IconButton,
   ModalBody,
   ModalContainer,
   Popup,
   Title,
} from './Elements'

export interface ModalProps extends ComponentProps<'div'> {
   open: boolean
   toggle?: () => void
   onClose?: () => void
   title?: string
   header?: ReactNode
   footer?: ReactNode
   titleFontSize?: number
   wrapperClassName?: string
   hideIcon?: boolean
   position?: 'center' | 'top'
   width?: number
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
      titleFontSize,
      header,
      children,
      hideIcon,
      position,
      wrapperClassName,
      ...restProps
   } = props
   const [isClose, setIsClose] = useState(false)

   useEffect(() => {
      if (open) return setIsClose(false)

      const timerId = setTimeout(() => {
         setIsClose(true)
      }, 500)

      return () => clearTimeout(timerId)
   }, [open])

   function handleClose() {
      if (typeof toggle === 'function') {
         toggle()
      }
      if (typeof onClose === 'function') {
         onClose()
      }
      if (typeof onOpenChange === 'function') {
         onOpenChange(false)
      }
   }

   if (typeof window === 'undefined' || isClose) return null

   const headerMarkup =
      !hideIcon || title ? (
         <Header>
            {header ? header : <Title fontSize={titleFontSize}>{title}</Title>}

            {hideIcon ? null : (
               <IconButton onClick={handleClose}>
                  <CancelIcon />
               </IconButton>
            )}
         </Header>
      ) : null

   const component = (
      <ModalContainer className={wrapperClassName} position={position}>
         <DarkOverlay onClick={handleClose} exit={!open} />

         <Popup exit={!open} {...restProps}>
            {headerMarkup}

            <ModalBody>{children}</ModalBody>

            {!!footer && <footer>{footer}</footer>}
         </Popup>
      </ModalContainer>
   )

   return createPortal(component, document.body)
}
