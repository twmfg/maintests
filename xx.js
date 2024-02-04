const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

const toggleNav = () => {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-in-1');
        nav2.classList.remove('slide-out-2');
        nav2.classList.add('slide-in-2');
        nav3.classList.remove('slide-out-3');
        nav3.classList.add('slide-in-3');
        nav4.classList.remove('slide-out-4');
        nav4.classList.add('slide-in-4');
        nav5.classList.remove('slide-out-5');
        nav5.classList.add('slide-in-5');
        navAnimation('out', "in");
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
        navAnimation('in', "out");
    }
};
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav1.addEventListener('click', toggleNav);
});



function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds} ${currentTime.getHours() < 12 ? 'AM' : 'PM'}`;
    document.getElementById('time').textContent = time;
}
updateTime();
setInterval(updateTime, 1000);


const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert('Thank you for your interest. We will notify you when our website is ready.')
});


