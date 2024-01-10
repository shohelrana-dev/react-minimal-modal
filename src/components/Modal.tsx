import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Header, Title, IconButton, CancelIcon, ModalContainer, DarkOverlay, Popup } from './Elements'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean
	toggle?: () => void
	onClose?: () => void
	title?: string
	header?: ReactNode
	titleFontSize?: number
	wrapperClassName?: string
	hideIcon?: boolean
	position?: 'center' | 'top'
	width?: number
}

export default function Modal(props: ModalProps) {
	const {
		open,
		toggle,
		onClose,
		title,
		titleFontSize,
		header,
		children,
		hideIcon,
		position,
		wrapperClassName,
		...restProps
	} = props

	const [delayOpen, setDelayOpen] = useState(open)

	useEffect(() => {
		if (delayOpen) {
			setTimeout(() => setDelayOpen(open), 500)
			return
		}
		setDelayOpen(open)
	}, [open])

	function handleClose() {
		if (typeof toggle === 'function') {
			toggle()
		}
		if (typeof onClose === 'function') {
			onClose()
		}
	}

	if (typeof window === 'undefined') return null

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
		<>
			{delayOpen ? (
				<ModalContainer className={wrapperClassName} position={position}>
					<DarkOverlay onClick={handleClose} exit={!open} />
					{/* @ts-ignore */}
					<Popup exit={!open} {...restProps}>
						{headerMarkup}

						{children}
					</Popup>
				</ModalContainer>
			) : null}
		</>
	)

	return createPortal(component, document.body)
}
