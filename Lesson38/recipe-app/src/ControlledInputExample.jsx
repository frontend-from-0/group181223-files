import { useState } from 'react';

export const ControlledInput = () => {
	const [emailInput, setEmailInput] = useState('anna@gmail.com');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Form submited with the following data: email=', emailInput);
		setEmailInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='email'>Controlled email input</label>
			<input
				type='email'
				id='email'
				name='email'
				// Value and onChange should be used in Controlled inputs
				value={emailInput}
				onChange={(e) => setEmailInput(e.target.value)}
				placeholder='name@gmail.com'
			/>
			<input type='submit' value='Update email' />
		</form>
	);
};