let bodies = [];
const baseURL = "https://majazocom.github.io/Data/solaris.json";

getData();

//Functionality for search bar
let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", filterBodies);

async function getData() {
  try {
    const response = await fetch(baseURL);
    bodies = await response.json();

    renderDataToUI();
  } catch (error) {
    console.log("There was an error ", error);
  }
}

function renderDataToUI() {
  let solarsystemContainer = document.querySelector(".solarsystem-container");

  bodies.forEach((body) => {
    //Create a div for each object/body in bodies
    let bodyEl = document.createElement("div");

    //Add classname and id for styling and functionality
    bodyEl.classList.add("body");
    bodyEl.classList.add(body.name);
    bodyEl.setAttribute("id", body.id);

    bodyEl.innerHTML = `
      <p class="body-name">${body.name}</p>
    `;

    //Append each body to the solarsystem container
    solarsystemContainer.appendChild(bodyEl);

    body.HTML = bodyEl;
  });

  //Add an eventlistener to each body
  eventlistenerToBody();
}

function eventlistenerToBody() {
  //Select all bodies and make them clickable
  let clickableItems = document.querySelectorAll(".body");

  clickableItems.forEach((clickableItem) => {
    clickableItem.addEventListener("click", () => {
      //Redirects to body.html to present data of selected body on click
      let index = clickableItem.id;
      //Store clicked object/body in localstorage
      localStorage.setItem("body", JSON.stringify(bodies[index]));
      window.location.href = "body.html";
    });
  });
}

//Function that filters (toggles the hide class) bodies depending och the search bar input
function filterBodies() {
  const value = searchInput.value.toLowerCase();

  bodies.forEach((body) => {
    const match = body.name.toLowerCase().includes(value);
    body.HTML.classList.toggle("hide", !match);

    if (match) {
      body.HTML.classList.add("higlight"); //Adds styling for each body in search result
    }

    if (value === "") {
      body.HTML.classList.remove("higlight"); //If search bar is empty there is no styling, and all bodies are visible
    }
  });
}
