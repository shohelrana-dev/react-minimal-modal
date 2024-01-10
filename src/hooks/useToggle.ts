import { useState } from 'react'

export default function useToggle(defaultActivity = false): [boolean, () => void] {
	const [isActive, setIsActive] = useState(defaultActivity)

	function toggle() {
		setIsActive(!isActive)
	}

	return [isActive, toggle]
}
