const root = document.getElementById('root') as HTMLDivElement

// Switch button (Dark/Light Mode)
const switchBtn = root.querySelector('.switch') as HTMLButtonElement

switchBtn.addEventListener('click', () => {
	root.classList.toggle('dark')
})

// Form handling
const form = root.querySelector('form') as HTMLFormElement
const firstName = form.querySelector('[name="firstName"]') as HTMLInputElement
const lastName = form.querySelector('[name="lastName"]') as HTMLInputElement
const email = form.querySelector('[name="email"]') as HTMLInputElement
const password = form.querySelector('[name="password"]') as HTMLInputElement
const confirmPassword = form.querySelector(
	'[name="confirmPassword"]'
) as HTMLInputElement
const submit = form.querySelector('[type="submit"]') as HTMLButtonElement
let errorCont: HTMLDivElement

submit.addEventListener('click', e => {
	e.preventDefault()

	if (firstName.value.trim() === '') {
		errorCont = firstName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Please enter your first name</p></div>'
	} else {
		errorCont = firstName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML = ''
	}

	if (lastName.value.trim() === '') {
		errorCont = lastName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Please enter your last name</p></div>'
	} else {
		errorCont = lastName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML = ''
	}

	if (!email.value.match(/\S+@\S+\.\S+/)) {
		errorCont = email
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Enter a valid email address</p></div>'
	} else {
		errorCont = email
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML = ''
	}

	if (
		!password.value.match(
			/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
		)
	) {
		errorCont = password
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><ul><li><span>&#x2716;</span> Must be at least 6 characters long</li><li><span>&#x2716;</span> Must have at least 1 numeric character</li><li><span>&#x2716;</span> Must have at least one special character</li></ul></div>'
	} else {
		errorCont = password
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML = ''
	}

	if (confirmPassword.value !== password.value) {
		errorCont = confirmPassword
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Passwords do not match</p></div>'
	} else {
		errorCont = confirmPassword
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML = ''
	}
})
