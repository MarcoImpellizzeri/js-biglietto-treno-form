const userNameInputElement = document.querySelector("#user-name");
const totKmInputElement = document.querySelector("#user-Km");
const ageInputElement = document.querySelector("#user-age");
const buttonGen = document.querySelector("#generate-tiket")


buttonGen.addEventListener("click", function () {

    const username = userNameInputElement.value
    const totKm = totKmInputElement.value
    const age = ageInputElement.value
    let priceTiket = (totKm * 0.21);

    if (parseInt(age) < 18) {
        document.getElementById("tot-price").innerHTML = (priceTiket - (priceTiket * 20) / 100).toFixed(2);
        ((priceTiket - (priceTiket * 20) / 100));
    } else if (parseInt(age) >= 65) {
        document.getElementById("tot-price").innerHTML = ((priceTiket - priceTiket * 40) / 100).toFixed(2);
        console.log((priceTiket - (priceTiket * 40) / 100));
    } else {
        document.getElementById("tot-price").innerHTML = priceTiket.toFixed(2);
        console.log(priceTiket);
    }
})