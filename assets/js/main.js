const button = document.getElementById("bottone")
const buttonAnnulla = document.getElementById("bottoneAnnulla");

button.addEventListener("click", function () {

    let nome = document.getElementById("risultatoNome").value

    let kilometri = parseFloat(document.getElementById("kilometri").value)
    let anniUtente = parseInt(document.getElementById("eta").value)


    let totaleRisultato = document.getElementById("totaleRisultato")

    let carozza = document.getElementById("carozzaAssegnata")
    carozza = Math.floor((Math.random() * (0, 8 + 1) + 0))

    let codice = document.getElementById("codiceCp")
    codice = Math.floor((Math.random() * (10000, 100000 + 0) + 0))



    const tariffaKilometro = 0.21
    const totale = kilometri * tariffaKilometro

    if (anniUtente < 18) {
        totaleRisultato.textContent = `${((totale * 0.8).toFixed(2))}€`
        console.log(totale)

    } else if (anniUtente >= 64) {

        totaleRisultato.textContent = `${((totale * 0.6).toFixed(2))}€`
        console.log(totale)
    } else {

        totaleRisultato.textContent = `${((totale).toFixed(2))}€`
        console.log(totale)

    }


    document.getElementById("risultatoNomeOutput").textContent = nome

    document.getElementById("carozzaAssegnata").textContent = carozza

    document.getElementById("codiceCp").textContent = codice
})

buttonAnnulla.addEventListener("click", function () {
    
    document.getElementById("risultatoNome").value = "";
    document.getElementById("kilometri").value = "";
    document.getElementById("eta").value = "";
});