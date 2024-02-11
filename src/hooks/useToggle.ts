import { useState } from 'react'

export default function useToggle(defaultActive = false): [boolean, () => void] {
   const [isActive, setIsActive] = useState(defaultActive)

   function toggle() {
      setIsActive(!isActive)
   }

   return [isActive, toggle]
}
