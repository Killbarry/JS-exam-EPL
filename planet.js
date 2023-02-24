renderObjectToUI();

function renderObjectToUI() {
  let body = JSON.parse(localStorage.getItem("body"));
  let objectContainer = document.querySelector(".body-section");

  objectContainer.innerHTML = `
        <section>
            <h1>${body.name}</h1>
            <h2>${body.latinName}</h2>
            <p>${body.desc}</p>
        </section>
        <section class="body-desc">
            <section>
                <h3>Omkrets <span>${body.circumference} km</span></h3>
                <h3>Max temperatur <span>${body.temp.day} C</span></h3>
                <h3>Dygnslängd <span>${body.rotation} dygn på jorden</span></h3>
            </section>
            <section>
                <h3>KM från solen <span>${body.distance} km</span></h3>
                <h3>Min temperatur <span>${body.temp.night} C</span></h3>
                <h3>Årslängd <span>${body.orbitalPeriod} dygn på jorden</span></h3>
            </section>
        </section>
        <section>
            <H3>Månar <span>${body.moons
              .map(
                (moon) => `<li>${moon}
            </li>`
              )
              .join("|")}</span></H3>
        </section>
  `;
}
