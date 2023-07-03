const totKm = prompt("Inserisci quanti chilometri vuoi percorrere");
const age = prompt("Inserisci la tua etá");
let priceTiket = (parseInt(totKm) * 0.21).toFixed(2);

if (parseInt(age) < 18) {
    console.log((priceTiket - (priceTiket * 20) / 100 ));
} else if (parseInt(age) >= 65) {
    console.log((priceTiket - (priceTiket * 40) / 100 ));
} else {
    console.log(priceTiket);
}