const phoneRegex = /^\+?9?0?\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formElement = document.getElementById('myForm');
const ageElement = document.getElementById('age');

formElement.addEventListener('submit', (e) => {
	e.preventDefault();

	let isValid = true;

	const nameElement = document.getElementById('name');

	if (nameElement.value.trim().length === 0) {
		document.getElementById(`nameError`).innerText = "Name can't be empty";
		isValid = false;
	} else if (nameElement.value.trim().length <= 2) {
		document.getElementById(`nameError`).innerText =
			'Name should be at least two characters';
		isValid = false;
	} else {
		document.getElementById('nameError').innerText = '';
	}

	const surnameElement = document.getElementById('surname');
	if (surnameElement.value.trim().length === 0) {
		document.getElementById(`surnameError`).innerText =
			"Surname can't be empty";
		isValid = false;
	} else if (surnameElement.value.trim().length <= 2) {
		('');
		document.getElementById(`surnameError`).innerText =
			'Surname should be at least two characters';
		isValid = false;
	} else {
		document.getElementById('surnameError').innerText = '';
	}

	const emailElement = document.getElementById('email');
	if (!emailRegex.test(emailElement.value.trim())) {
		document.getElementById(`emailError`).innerText =
			'Please enter a valid email address';
		isValid = false;
	} else {
		document.getElementById('emailError').innerText = '';
	}

	const ageElement = document.getElementById('age');
	const ageValue = parseInt(ageElement.value);
	console.log(typeof ageValue);
	const ageError = document.getElementById('ageError');
	if (
		ageValue < 1 ||
		ageValue > 150 ||
		isNaN(ageValue) ||
		typeof ageValue !== 'number'
	) {
		ageError.innerText = 'Please enter a valid age between 1 and 150.';
		isValid = false;
	} else if (ageValue > 1 && ageValue < 150) {
		ageError.innerText = '';
	}
	const phoneElement = document.getElementById('phone');
	if (!phoneRegex.test(phoneElement.value.trim())) {
		document.getElementById('phoneError').innerText =
			'Please enter a valid phone number';
		isValid = false;
	} else {
		document.getElementById('phoneError').innerText = '';
	}

	if (isValid) {
		console.log('Form is valid');
    const formData = {
      name: nameElement.value.trim(),
      surname: surnameElement.value.trim(),
      email: emailElement.value.trim(),
      age: ageValue,
      phone: phoneElement.value.trim()
    }
		console.table(formData);
    
    // In real life, you'd do something like sending an API request to some endpoint with the form data.
	}
});
