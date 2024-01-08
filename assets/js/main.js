const button = document.getElementById("bottone")

button.addEventListener("click", function () {

    let nome = document.getElementById("risultatoNome").value

    let kilometri = parseFloat(document.getElementById("kilometri").value)
    let anniUtente = parseInt(document.getElementById("eta").value)
    let totaleRisultato = document.getElementById("totaleRisultato")
    


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
})