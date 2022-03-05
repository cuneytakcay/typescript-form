const root = document.getElementById('root') as HTMLDivElement

// Switch button (Dark/Light Mode)
const switchBtn = root.querySelector('.switch') as HTMLButtonElement

switchBtn.addEventListener('click', () => {
	root.classList.toggle('dark')
})

// Form handling
const msgBox = root.querySelector('.msg-box') as HTMLDivElement
const form = root.querySelector('form') as HTMLFormElement
const firstName = form.querySelector('[name="firstName"]') as HTMLInputElement
const lastName = form.querySelector('[name="lastName"]') as HTMLInputElement
const email = form.querySelector('[name="email"]') as HTMLInputElement
const password = form.querySelector('[name="password"]') as HTMLInputElement
const confirmPassword = form.querySelector(
	'[name="confirmPassword"]'
) as HTMLInputElement
const fields = form.querySelectorAll<HTMLDivElement>('.field')
const inputs = form.querySelectorAll<HTMLInputElement>('input')
const errorContainers = form.querySelectorAll<HTMLDivElement>('.error')
const submit = form.querySelector('[type="submit"]') as HTMLButtonElement
let errorCont: HTMLDivElement
let hasError: boolean = false

submit.addEventListener('click', e => {
	e.preventDefault()

	// First name cannot be empty
	if (firstName.value.trim() === '') {
		hasError = true
		errorCont = firstName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Please enter your first name</p></div>'
	}
	// Last name cannot be empty
	if (lastName.value.trim() === '') {
		hasError = true
		errorCont = lastName
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Please enter your last name</p></div>'
	}
	// Must be a valid email address
	if (!email.value.match(/\S+@\S+\.\S+/)) {
		hasError = true
		errorCont = email
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Enter a valid email address</p></div>'
	}
	// Must be at least 6 characters long, include at least one number and one special character
	if (
		!password.value.match(
			/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
		)
	) {
		hasError = true
		errorCont = password
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><ul><li><span>&#x2716;</span> Must be at least 6 characters long</li><li><span>&#x2716;</span> Must have at least 1 numeric character</li><li><span>&#x2716;</span> Must have at least one special character</li></ul></div>'
	}
	// Must match the password
	if (confirmPassword.value !== password.value) {
		hasError = true
		errorCont = confirmPassword
			.closest('.input')
			?.querySelector('.error') as HTMLDivElement
		errorCont.innerHTML =
			'<div class="error-inner"><p><span>&#x2716;</span> Passwords do not match</p></div>'
	}

	if (hasError) return

	errorContainers.forEach(cont => (cont.innerHTML = ''))
	inputs.forEach(input => (input.value = ''))
	fields.forEach(field => field.classList.remove('moved-label'))
	hasError = false
	confirm('Well done! Sign up complete hypothetically.')
})

// When the input field is focused, or filled, move the labels out
// clear error for that field if it exists

inputs.forEach(input => {
	const parent = input.parentNode as HTMLDivElement

	input.addEventListener('focus', () => {
		parent.classList.add('moved-label')
		errorContainers.forEach(cont => (cont.innerHTML = ''))
		hasError = false
	})

	input.addEventListener('blur', e => {
		if (input.value === '') parent.classList.remove('moved-label')
	})
})
