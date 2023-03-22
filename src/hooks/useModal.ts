import { useState } from 'react'

export default function useModal(){
    const [isVisible, setIsVisible] = useState<boolean>( false )

    function toggle(){
        setIsVisible( ! isVisible )
    }

    return { toggle, isVisible }
}