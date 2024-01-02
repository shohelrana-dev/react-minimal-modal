import { useState } from 'react'

export default function useModal(defaultVisibility = false) {
    const [isVisible, setIsVisible] = useState<boolean>(defaultVisibility)

    function toggle() {
        setIsVisible(!isVisible)
    }

    return { toggle, isVisible }
}
