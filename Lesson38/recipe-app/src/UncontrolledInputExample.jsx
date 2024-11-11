export const UncontrolledInput = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailInputValue = e.target.elements.email.value;

		console.log('Form submited with the following data: email:', emailInputValue);
		e.target.elements.email.value = '';
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='email'>Uncontrolled email input</label>
			{
				// Only use defaultValue with uncontrolled inputs
			}
			<input
				type='email'
				id='email'
				name='email'
				// Only used in Uncontrolled inputs
				defaultValue='anna@gmail.com'
			/>
			<input type='submit' value='Update email' />
		</form>
	);
};