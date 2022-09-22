const listaDeProdutos = document.querySelector(".listaProdutos")

function listarProduto(){

    for(let i=0;i<data.length;i++){

        const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${data[i].img}`
        imgProduto.alt = `${data[i].nameItem}`

        botaoCategoria.innerText = `${data[i].tag[0]}`

        titulo.innerText = `${data[i].nameItem}`

        descricaoProduto.innerText = `${data[i].description}`

        precoProduto.innerText = `R$${data[i].value}.00`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"
        adicionarCarrinho.setAttribute("id", data[i].id)

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
    }
}

listarProduto()


//Carrinho

const produtosCarrinho = document.querySelector(".produtosCarrinho")

const quantidade = document.querySelector(".quantidade")

const valor = document.querySelector(".valorTotal")


let total = 0

listaDeProdutos.addEventListener("click", adicionarProdutoCarrinho)

let arrayCarrinho = []



function adicionarProdutoCarrinho(event){
    let btnComprar = event.target
    if(btnComprar.className==="adicionarCarrinho"){
        let idProduto = btnComprar.id
        let contador = 0

        for(let i=0;i<data.length;i++){

            if(parseInt(idProduto)==data[i].id){
                arrayCarrinho.push(data[i])
            }
        }
        contador = arrayCarrinho.length
        produtosCarrinho.innerHTML = ""
        for(let i=0;i<arrayCarrinho.length;i++){

            const divItemCarrinho = document.createElement("div")
            divItemCarrinho.className = "itemCarrinho"

            const imgCarrinho = document.createElement("img")
            imgCarrinho.className = "imagemCarrinho"

            const divInformacoes =  document.createElement("div")
            divInformacoes.className =  "informacoesCarrinho"

            const h4 = document.createElement("h4")
            h4.className = "tituloItem"

            const precoItem = document.createElement("p")
            precoItem.className = "precoItem"

            const remover = document.createElement("p")
            remover.className = "remover"

            imgCarrinho.src = `${arrayCarrinho[i].img}`
            imgCarrinho.alt = `${arrayCarrinho[i].nameItem}`

            h4.innerText = `${arrayCarrinho[i].nameItem}`

            precoItem.innerText = `R$${arrayCarrinho[i].value}.00`

            remover.innerText = "Remover produto"
            remover.setAttribute("id",i)

            produtosCarrinho.appendChild(divItemCarrinho)
            divItemCarrinho.appendChild(imgCarrinho)
            divItemCarrinho.appendChild(divInformacoes)
            divInformacoes.appendChild(h4)
            divInformacoes.appendChild(precoItem)
            divInformacoes.appendChild(remover)

            quantidade.innerText = `${contador}`
            
        }

        total =0
        for(let i=0;i<arrayCarrinho.length;i++){
            total+=arrayCarrinho[i].value
        }

        console.log(total);
        console.log(arrayCarrinho)
        valor.innerText = `R$${total}`
    }
}

produtosCarrinho.addEventListener("click",removerDoCarrinho)

function removerDoCarrinho(event){
    let btnRemover = event.target
    let contador = 0

    if(btnRemover.className==="remover"){
        idRemove = btnRemover.id

        arrayCarrinho.splice(idRemove,1)

        produtosCarrinho.innerHTML = ""
        contador = arrayCarrinho.length
        console.log(contador)
        
        for(let i=0;i<arrayCarrinho.length;i++){
            const divItemCarrinho = document.createElement("div")
            divItemCarrinho.className = "itemCarrinho"

            const imgCarrinho = document.createElement("img")
            imgCarrinho.className = "imagemCarrinho"

            const divInformacoes =  document.createElement("div")
            divInformacoes.className =  "informacoesCarrinho"

            const h4 = document.createElement("h4")
            h4.className = "tituloItem"

            const precoItem = document.createElement("p")
            precoItem.className = "precoItem"

            const remover = document.createElement("p")
            remover.className = "remover"

            imgCarrinho.src = `${arrayCarrinho[i].img}`
            imgCarrinho.alt = `${arrayCarrinho[i].nameItem}`

            h4.innerText = `${arrayCarrinho[i].nameItem}`

            precoItem.innerText = `R$${arrayCarrinho[i].value}.00`

            remover.innerText = "Remover produto"
            remover.setAttribute("id",i)

            produtosCarrinho.appendChild(divItemCarrinho)
            divItemCarrinho.appendChild(imgCarrinho)
            divItemCarrinho.appendChild(divInformacoes)
            divInformacoes.appendChild(h4)
            divInformacoes.appendChild(precoItem)
            divInformacoes.appendChild(remover)

            quantidade.innerText = `${contador}`
            
            
        }
        if(arrayCarrinho.length===0){
            quantidade.innerText = `0`
            produtosCarrinho.innerHTML = `<h1 class="carrinhoVazio">Carrinho Vazio</h1>`
        }
 
        total =0
        for(let i=0;i<arrayCarrinho.length;i++){
            total+=arrayCarrinho[i].value
        }

        console.log(total);
        console.log(arrayCarrinho)
        valor.innerText = `R$${total}`
    }
    
}

//Barra de Pesquisa e botões de navegação

const input = document.querySelector("input")
const btnBusca = document.querySelector(".pesquisar")

input.addEventListener("keyup",function(){
    let arrayResultado = []
    let resultadoBusca = input.value

    console.log("data => ", data)
    // if (resultadoBusca){
        var result = data.filter(function(item){
            console.log("item =>", item);
          return item.nameItem.toLowerCase().indexOf(resultadoBusca.toLowerCase()) > -1
        });

        console.log('RESUKT => ', result);
        arrayResultado.push(result);
        console.log("NOVO ARRAY => ", arrayResultado);
    // }

    // for(let i =0; i<data.length;i++){
    //     if(resultadoBusca===data[i].nameItem||resultadoBusca===data[i].tag[0]){
    //         arrayResultado.push(data[i])
    //     }
    // }

    listaDeProdutos.innerHTML = ""

    if(arrayResultado[0].length===0){
        listaDeProdutos.innerHTML= "<h1>Produto não encontrado</h1>"
    }
    else{

        for(let i=0;i<arrayResultado[0].length;i++){

            const divCard = document.createElement("div")
            divCard.className = "card"

            const imgProduto =  document.createElement("img")
            imgProduto.className = "imagemProduto"

            const botaoCategoria = document.createElement("button")
            botaoCategoria.className= "categoria"

            const titulo  = document.createElement("h3")
            titulo.className = "nomeProduto"
            const descricaoProduto = document.createElement("p")
            descricaoProduto.className = "descricao"
            const precoProduto  = document.createElement("strong")
            precoProduto.className = "preco"
            const adicionarCarrinho =  document.createElement("p")
            adicionarCarrinho.className = "adicionarCarrinho"

            imgProduto.src = `${arrayResultado[0][i].img}`
            imgProduto.alt = `${arrayResultado[0][i].nameItem}`

            botaoCategoria.innerText = `${arrayResultado[0][i].tag}`

            titulo.innerText = `${arrayResultado[0][i].nameItem}`

            descricaoProduto.innerText = `${arrayResultado[0][i].description}`

            precoProduto.innerText = `R$${arrayResultado[0][i].value}.00`

            adicionarCarrinho.innerText = "Adicionar ao carrinho"
            adicionarCarrinho.setAttribute("id", arrayResultado[0][i].id)

            listaDeProdutos.appendChild(divCard)
            divCard.appendChild(imgProduto)
            divCard.appendChild(botaoCategoria)
            divCard.appendChild(titulo)
            divCard.appendChild(descricaoProduto)
            divCard.appendChild(precoProduto)
            divCard.appendChild(adicionarCarrinho)
        }
    }
} )

const btnTodos = document.querySelector(".navegacao.todos")

btnTodos.addEventListener("click",function(){
    listaDeProdutos.innerHTML = ""
    listarProduto()
})

const btnCamisetas = document.querySelector(".navegacao.camisetas")

btnCamisetas.addEventListener("click", function(){
    listaDeProdutos.innerHTML =""
    for(let i=0;i<data.length;i++){
        if(data[i].tag[0]==="Camisetas"){
            const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${data[i].img}`
        imgProduto.alt = `${data[i].nameItem}`

        botaoCategoria.innerText = `${data[i].tag[0]}`

        titulo.innerText = `${data[i].nameItem}`

        descricaoProduto.innerText = `${data[i].description}`

        precoProduto.innerText = `R$${data[i].value}.00`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"
        adicionarCarrinho.setAttribute("id", data[i].id)

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
        }
    }
})

const btnAcessorios = document.querySelector(".navegacao.acessorios")

btnAcessorios.addEventListener("click",function(){
    listaDeProdutos.innerHTML = ""
    for(let i=0;i<data.length;i++){
        if(data[i].tag[0]==="Acessórios"){
            const divCard = document.createElement("div")
            divCard.className = "card"
            const imgProduto =  document.createElement("img")
            imgProduto.className = "imagemProduto"
            const botaoCategoria = document.createElement("button")
            botaoCategoria.className= "categoria"
            const titulo  = document.createElement("h3")
            titulo.className = "nomeProduto"
            const descricaoProduto = document.createElement("p")
            descricaoProduto.className = "descricao"
            const precoProduto  = document.createElement("strong")
            precoProduto.className = "preco"
            const adicionarCarrinho =  document.createElement("p")
            adicionarCarrinho.className = "adicionarCarrinho"
    
            imgProduto.src = `${data[i].img}`
            imgProduto.alt = `${data[i].nameItem}`
    
            botaoCategoria.innerText = `${data[i].tag[0]}`
    
            titulo.innerText = `${data[i].nameItem}`
    
            descricaoProduto.innerText = `${data[i].description}`
    
            precoProduto.innerText = `R$${data[i].value}.00`
    
            adicionarCarrinho.innerText = "Adicionar ao carrinho"
            adicionarCarrinho.setAttribute("id", data[i].id)
    
            listaDeProdutos.appendChild(divCard)
            divCard.appendChild(imgProduto)
            divCard.appendChild(botaoCategoria)
            divCard.appendChild(titulo)
            divCard.appendChild(descricaoProduto)
            divCard.appendChild(precoProduto)
            divCard.appendChild(adicionarCarrinho)
        }
    }
})


