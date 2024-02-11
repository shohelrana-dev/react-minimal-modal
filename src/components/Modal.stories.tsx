import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import useToggle from '../hooks/useToggle'
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
         </div>
      ),
      titleFontSize: 22,
      position: 'center',
      width: 550,
      hideIcon: false,
   },
   render: ({ title, children, footer, position, width, hideIcon, open, titleFontSize }) => {
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
               footer={footer}
               position={position}
               width={width}
               titleFontSize={titleFontSize}
               hideIcon={hideIcon}
            />
         </>
      )
   },
}
