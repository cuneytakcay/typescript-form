// const root: HTMLElement | null = document.getElementById('root')
const root = document.getElementById('root') as HTMLElement
const switchBtn = root.querySelector('.switch') as HTMLButtonElement

switchBtn.addEventListener('click', () => {
	root.classList.toggle('dark')
})
