//HEADER
const header = document.querySelector('.header')
let btn = document.querySelector('#btn')

//ASIDE
const aside = document.querySelector('.aside')
const asideTit = document.querySelector('.aside_Tit')
const asideUser = document.querySelector('.user')
const menu = document.querySelector('.lg-menu')
let lg = document.querySelector('.list-group')
let lgi = document.querySelectorAll('.A, .B, .C, .D, .E, .F')

//MAIN
let mainTit = document.querySelector('.tit')
const main = document.querySelector('#main')
let img1 = document.getElementById('main-img1')
let img2 = document.getElementById('main-img2')

//FOOTER
const footer = document.querySelector('footer')

/***************************************************/

btn.onclick = function() {
    aside.classList.toggle('mod')
    header.classList.toggle('mod')
    asideUser.classList.toggle('mod')
    asideTit.classList.toggle('mod')
    menu.classList.toggle('mod')
    main.classList.toggle('mod')
    footer.classList.toggle('mod')
    lg.classList.toggle('mod')

    for (let i = 0; i < lgi.length; i++) {
        lgi[i].classList.toggle('mod')
    }
}

function CambiarContenido(title) {
    mainTit.innerText = title;

    switch (title) {
        case 'Customer Accounts':
            img1.src="images/customer1.png";
            img2.src="images/customer2.png";
            break;

        case 'Access Media':
            img1.src="images/media1.png";
            img2.src="images/media2.png";
            break;
            
        case 'Statistics':
            img1.src="images/statictics1.png";
            img2.src="images/statictics2.png";
            break;
        case 'Devices':
            img1.src="images/devices1.png";
            img2.src="images/devices2.png";
            break;
        case 'Tariffication':
            img1.src="images/traffication1.png";
            img2.src="images/traffication2.png";
            break;
        case 'Agents Accounts':
            img1.src="images/agents1.png";
            img2.src="images/agents2.png";
            break;

        default:
            break;
    }
}

