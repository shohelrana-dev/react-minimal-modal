To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-minimal-modal
    $ yarn add react-minimal-modal

### [Live demo](https://react-minimal-modal.netlify.app)

## Examples

Here is a simple example of react-minimal-modal being used in a component:

```jsx
import Modal, { useToggle } from 'react-minimal-modal'

export default function Component() {
    const [isOpen, toggle] = useToggle()

    return (
        <div>
            <button onClick={toggle}>Open Modal</button>
            <Modal
                visible={isOpen}
                toggle={toggle}
                title="Hello"
            >
                <div>I am a modal</div>
            </Modal>
        </div>
    )
}
```