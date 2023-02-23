let bodies = [];
const baseURL = "https://majazocom.github.io/Data/solaris.json";

getData();



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
    let bodyEl = document.createElement("div");

    bodyEl.classList.add("body");
    bodyEl.classList.add(body.name);
    bodyEl.setAttribute("id", body.id);

    bodyEl.innerHTML = `
      <p class="body-name">${body.name}</p>
    `;

    solarsystemContainer.appendChild(bodyEl);

    body.HTML = bodyEl;
  });



  eventlistenerToBody();
}

function eventlistenerToBody() {
  let clickableItems = document.querySelectorAll(".body");

  clickableItems.forEach((clickableItem) => {
    clickableItem.addEventListener("click", () => {
      
      let index = clickableItem.id;
      localStorage.setItem("body", JSON.stringify(bodies[index]));
      window.location.href = "body.html";
    });
  });
}




function filterBodies() {
  const value = searchInput.value.toLowerCase();

  bodies.forEach((body) => {
    const match = body.name.toLowerCase().includes(value);
    body.HTML.classList.toggle("hide", !match);

    if (match) {
      body.HTML.classList.add("higlight"); 
    }

    if (value === "") {
      body.HTML.classList.remove("higlight");
    }
  });
}
