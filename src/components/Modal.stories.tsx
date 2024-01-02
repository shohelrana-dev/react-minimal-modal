import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import useModal from '../hooks/useModal'
import { useEffect } from 'react'

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
    args: {
        visible: false,
        title: 'Title of modal',
        children: 'Body of modal',
        titleFontSize: 22,
        position: 'center',
        width: 550,
        hideIcon: false,
    },
    render: ({ title, children, position, width, hideIcon, visible, titleFontSize }) => {
        const { isVisible, toggle } = useModal(visible)

        useEffect(() => {
            if (visible !== isVisible) {
                toggle()
            }
        }, [visible])

        return (
            <>
                <button onClick={toggle}>Open Modal</button>
                <Modal
                    visible={isVisible}
                    toggle={toggle}
                    title={title}
                    children={children}
                    position={position}
                    width={width}
                    titleFontSize={titleFontSize}
                    hideIcon={hideIcon}
                />
            </>
        )
    },
}
