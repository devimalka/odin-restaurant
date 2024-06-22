import './style.css';
import { createHomePage } from './homepage';
import { about } from './about';
import { createContact } from './contact';

function createBaseHeader() {
    let header = document.createElement('header');
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    let links = ['home', 'about', 'contact us'];
    for (let i = 0; i < 3; i++) {
        var li = document.createElement('button');
        li.innerHTML = links[i];
        li.setAttribute('id',links[i]);
        navbar.appendChild(li);
    }
    header.appendChild(navbar);
    document.body.appendChild(header);
    
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('id','content')
    document.body.appendChild(contentDiv);
}

function clearContent(){
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}
function home(){
    clearContent();
    let contentDiv = document.getElementById('content');
    let h1 = document.createElement('h1');
    h1.innerHTML = "home";
    contentDiv.appendChild(h1);
}


createBaseHeader();
let homebutton = document.getElementById("home");
homebutton.addEventListener("click",createHomePage);
let aboutbutton = document.getElementById("about");
aboutbutton.addEventListener("click",about);
let contactbutton = document.getElementById('contact us');
contactbutton.addEventListener('click',createContact);
createHomePage();