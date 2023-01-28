//logo not draggable
const logo = document.querySelector('#logo');
const logoFooter = document.querySelector('#logo-footer');
const section1Text1 = document.querySelector(".section1-text h1")
const section1Text2 = document.querySelector(".section1-text h3")
const section2Text1 = document.querySelector(".s2Left h2")
const section2Text2 = document.querySelector(".s2Left h3")
const copyright = document.querySelector("#footerMiddleText2 p")


logo.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
logoFooter.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
section1Text1.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
section1Text2.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
section2Text1.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
section2Text2.addEventListener('mousedown', function(event) {
    event.preventDefault();
})
copyright.addEventListener('mousedown', function(event) {
    event.preventDefault();
})


//
const headerBar = document.querySelector('.bar')
const showcase = document.querySelector('#showcase')

const Navs = document.querySelectorAll('.nav-ul li');
for (let i = 0; i < Navs.length; i++) {
    Navs[i].addEventListener('mouseover', function() {
        headerBar.classList.add("Nav-shrink")
    });
    Navs[i].addEventListener('mouseleave', function() {
        headerBar.classList.remove("Nav-shrink")
    });
}
