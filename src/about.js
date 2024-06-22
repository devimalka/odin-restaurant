import { LoremIpsum, loremIpsum } from "lorem-ipsum";

let about = function (){
    
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML = "about us";

    let p = document.createElement('p');
    p.innerHTML = loremIpsum({count: 50, format: "plain", paragraphLowerBound: 3, sentenceLowerBound: 4, sentenceUpperBound: 10, suffix: "\n", units: "sentences"})

    div.appendChild(h1);
    div.appendChild(p);
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    contentDiv.appendChild(div);
    
}

export { about}