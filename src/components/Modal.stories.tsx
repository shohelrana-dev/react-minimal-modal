import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        open: false,
        title: 'Title of modal',
        children: (
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </div>
        ),
        position: 'center',
        hideIcon: false,
        animation: 'zoom',
        animationDuration: 400,
        showEscape: false,
        blur: false,
    },
    render: ({
        title,
        children,
        footer,
        position,
        hideIcon,
        open,
        animation,
        animationDuration,
        showEscape,
        blur,
    }) => {
        const [isOpen, setIsOpen] = useState(open)

        useEffect(() => {
            if (open !== isOpen) {
                setIsOpen(open)
            }
        }, [open])

        return (
            <>
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    title={title}
                    children={children}
                    footer={footer}
                    position={position}
                    hideIcon={hideIcon}
                    animation={animation}
                    animationDuration={animationDuration}
                    showEscape={showEscape}
                    blur={blur}
                />
            </>
        )
    },
}
