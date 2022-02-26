var root = document.getElementById('root')
if (root) {
	var verifiedRoot_1 = root
	var switchBtn = root.querySelector('.switch')
	if (switchBtn) {
		var verifiedSwitchBtn = switchBtn
		verifiedSwitchBtn.addEventListener('click', function () {
			verifiedRoot_1.classList.toggle('dark')
		})
	}
}
