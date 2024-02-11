To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save react-minimal-modal
    $ yarn add react-minimal-modal

### [Live demo](https://react-minimal-modal.netlify.app)

## Examples

Here is a simple example of react-minimal-modal being used in a component:

```jsx
import { useState } from 'react'
import Modal from 'react-minimal-modal'

export default function Component() {
   const [isOpen, setIsOpen] = useState()

   return (
      <div>
         <button onClick={() => setIsOpen(true)}>Open Modal</button>

         <Modal open={isOpen} onOpenChange={setIsOpen} title="Hello">
            <div>I am a modal</div>
         </Modal>
      </div>
   )
}
```
