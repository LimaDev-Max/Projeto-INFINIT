const gerenciamento = document.getElementById('gerenciamento')
const modo = document.getElementById('modo')
const proximo = document.getElementById('proximo')
const modoDiv = document.getElementById('modoDiv')
const taxas = [
    {
        "DAMABRANCO": [0.1142, 0.1344, 0.1499],
        "CRASH5": [0.1535, 0.1635, 0.1785],
        "CRASH10": [0.1035, 0.1235, 0.1375],
        "CRASH25": [0.905, 0.1085, 0.1187]
    }
]


const rGerenciamento = gerenciamento.addEventListener("change", e => {
    modoDiv.style.display = "block"
    const value = e.target.value
})

console.log(taxas[0].DAMABRANCO);

proximo.addEventListener("click", (e) => {
    e.preventDefault()
    const vGerenciamento = gerenciamento.value
    const vModo = modo.value
    const resultado = taxas[0]
    console.log(vGerenciamento,
        vModo)
    console.log(resultado.vGerenciamento)
})

modo.addEventListener("change", e => {
    const value = e.target.value
    return value
})