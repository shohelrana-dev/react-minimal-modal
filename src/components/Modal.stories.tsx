import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import useToggle from '../hooks/useToggle'
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
		open: false,
		title: 'Title of modal',
		children: 'Body of modal',
		titleFontSize: 22,
		position: 'center',
		width: 550,
		hideIcon: false,
	},
	render: ({ title, children, position, width, hideIcon, open, titleFontSize }) => {
		const [isOpen, toggle] = useToggle(open)

		useEffect(() => {
			if (open !== isOpen) {
				toggle()
			}
		}, [open])

		return (
			<>
				<button onClick={toggle}>Open Modal</button>
				<Modal
					open={isOpen}
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
