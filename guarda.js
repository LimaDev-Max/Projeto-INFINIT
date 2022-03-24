BOTOES WIN E LOSS E PROXIMO
*/


let acertouOuErrou;
let win = document.getElementById('v')
win.addEventListener('click', v)
function v() {
    if (win.value === 'WIN') {
        alert('Acertou')
        acertouOuErrou = true
        proximaEntrada = entradaInicial.toFixed(2)
        resultado.innerText = proximaEntrada
        contador = 0
    }
}


let loss = document.getElementById('y')
loss.addEventListener('click', y)
function y() {
    if (loss.value === 'LOSS') {
        contador++
        window.alert('ERROU ' + contador)
        acertouOuErrou = false
        if (acertouOuErrou === false) {

            if (escolhaDoCliente >= 1) {
                if (escolhaDoCliente === 1) {
                    taxa = 11.33 / 100
                    armazendaOrdem = 2 * 2
                    resultado.innerText = armazendaOrdem.toFixed(2)

                }
                else if (escolhaDoCliente === 2) {
                    taxa = 13.34 / 100
                    proximaEntrada = (entradaInicial * taxa) + entradaInicial
                    resultado.innerText = proximaEntrada.toFixed(2)
                }
                else if (escolhaDoCliente === 3) {
                    taxa = 14.99 / 100
                    proximaEntrada = (entradaInicial * taxa) + entradaInicial
                    resultado.innerText = proximaEntrada.toFixed(2)
                }
            }
        }
    }
}



