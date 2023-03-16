const btnHome = document.getElementById('btnHome')
const btnMarked = document.getElementById('btnMarked')
const btnProducts = document.getElementById('btnProducts')
const btnFamilies = document.getElementById('btnFamilies')
const btnNew = document.getElementById('btnNew')

const homeContent = document.getElementById('homeContent')
const familiesContent = document.getElementById('familiesContent')
const productsContent = document.getElementById('productsContent')
const tableMarcados = document.getElementById('tableMarcados')

function showHome(){
    btnHome.setAttribute('style', 'display: none')
    btnNew.setAttribute('style', 'display: none')

    btnMarked.removeAttribute('style')
    btnProducts.removeAttribute('style')
    btnFamilies.removeAttribute('style')

    homeContent.removeAttribute('style')

    tableMarcados.setAttribute('style', 'display: none')
    productsContent.setAttribute('style', 'display: none')
    familiesContent.setAttribute('style', 'display: none')
}

function showFamilies(){
    btnFamilies.setAttribute('style', 'display: none')

    btnNew.innerText = "Nova Família"
    btnNew.removeAttribute('style')
    btnNew.classList = "btn btn-primary"
    btnNew.setAttribute('onclick', 'openFamilyModal()')

    btnHome.removeAttribute('style')
    btnMarked.removeAttribute('style')
    btnProducts.removeAttribute('style')

    familiesContent.removeAttribute('style')

    homeContent.setAttribute('style', 'display: none')
    tableMarcados.setAttribute('style', 'display: none')
    productsContent.setAttribute('style', 'display: none')
}

function showProducts(){
    btnProducts.setAttribute('style', 'display: none')

    btnNew.innerText = "Novo Produto"
    btnNew.removeAttribute('style')
    btnNew.classList = "btn btn-primary"
    btnNew.setAttribute('onclick', 'showModalNewProduct()')
    
    btnFamilies.removeAttribute('style')
    btnHome.removeAttribute('style')
    btnMarked.removeAttribute('style')

    productsContent.removeAttribute('style')

    familiesContent.setAttribute('style', 'display: none')
    homeContent.setAttribute('style', 'display: none')    
    tableMarcados.setAttribute('style', 'display: none')
}

function showMarked(){
    btnMarked.setAttribute('style', 'display: none')

    btnNew.innerText = "Limpar lista"
    btnNew.removeAttribute('style')
    btnNew.classList = "btn btn-warning"
    btnNew.setAttribute('onclick', 'deleteAll()')

    btnProducts.removeAttribute('style')    
    btnFamilies.removeAttribute('style')
    btnHome.removeAttribute('style')

    tableMarcados.removeAttribute('style')

    productsContent.setAttribute('style', 'display: none')
    familiesContent.setAttribute('style', 'display: none')
    homeContent.setAttribute('style', 'display: none')    
}