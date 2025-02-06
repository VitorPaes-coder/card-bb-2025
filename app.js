'use stript'
import produtos from "./listaProdutos"  

const disciplinas = [
    {nome: 'PPDM', img: 'android.png', cor: 'green'},
    {nome: 'PRO', img: 'google.png', cor: 'blue'},
    {nome: 'PWBE', img: 'netlfixx.png', cor: 'red'},
    {nome: 'PWFE', img: 'shoppe.png', cor: 'orange'}
   
]

function criarMenu(disciplina){
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

disciplinas.forEach(criarMenu)

function criarCards(tee){
    const novoItem = document.createElement('div')
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

disciplinas.forEach(criarMenu)