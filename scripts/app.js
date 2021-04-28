//your code here
fetch("https://telephone-assessment.herokuapp.com/api/v1/contacts")
    .then(response => response.json())
    .then(json => json.data.forEach(character => {
        addToDOM(createCard(character));
    }));



function createCard(character) {
    const card = document.createElement("li");
    const image = document.createElement("img");
    const name = document.createElement("span");
    const message = document.createElement("p");
    const contact = document.createElement("a");

    image.src = character.imageURL;
    name.innerHTML = `${character.name} ${character.phone}`;
    message.innerHTML = character.message;
    contact.href = `./contact.html/character=${character.name}`
    contact.innerHTML = `Leave ${character.name} a message`;
    contact.target = "_blank"

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(message);
    card.appendChild(contact);

    return card;
}

function addToDOM(element) {
    document.querySelector("#characters").appendChild(element);
}