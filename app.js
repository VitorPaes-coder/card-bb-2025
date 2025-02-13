'use script'

const disciplinas = [
    {nome: 'PPDM', img: 'android.png', cor: 'green'},
    {nome: 'PRO', img: 'google.png', cor: 'blue'},
    {nome: 'PWBE', img: 'netlfixx.png', cor: 'red'},
    {nome: 'PWFE', img: 'shoppe.png', cor: 'orange'}
]

const tamanhos = [
    'P','M','G'
]

function criarTamanho(tamanhosDisponiveis, listaQueVaicolocar) {
    const ul = listaQueVaicolocar

    tamanhosDisponiveis.forEach(texto => {
        const li = document.createElement("li")
        li.textContent = texto
        li.style.fontWeight = "normal"
        li.style.color = "black"

        ul.appendChild(li)
    })
}

function criarMenu(disciplina) {
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novoImagem.src = `./img/${disciplina.img}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${disciplina.cor}`

    lista.appendChild(novoItem)
}

function criarCards(produto) {
    const listaProdutos = document.getElementById('produtos')

    const novoCard = document.createElement('div')
    novoCard.classList.add("card")
    novoCard.dataset.tag = produto.tag

    const conteudoCard = document.createElement('div')
    conteudoCard.classList.add("conteudo")

    const buttonCard = document.createElement('button')

    
    const nomeCard = document.createElement('h2')

    const spanCard = document.createElement('span')

    const imgCard = document.createElement('img')

    const divCard = document.createElement('div')

    const spanDivCard = document.createElement('span')

    const h4DivCard = document.createElement('h4')

    const ulDivCard = document.createElement('ul')

    novoCard.appendChild(conteudoCard)
    novoCard.appendChild(buttonCard)
    
    conteudoCard.appendChild(nomeCard)
    conteudoCard.appendChild(spanCard)
    conteudoCard.appendChild(imgCard)
    conteudoCard.appendChild(divCard)
    
    divCard.appendChild(spanDivCard)
    divCard.appendChild(h4DivCard)
    divCard.appendChild(ulDivCard)

    criarTamanho(produto.tamanhos, ulDivCard)

    nomeCard.textContent = produto.nome
    spanCard.textContent = produto.descricao
    imgCard.src = `./camisetas/${produto.img}`
    spanDivCard.textContent = `R$ ${produto.preco}`
    novoCard.style = `--cor-card: #${produto.cor};`
    h4DivCard.textContent = 'Tamanho'
    buttonCard.textContent = 'Adicionar ao carrinho'

    listaProdutos.appendChild(novoCard)
}

// Exemplo de produtos para os cards
const produtos = [
    {
        nome: 'AtomiC Tee', 
        descricao: 'Confeccionada em Suedine Preto 100% algodão 240GSM (alta gramatura)', 
        cor: 'f5412f', 
        preco: 219.0,
        tamanhos: ['P', 'M', 'G'],
        img: 'bomba.webp',
        tag: 'PPDM'
    },
    {
        nome: 'Spectacle Heavy Tee', 
        descricao: 'Confeccionada em Suedine branco 100% algodão 220GSM (alta gramatura)', 
        cor: '0039b2', 
        preco: 219.0,
        tamanhos: ['P', 'M', 'G'],
        img: 'muie.webp',
        tag: 'PRO'
    },
    {
        nome: 'Magic Trick Heavy Tee', 
        descricao: 'Confeccionada em Suedine vermelho 100% algodão 220GSM (alta gramatura)', 
        cor: 'e7b41a', 
        preco: 219.0,
        tamanhos: ['P', 'M', 'G'],
        img: 'simboloFaccao.webp',
        tag: 'PWFE'
    }
]



disciplinas.forEach(criarMenu)
produtos.forEach(criarCards)
