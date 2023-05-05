let carros = []
let outLista = document.getElementById('outLista')


function adicionarCarros(){
    let inModelo = document.getElementById('inModelo')
    let inPreco = document.getElementById('inPreco')
    let modelo = inModelo.value
    let preco = Number(inPreco.value)

    //Validação
    if(modelo.trim().length == 0){
        alert('Preencha o Modelo do Carro!')
        inModelo.focus()
        return
    }

    if(isNaN(preco) || preco <= 0){
        alert('Preço Inválido! Digite um novo Valor!')
        inPreco.focus()
        return
    }

    //Add no Objeto
    carros.push({Modelo: modelo, Preco: preco})
    
    //Limpar Campo
    limpar()

    //Chama a função Listar
    listarCarros()
    
}

function listarCarros(){
    //Validação 
    if(carros.length == 0){
        alert('Não há Modelos Encontrados!')
    }

    let resposta = ""
    outLista.textContent = ""
    
    
    for(let i = 0; i < carros.length; i++){
        resposta = resposta +  carros[i].Modelo + "  -  R$ " + carros[i].Preco +"\n"
    }

    outLista.textContent = resposta
    

}

function filtrarPreco(){
    
    let maximo = Number(prompt("Qual o Valor Máximo que o Cliente Deseja Pagar?"))
    let lista = ""
    for(let i = 0; i < carros.length; i++){
       
        if(carros[i].Preco <= maximo){
            lista += carros[i].Modelo + "  -  R$ " + carros[i].Preco +"\n"
        } 
    }

    if (lista == ""){
        outLista.textContent = "Não Há Carros com Valor Abaixo(ou Igual) a  R$" +  maximo.toFixed(2)
    } else{
        outLista.textContent = `Carros até R$ ${maximo.toFixed(2)} \n___________________________________\n\n${lista}`
    }


}

function limpar(){
  
    inModelo.value = ""
    inPreco.value = ""
    inModelo.focus()
}

let btAdicionar, btListar, btFiltrar
btAdicionar = document.getElementById('btAdicionar')
btListar = document.getElementById('btListar')
btFiltrar = document.getElementById('btFiltrar')

btAdicionar.addEventListener('click', adicionarCarros)
btListar.addEventListener('click', listarCarros)
btFiltrar.addEventListener('click', filtrarPreco)