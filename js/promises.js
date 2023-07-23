// GLOBAL VARIABLES
const tbody = document.querySelector("#tbody");
const searchButton = document.getElementById("searchButton");
const characterIdInput = document.getElementById("characterId");
const deleteButton = document.querySelector("#deleteButton")
// FUNCTION TO REMOVE CHARACTER CARD (MARK FOR DELETION)
const markCharacterForDeletion = (id) => {
    const cardRow = document.querySelector(`[data-id="${id}"]`);
    cardRow.empty()
};

// FUNCTION TO CREATE CHARACTER CARD
const createCharacterCard = (person) => {
    const row = document.createElement("tr");
    row.classList.add("card-row");
    row.dataset.id = person.id;
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
        <td><button class="delete-button">delete</button></td>
    `;

    // Add event listener to the delete button
    const deleteButton = row.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        const characterId = parseInt(person.id);
        if (characterId && characterId >= 1) {
            markCharacterForDeletion(characterId);
        }
    });

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



// EVENTS
searchButton.addEventListener("click", () => {
    const characterId = parseInt(characterIdInput.value);
    if (characterId && characterId >= 1) {
        getPerson(characterId).then((person) => {
            createCharacterCard(person);
        });
    }
});
deleteButton.addEventListener("click",()=>{
    markCharacterForDeletion()
})