var root = document.getElementById('root');
var switchBtn = document.querySelector('.switch');
if (root && switchBtn) {
    var verifiedRoot_1 = root;
    var verifiedSwitchBtn = switchBtn;
    verifiedSwitchBtn.addEventListener('click', function () {
        verifiedRoot_1.classList.toggle('dark');
    });
}
