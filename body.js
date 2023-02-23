renderObjectToUI();

function renderObjectToUI() {
  //Get and parse stored object/body from localstorage
  let body = JSON.parse(localStorage.getItem("body"));

  let objectContainer = document.querySelector(".body-section");

  //Styling and structure for presenting data about body
  objectContainer.innerHTML = `
        <section>
            <h1>${body.name}</h1>
            <h2>${body.latinName}</h2>
            <p>${body.desc}</p>
        </section>
        <section class="body-desc">
            <section>
                <H3>Omkrets <span>${body.circumference} km</span></H3>
                <H3>Max temperatur <span>${body.temp.day} C</span></H3>
            </section>
            <section>
                <H3>KM från solen <span>${body.distance} km</span></H3>
                <H3>Min temperatur <span>${body.temp.night} C</span></H3>
            </section>
        </section>
        <section>
            <H3>Månar <span>${body.moons
              .map(
                //Loops through the list and creates a li-element for each moon
                (moon) => `<li>${moon}
            </li>`
              )
              .join("|")}</span></H3>
        </section>
  `;
}
