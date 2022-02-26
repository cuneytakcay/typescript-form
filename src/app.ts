const root: HTMLElement | null = document.getElementById('root')
const switchBtn: HTMLElement | null = document.querySelector('.switch')

if (root && switchBtn) {
	const verifiedRoot: HTMLElement = root
	const verifiedSwitchBtn: HTMLElement = switchBtn

	verifiedSwitchBtn.addEventListener('click', () => {
		verifiedRoot.classList.toggle('dark')
	})
}
