////////////// GLOBAL VARIABLES
const tbody = document.querySelector("#tbody");
const searchButton = document.getElementById("searchButton");
const characterIdInput = document.getElementById("characterId");
// const deleteButton = document.querySelector("#deleteButton")
// const reDeleteButton = document.getElementById("reDeleteButton");
const CharacterCardId = document.querySelector("#createCharacterCard")

// FUNCTION TO REMOVE CHARACTER CARD (MARK FOR DELETION)
// const markCharacterForDeletion = (id) => {
//     const cardRow = document.querySelector(`[data-id="${id}"]`);
//     cardRow.empty()
// };

////////////// FUNCTION TO CREATE CHARACTER CARD
const createCharacterCard = (person) => {
    const row = document.createElement("tr")
    row.classList.add("card-row");
    // row.setAttribute("id", "createCharacterCard")
    row.dataset.id = person.id;
    // CharacterCardId.classList.add("backGroundColorPink");
    row.innerHTML = `
        <td>
            <div class="d-flex gap-10 align-center">
                <img class="character-image" src="https://via.placeholder.com/50x50">
                <p class="character-name">${person.name}</p>
            </div>
        </td>
        <td class="card-text">${person.height}</td>
        <td class="card-text">${person.mass}</td>
        <td class="card-text">${person.hair_color}</td>
        <td class="card-text">${person.skin_color}</td>
        <td class="card-text">${person.eye_color}</td>
        <td class="card-text">${person.birth_year}</td>
        <td class="card-text">${person.gender}</td>
    `;
    tbody.appendChild(row);


};


const getPerson = (id = 1) => {
    const url = `https://swapi.dev/api/people/${id}/`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error.message);
        });
};


////////////// EVENTS

searchButton.addEventListener("click", () => {
    console.log("testing");
});

searchButton.addEventListener("click", () => {
    const characterId = parseInt(characterIdInput.value);
    if (characterId && characterId >= 1) {
        getPerson(characterId).then((person) => {
            createCharacterCard(person);
        });
    }
});
// reDeleteButton.addEventListener("click", () => {
//     this.style("display", "none")
// });
// deleteButton.addEventListener("click", () => {
//     this.style("display", "none")
// });

// tbody.appendChild(row);

////////////// IIFE
(() => {
    getPerson(1).then((person) => {
        console.log(person);
    });
    createCharacterCard()





})();

