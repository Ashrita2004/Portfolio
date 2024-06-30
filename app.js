let selectors = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');
let menuicon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');
let header = document.querySelector('header');


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


window.onscroll = () => {
    menuicon.classList.remove('bx-x');
    nav.classList.remove('active');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });

}

