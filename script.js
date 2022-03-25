
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
//exibe a div do Modo Div 
const rGerenciamento = gerenciamento.addEventListener("change", e => {
    modoDiv.style.display = "block"
})

proximo.addEventListener("click", (e) => {
    // desabilita o redirecionamento automático do botão
    e.preventDefault()
    
    const vGerenciamento = gerenciamento.value
    const vModo = modo.value
    const resultado = taxas[0][vGerenciamento][vModo]
    //redireiciona somente se o select modo estiver selecionado
    if(modo.value >=0 ){
        window.location = `/index2.html?tax=${resultado}`
    }
})

modo.addEventListener("change", e => {
    const value = e.target.value
    return value
})

