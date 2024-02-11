import { useState } from 'react'

export default function useToogle(initialActive = false): [boolean, () => void] {
   const [isActive, setIsActive] = useState(initialActive)

   function toggle() {
      setIsActive(!isActive)
   }

   return [isActive, toggle]
}
