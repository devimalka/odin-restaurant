import Burger from './burger.jpg';

let createHomePage = function (){
    let contentDiv = document.getElementById("content");
    if(contentDiv){
        contentDiv.innerHTML = "";
    }
    let landing = document.createElement('div');
    landing.classList.add("landing");
    let burgerImage = new Image();
    burgerImage.src = Burger;
    landing.appendChild(burgerImage);
    contentDiv.appendChild(landing);
}

export {createHomePage}