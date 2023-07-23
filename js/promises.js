////////////// GLOBAL VARIABLES
const tbody = document.querySelector("#tbody");
const searchButton = document.getElementById("searchButton");
const characterIdInput = document.getElementById("characterId");
// const reDeleteButton = document.getElementById("reDeleteButton");
const CharacterCardId = document.querySelector("#createCharacterCard")
let characterIds = []


// FUNCTION TO REMOVE CHARACTER CARD (MARK FOR DELETION)
// const markCharacterForDeletion = (id) => {
//     const cardRow = document.querySelector(`[data-id="${id}"]`);
//     cardRow.empty()
// };

////////////// FUNCTION TO CREATE CHARACTER CARD
const createCharacterCard = (person, characterId) => {
    console.log(person);
    //// if id value is included then do nothing
    if (characterIds.includes(characterId)) {
        return
    }


    const cardRow = document.createElement("tr")
    cardRow.classList.add("card-row");
    // row.setAttribute("id", "createCharacterCard")
    cardRow.dataset.id = characterId;
    // CharacterCardId.classList.add("backGroundColorPink");
    cardRow.innerHTML = `

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
        <td class="card-text">
        <button id="deleteButton-${characterId}">DELETE</button>
        </td>
      
    `;
    tbody.appendChild(cardRow);

    characterIds.push(characterId)
    // variables
    const deleteButton = document.querySelector(`#deleteButton-${characterId}`)
    deleteButton.addEventListener("click", (event) => {
        // this.style("display", "none")
        console.log(event)

        let e = event.target
        e.parentElement.parentElement.parentElement.removeChild(cardRow);
        console.log('DELETE THIS CARD')
        while (e.firstChild) {
            e.removeChild(e.firstChild);
        }
    });


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
            console.log(response);
            return response.json();
        })
        .catch(error => {
            console.log(error.message);
        });
};


////////////// EVENTS
// deleteButton.addEventListener("click", () => {
//
// });

searchButton.addEventListener("click", () => {
    console.log("testing");
    const characterId = parseInt(characterIdInput.value);
    if (characterId && characterId >= 1) {
        getPerson(characterId).then((person) => {
            createCharacterCard(person, characterId);
        });
    }
});
// reDeleteButton.addEventListener("click", () => {
//     this.style("display", "none")
// });


// tbody.appendChild(row);

////////////// IIFE
(() => {
    getPerson(1).then((person) => {
        console.log(person);
    });


})();

