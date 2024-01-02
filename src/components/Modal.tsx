import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Header, Title, IconButton, CancelIcon, ModalContainer, DarkOverlay, Popup } from './Elements'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    visible: boolean
    toggle: () => void
    title?: string
    header?: ReactNode
    titleFontSize?: number
    wrapperClassName?: string
    hideIcon?: boolean
    position?: 'center' | 'top'
    width?: number
}

export default function Modal(props: ModalProps) {
    const { visible, toggle, title, titleFontSize, header, children, hideIcon, position, wrapperClassName, ...restProps } = props

    const [delayVisible, setDelayVisible] = useState(visible)

    useEffect(() => {
        if (delayVisible) {
            setTimeout(() => setDelayVisible(visible), 500)
            return
        }
        setDelayVisible(visible)
    }, [visible])

    if (typeof window === 'undefined') return null

    const headerMarkup =
        !hideIcon || title ? (
            <Header>
                {header ? header : <Title fontSize={titleFontSize}>{title}</Title>}

                {hideIcon ? null : (
                    <IconButton onClick={toggle}>
                        <CancelIcon />
                    </IconButton>
                )}
            </Header>
        ) : null

    const component = (
        <>
            {delayVisible ? (
                <ModalContainer
                    className={wrapperClassName}
                    position={position}
                >
                    <DarkOverlay
                        onClick={toggle}
                        exit={!visible}
                    />
                    {/* @ts-ignore */}
                    <Popup
                        exit={!visible}
                        {...restProps}
                    >
                        {headerMarkup}

                        {children}
                    </Popup>
                </ModalContainer>
            ) : null}
        </>
    )

    return createPortal(component, document.body)
}
