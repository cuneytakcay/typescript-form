const root: HTMLElement | null = document.getElementById('root')

if (root) {
	const verifiedRoot: HTMLElement = root
	const switchBtn: HTMLElement | null = root.querySelector('.switch')

	if (switchBtn) {
		const verifiedSwitchBtn: HTMLElement = switchBtn

		verifiedSwitchBtn.addEventListener('click', () => {
			verifiedRoot.classList.toggle('dark')
		})
	}
}
