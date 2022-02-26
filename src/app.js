// const root: HTMLElement | null = document.getElementById('root')
var root = document.getElementById('root');
var switchBtn = root.querySelector('.switch');
switchBtn.addEventListener('click', function () {
    root.classList.toggle('dark');
});
