import React, { useState } from 'react'
import LargePressableInput from '../../../../atoms/input/LargePressableInput'

const NotesInput = (): React.ReactElement => {
	const [text, setText] = useState('')

	const onSave = () => {
		// save text!
	}
	return (
		<LargePressableInput
			placeholder="Write some notes..."
			multiline
			onChangeText={setText}
			value={text}
			onBlur={onSave}
		/>
	)
}

export default NotesInput
