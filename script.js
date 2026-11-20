// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  const getNavn = params.get("navn");
  const getEmail = params.get("email");
  const getTelefon = params.get("telefon");
  const skrivNavn = document.querySelector(".skriv-navn");
  const skrivEmail = document.querySelector(".skriv-email");
  const skrivTelefon = document.querySelector(".skriv-telefon");
  skrivNavn.textContent = getNavn;
  skrivEmail.textContent = getEmail;
  skrivTelefon.textContent = getTelefon;
  const getDato = params.get("dato");
  const getAntalPersoner = params.get("antal-personer");
  const getPakke = params.get("pakke");
  const skrivDato = document.querySelector(".skriv-dato");
  const skrivAntalPersoner = document.querySelector(".skriv-antal-personer");
  const skrivPakke = document.querySelector(".skriv-pakke");
  skrivDato.textContent = getDato;
  skrivAntalPersoner.textContent = getAntalPersoner;
  console.log(getAntalPersoner);
  skrivPakke.textContent = getPakke;
  console.log(getPakke);
  let pris;
  if (getPakke === "All-Inclusive (499 kr.)") {
    pris = 499;
  } else if (getPakke === "Alkoholfri (379 kr.)") {
    pris = 379;
  }
  const skrivPris = document.querySelector(".skriv-pris");
  skrivPris.textContent = pris * getAntalPersoner;

  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

const svgPage = document.querySelector(".svg-page");

if (svgPage) {
  document
    .querySelector("#vaelg-hvidvin")
    .addEventListener("toggle", vaelgHvidvin);

  function vaelgHvidvin() {
    console.log("vælgehvidvin");
    const hvidvinSvg = document.querySelector(".hvidvin");
    hvidvinSvg.style.transformOrigin = "12% 23%";
    if (hvidvinSvg.style.rotate === "-90deg") {
      hvidvinSvg.style.rotate = "0deg";
    } else {
      hvidvinSvg.style.rotate = "-90deg";
    }
    hvidvinSvg.style.transition = "rotate 1s";
  }

  document
    .querySelector("#vaelg-rosevin")
    .addEventListener("toggle", vaelgRosevin);

  function vaelgRosevin() {
    const rosevinSvg = document.querySelector(".rosevin");
    rosevinSvg.style.transformOrigin = "47% 23%";
    if (rosevinSvg.style.rotate === "-90deg") {
      rosevinSvg.style.rotate = "0deg";
    } else {
      rosevinSvg.style.rotate = "-90deg";
    }
    rosevinSvg.style.transition = "rotate 1s";
  }

  document
    .querySelector("#vaelg-dessertvin")
    .addEventListener("toggle", vaelgDessertvin);

  function vaelgDessertvin() {
    const dessertvinSvg = document.querySelector(".dessertvin");
    dessertvinSvg.style.transformOrigin = "86% 45%";
    if (dessertvinSvg.style.rotate === "-90deg") {
      dessertvinSvg.style.rotate = "0deg";
    } else {
      dessertvinSvg.style.rotate = "-90deg";
    }
    dessertvinSvg.style.transition = "rotate 1s";
  }

  document
    .querySelector("#vaelg-portvin")
    .addEventListener("toggle", vaelgPortvin);

  function vaelgPortvin() {
    const portvinSvg = document.querySelector(".portvin");
    portvinSvg.style.transformOrigin = "47% 73%";
    if (portvinSvg.style.rotate === "-90deg") {
      portvinSvg.style.rotate = "0deg";
    } else {
      portvinSvg.style.rotate = "-90deg";
    }
    portvinSvg.style.transition = "rotate 1s";
  }

  document
    .querySelector("#vaelg-rodvin")
    .addEventListener("toggle", vaelgRodvin);

  function vaelgRodvin() {
    const rodvinSvg = document.querySelector(".rodvin");
    rodvinSvg.style.transformOrigin = "12% 73%";
    if (rodvinSvg.style.rotate === "-90deg") {
      rodvinSvg.style.rotate = "0deg";
    } else {
      rodvinSvg.style.rotate = "-90deg";
    }
    rodvinSvg.style.transition = "rotate 1s";
  }
}
