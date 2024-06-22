let createContact = function(){
    let contentDiv = document.getElementById('content');
    if(contentDiv){
        contentDiv.innerHTML = "";
    }
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = "Contact Us";
    content.append(h1);
    contentDiv.appendChild(content);

}

export {createContact}