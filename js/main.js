const userNameInputElement = document.querySelector("#user-name");
const totKmInputElement = document.querySelector("#user-Km");
const ageInputElement = document.querySelector("#user-age");
const buttonGen = document.querySelector("#generate-tiket")


buttonGen.addEventListener("click", function () {
    const username = userNameInputElement.value
    const totKm = totKmInputElement.value
    const age = ageInputElement.value
    let priceTiket = (totKm * 0.21);
    const minVagon = 1;
    const maxVagon = 10;
    var randomNumVagon = Math.floor(Math.random() * (maxVagon - minVagon + 1)) + minVagon;
    const minCode = 9999;
    const maxCode = 100000;
    var randomNumCode = Math.floor(Math.random() * (maxCode - minCode + 1)) + minCode;

    document.getElementById("vagon").innerHTML = randomNumVagon
    document.getElementById("code-cp").innerHTML = randomNumCode
    document.getElementById("user-name").innerHTML = username;


    if (parseInt(age) < 18) {
        document.getElementById("offer").innerHTML = `Sconto 20%`;
        document.getElementById("tot-price").innerHTML = (priceTiket - (priceTiket * 20) / 100).toFixed(2);
    } else if (parseInt(age) >= 65) {
        document.getElementById("offer").innerHTML = `Sconto 40%`;
        document.getElementById("tot-price").innerHTML = ((priceTiket - priceTiket * 40) / 100).toFixed(2);
    } else {
        document.getElementById("tot-price").innerHTML = priceTiket.toFixed(2);
    }
})