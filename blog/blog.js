let ajoutButton = document.getElementById("ajout");
let form = document.getElementById("form");
let close = document.getElementById("close");
let posts = document.getElementById("posts");

ajoutButton.addEventListener("click", () => {
    form.style.visibility = "visible";
});

form.addEventListener("submit", (e) => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let file = document.getElementById("file").value;

    //appeler la date
    let date = new date();
      let datefr = date.tolocaledatestring("fr-FR", {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
      });

   

    //creer les elements du dom
    let divElement = createElement("div");
    let spanElement = createElement("span");
    let pElement = createElement("p");
    let imgElement = createElement("img");
    let h2Element = createElement("h2");

    h2Element.innerHTML = titre;
    spanElement.innerHTML = datefr;
    pElement.innerHTML = description;
    imgElement.inner.src = file;
    
    divElement.appendChild(h2Element);
    divElement.appendChild(spanElement);
    divElement.appendChild(pElement);
    divElement.appendChild(imgElement);

    posts.appendChild(divElement);
    form.reset();
    form.style.visibility = "hidden";
});

close.addEventListener('click', () => {
  form.style.visibility = 'hidden';
});