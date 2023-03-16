const modal = new bootstrap.Modal(document.getElementById('modal'));

let products = JSON.parse(localStorage.getItem('products'))

if(!products){
  products = [{id: 1,name: "Toddynho 200ml" ,family: "Drinks" ,qt: 0, price: 0},
  {id: 2,name: "Toddynho Levinho 200ml" ,family: "Drinks" ,qt: 0, price: 0},
  {id: 3,name: "Kero Coco 200ml" ,family: "Drinks" ,qt: 0, price: 0},
  {id: 4,name: "Kero Coco 330ml" ,family: "Drinks" ,qt: 0, price: 0},
  {id: 5,name: "Toddy Cookies Baunilha 38g" ,family: "Cookies" ,qt: 0, price: 0},
  {id: 6,name: "Toddy Cookies Extra Baunilha 47g" ,family: "Cookies" ,qt: 0, price: 0},
  {id: 7,name: "Toddy Cookies Extra Chocolate 47g" ,family: "Cookies" ,qt: 0, price: 0},
  {id: 8,name: "EQlibri Panetini Presunto Defumado 40g" ,family: "EQlibri" ,qt: 0, price: 0},
  {id: 9,name: "EQlibri Panetini Queijo Suave 40g" ,family: "EQlibri" ,qt: 0, price: 0},
  {id: 10,name: "Na Mesa Tradicional 215g" ,family: "Palha" ,qt: 0, price: 0},
  {id: 11,name: "Na Mesa Extra Fina 205g" ,family: "Palha" ,qt: 0, price: 0},
  {id: 12,name: "Na Mesa Tradicional 100g" ,family: "Palha" ,qt: 0, price: 0},
  {id: 13,name: "Na Mesa Extra Fina 90g" ,family: "Palha" ,qt: 0, price: 0},
  {id: 14,name: "Na Mesa Tradicional 60g" ,family: "Palha" ,qt: 0, price: 0},
  {id: 15,name: "Amendoim Ovinho 170g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 16,name: "Amendoim Ovinho 65g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 17,name: "Amendoim Ovinho Barbecue 130g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 18,name: "Amendoim Ovinho Barbecue 50g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 19,name: "Amendoim Sem Pele 100g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 20,name: "Amendoim Sem Pele 40g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 21,name: "Amendoim Japonês 145g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 22,name: "Amendoim Japonês 45g" ,family: "Amendoins" ,qt: 0, price: 0},
  {id: 23,name: "Doritos Nacho 300g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 24,name: "Doritos Nacho 210g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 25,name: "Doritos Nacho 140g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 26,name: "Doritos Nacho 84g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 27,name: "Doritos Dippas 84g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 28,name: "Doritos Nacho 53g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 29,name: "Doritos Pizza 48g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 30,name: "Doritos Sweet Chili 53g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 31,name: "Doritos Dinamita Chipottle Mayo 84g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 32,name: "Doritos Dinamita Spicy Cheese 84g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 33,name: "Doritos Dinamita Chipottle Mayo 53g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 34,name: "Doritos Dinamita Spicy Cheese 53g" ,family: "Doritos" ,qt: 0, price: 0},
  {id: 35,name: "Ruffles Sal 300g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 36,name: "Ruffles Sal 145g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 37,name: "Ruffles Sal 76g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 38,name: "Ruffles Cebola e Salsa 76g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 39,name: "Ruffles Churrasco 76g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 40,name: "Ruffles Sal 40g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 41,name: "Ruffles Queijo 40g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 42,name: "Ruffles Cebola e Salsa 40g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 43,name: "Ruffles Churrasco 40g" ,family: "Ruffles" ,qt: 0, price: 0},
  {id: 44,name: "Cebolitos 110g" ,family: "Cebolitos" ,qt: 0, price: 0},
  {id: 45,name: "Cebolitos 33g" ,family: "Cebolitos" ,qt: 0, price: 0},
  {id: 46,name: "Baconzitos 103g" ,family: "Baconzitos" ,qt: 0, price: 0},
  {id: 47,name: "Baconzitos 31g" ,family: "Baconzitos" ,qt: 0, price: 0},
  {id: 48,name: "Cheetos Onda 122g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 49,name: "Cheetos Lua 110g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 50,name: "Cheetos Mix 95g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 51,name: "Cheetos Onda 75g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 52,name: "Cheetos Onda 45g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 53,name: "Cheetos Lua 40g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 54,name: "Cheetos Tubo 39g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 55,name: "Cheetos Mix 41g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 56,name: "Cheetos Patas 38g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 57,name: "Cheetos Pipoca 140g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 58,name: "Cheetos Pipoca 45g" ,family: "Cheetos" ,qt: 0, price: 0},
  {id: 59,name: "Fandangos Presunto 115g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 60,name: "Fandangos Queijo 115g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 61,name: "Fandangos Presunto 80g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 62,name: "Fandangos Presunto 37g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 63,name: "Fandangos Queijo 37g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 64,name: "Fandangos Espiga Queijo 37g" ,family: "Fandangos" ,qt: 0, price: 0},
  {id: 65,name: "Sensações Frango Grelhado 40g" ,family: "Sensações" ,qt: 0, price: 0},
  {id: 66,name: "Sensações Peito de Peru 40g" ,family: "Sensações" ,qt: 0, price: 0},
  {id: 67,name: "Sensações Frango Grelhado 80g" ,family: "Sensações" ,qt: 0, price: 0},
  {id: 68,name: "Lay's Classica 80g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 69,name: "Lay's Sour Cream 80g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 70,name: "Lay's American Barbecue 80g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 71,name: "Lay's Salt & Vinegar 80g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 72,name: "Lay's Classica 45g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 73,name: "Lay's Sour Cream 45g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 74,name: "Lay's Rústica Sal Marinho 38g" ,family: "Lays" ,qt: 0, price: 0},
  {id: 75,name: "Stiksy 120g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 76,name: "Stiksy 48g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 77,name: "Pingo d'Ouro Bacon 120g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 78,name: "Pingo d'Ouro Picanha 90g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 79,name: "Pingo d'Ouro Bacon 48g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 80,name: "Pingo d'Ouro Picanha 35g" ,family: "Clássicos" ,qt: 0, price: 0},
  {id: 81,name: "Lanchinho 98g" ,family: "Lanchinho" ,qt: 0, price: 0},
  {id: 82,name: "Stax Original 163g" ,family: "Stax" ,qt: 0, price: 0},
  {id: 83,name: "Stax Salsa & Onion 158g" ,family: "Stax" ,qt: 0, price: 0},
  {id: 84,name: "Stax Cheddar 158g" ,family: "Stax" ,qt: 0, price: 0},
  {id: 85,name: "Torcida Pimenta Mexicana 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 86,name: "Torcida Cebola 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 87,name: "Torcida Churrasco 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 88,name: "Torcida Camarão com Pimenta 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 89,name: "Torcida Queijo 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 90,name: "Torcida Pão de Alho 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 91,name: "Torcida Vinagrete 100g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 92,name: "Torcida Pimenta Mexicana 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 93,name: "Torcida Cebola 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 94,name: "Torcida Churrasco 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 95,name: "Torcida Queijo 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 96,name: "Torcida Camarão com Pimenta 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 97,name: "Torcida Bacon 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 98,name: "Torcida Pão de Alho 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 99,name: "Torcida Calabresa 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 100,name: "Torcida Costelinha com Limão 38g" ,family: "Torcida" ,qt: 0, price: 0},
  {id: 101,name: "Torcida Vinagrete 38g" ,family: "Torcida" ,qt: 0, price: 0},
  ];

  saveProducts()
}

let families = JSON.parse(localStorage.getItem('families'))

if(!families){
  families = [
      {
          name: 'Drinks'
      },
      {
          name: 'Palha'
      },
      {
          name: 'Cookies'
      },
      {
          name: 'EQlibri'
      },
      {
          name: 'Amendoins'
      },
      {
          name: 'Doritos'
      },
      {
          name: 'Ruffles'
      },
      {
          name: 'Fandangos'
      },
      {
          name: 'Cheetos'
      },
      {
          name: 'Cebolitos'
      },
      {
          name: 'Baconzitos'
      },
      {
          name: 'Lays'
      },
      {
          name: 'Sensações'
      },
      {
          name: 'Clássicos'
      },
      {
          name: 'Lanchinho'
      },
      {
          name: 'Stax'
      },
      {
          name: 'Torcida'
      }];

  saveFamilies();
}

// Page Admin
function placeProductsHome(){
  products.forEach((item)=>{
    let familiesInHtml = document.querySelectorAll('.homeAccordion')

    for (let i = 0; i <familiesInHtml.length; i++) {
      if(item.family === familiesInHtml[i].id){
          familiesInHtml[i].innerHTML += `
          <div class="container p-0">
            <div class="row m-0 p-1">
              <div class="col-8 p-0 d-flex align-items-center">${item.name}</div>
              <div class="col p-0 d-flex justify-content-end align-items-start">
                <button
                  type="button"
                  class="btn btn-danger"
                  onclick="removeItem(${item.id})">
                  -
                </button>
              </div>
              <div class="col p-0 d-flex justify-content-center align-items-start">
                <div class="input-group">
                  <input
                    onblur="calcIpt(${item.id})"
                    id="homeInput-${item.id}"
                    type="number"
                    class="form-control text-center productInput"
                    value="${item.qt}" />
                </div>
              </div>
              <div class="col p-0 d-flex justify-content-start align-items-start">
                <button
                  type="button"
                  class="btn btn-success"
                  onclick="addItem(${item.id})">
                  +
                </button>
              </div>
            </div>
            <hr class="m-0" />
          </div>`
      }          
    }
  })
}

function placeFamiliesHome(){
  let content = document.getElementById('homeContent')
  content.innerHTML = ''

    families.forEach((item) => {    
        content.innerHTML += `<div class="accordion-item">
        <h2
          class="accordion-header"
          id="heading-${item.name}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-${item.name}"
            aria-expanded="false"
            aria-controls="collapse-${item.name}">
            <b>${item.name}</b>
          </button>
        </h2>
        <div
          id="collapse-${item.name}"
          class="accordion-collapse collapse"
          aria-labelledby="heading-${item.name}"
          data-bs-parent="#content">
          <div class="accordion-body p-0 homeAccordion" id="${item.name}">
          </div>
        </div>
      </div>`
  },
)};
  
  placeFamiliesHome()
  placeProductsHome()

function addItem(id){
    const inputId = `homeInput-${id}`
    const input = document.getElementById(inputId)

    for (let i = 0; i < products.length; i++) {
      if(products[i].id === id){
        products[i].qt++
        input.value = products[i].qt
        saveProducts()
      }        
    }
  }
  
  function removeItem(id){
    const inputId = `homeInput-${id}`
    const input = document.getElementById(inputId)

    for (let i = 0; i < products.length; i++) {
      if(products[i].id === id){
        products[i].qt--
        input.value = products[i].qt
        saveProducts()
      }        
    }
  }
  
  function saveProducts(){
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  function saveFamilies(){
    localStorage.setItem('families', JSON.stringify(families));
  }
  
  function calcIpt(id){
    const inputId = `homeInput-${id}`
    const input = document.getElementById(inputId)
    for (let i = 0; i < products.length; i++) {
      if(products[i].id === id){
        products[i].qt = input.value
        input.value = products[i].qt
        saveProducts();
      }
    }
  }

// Page Families

  function placeFamiliesFamily(){    
    families.forEach((item) => {
        let content = document.getElementById('familiesContent')
        content.innerHTML += `<div class="row">
        <div class="col-8 p-2 m-0 d-flex justify-content-start align-items-center"><b>${item.name}</b></div>
        <div class="col-2 p-1 d-flex justify-content-end align-items-center">
          <button type="button" class="btn btn-success" onclick="openFamilyEditModal('${item.name}')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-fill"
              viewBox="0 0 16 16">
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </button>
        </div>
        <div class="col-2 p-1 d-flex justify-content-start align-items-center">
          <button type="button" class="btn btn-danger" onclick="removeFamily('${item.name}')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16">
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
      <hr class="m-0" />`
    });
}

function openFamilyModal(){
  let modalBody = document.getElementById('modal-content')

  modalBody.innerHTML = `<div class="modal-header">
  <h1
    class="modal-title fs-5"
    id="newFamilyLabel">
    Adicionar família
  </h1>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="familyName"/>
    <label for="familyName">Nome da Família</label>
  </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal">
    Cancelar
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="saveFamily()">
    Salvar
  </button>
</div>`

modal.show()
}

function closeFamilyModal(){
  let content = document.getElementById('familiesContent')
  content.innerHTML = ''
  placeFamiliesFamily()
  modal.hide()
}

function saveFamily(){
  const nameIpt = document.getElementById('familyName')

  let newFamily = {
    name: nameIpt.value
  }

  for (let i = 0; i < families.length; i++) {
    if(families[i].name === newFamily.name){
      alert('Família já cadastrada!');

      return;
    }    
  }

  families.push(newFamily)

  saveFamilies()
  closeFamilyModal()
}

function removeFamily(id){
  let confirmation = confirm('Deseja remover a família?')

  if(!confirmation){
    return;
  }

  for (let i = 0; i < families.length; i++) {
    if(families[i].name === id){
      families.splice(i, 1)
    }
  }

  for (let i = 0; i < products.length; i++) {
    if(products[i].family === id){
      products.splice(i, 1)
    }    
  }

  localStorage.setItem('products', JSON.stringify(products));
  
  saveFamilies()
  closeFamilyModal()
}

function openFamilyEditModal(id){
  
  let modalBody = document.getElementById('modal-content')

  modalBody.innerHTML = `<div class="modal-header">
  <h1
    class="modal-title fs-5"
    id="newFamilyLabel">
    Adicionar família
  </h1>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="form-floating mb-3">
    <input
      value=${id}
      type="text"
      class="form-control"
      id="familyName"/>
    <label for="familyName">Nome da Família</label>
  </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal">
    Cancelar
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="saveFamilyEdit('${id}')">
    Salvar
  </button>
</div>`

modal.show()
}

function saveFamilyEdit(id){
  let nameIpt = document.getElementById('familyName')

  for (let i = 0; i < families.length; i++) {
      if(families[i].name === id){
          families[i].name = nameIpt.value

          saveFamilies();
          closeFamilyModal()
      }        
  }
}

// Page Marcados
function markedContent() {
  let content = document.getElementById('markedContent')
  content.innerHTML = ''

  products.forEach(item => {
    let content = document.getElementById('markedContent')

    if (item.qt != 0) {
      content.innerHTML += `<tr>
            <td
              colspan="3"
              class="nomeMarcado">
              ${item.name}
            </td>
            <td class="qtMarcado text-center">${item.qt}</td>
          </tr>`
    }
  });
}

function deleteAll(){
  products.forEach(item => {
    item.qt = 0
  })
  
  localStorage.setItem('products', JSON.stringify(products))

  let content = document.getElementById('markedContent')
  content.innerHTML = ''
  markedContent()
  placeFamiliesHome()
  placeProductsHome()
}

// Page Produtos
function placeProductsInProducts(){
  products.forEach((item)=>{
      let familiesInHtml = document.querySelectorAll('.productsAccordion')

      for (let i = 0; i <familiesInHtml.length; i++) {
          if(item.family === familiesInHtml[i].id){
              familiesInHtml[i].innerHTML += `<div class="container">
              <div class="row">
                <div class="col-8 p-0 m-0 d-flex justify-content-start align-items-center">
                  ${item.name}
                </div>
                <div class="col-2 p-1 d-flex justify-content-end align-items-center">
                  <button type="button" class="btn btn-success" onclick="modalEditProduct(${item.id})">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16">
                      <path
                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </button>
                </div>
                <div class="col-2 p-1 d-flex justify-content-start align-items-center">
                  <button type="button" class="btn btn-danger" onclick="removeProductItem(${item.id})">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16">
                      <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="m-0" />
            </div>`
          }            
      }
  })
}

function placeFamiliesInProducts(){
  let content = document.getElementById('productsContent')
  content.innerHTML = ''

  families.forEach((item) => {  
      content.innerHTML += `<div class="accordion-item">
      <h2 class="accordion-header" id="heading-${item.name}">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse-${item.name}"
          aria-expanded="false"
          aria-controls="collapse-${item.name}">
          <b>${item.name}</b>
        </button>
      </h2>
      <div id="collapse-${item.name}" class="accordion-collapse collapse" aria-labelledby="heading-${item.name}" data-bs-parent="#content">
        <div class="accordion-body p-0 productsAccordion" id="${item.name}">
        </div>
      </div>
    </div>`
  },  
)};

function showModalNewProduct(){
  let modalBody = document.getElementById('modal-content')

  modalBody.innerHTML = `    
  <div class="modal-header">
  <h1
    class="modal-title fs-5"
    id="newProductLabel">
    Adicionar produto
  </h1>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="productName"/>
    <label for="productName">Nome do Produto</label>
  </div>
  <div>
    <select
      class="form-select"
      aria-label="Default select example"
      id="familyInput">
      <option
        selected
        value="none">
        Selecione a família
      </option>
    </select>
  </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal">
    Cancelar
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="saveProduct()">
    Salvar
  </button>
</div>`

  let familyInput = document.getElementById('familyInput')

  families.forEach((item)=>{
    familyInput.innerHTML += `<option value="${item.name}">${item.name}</option>`
  })

  modal.show()
}

function closeProductModal(){
  let content = document.getElementById('productsContent')
  content.innerHTML = ''
  placeFamiliesInProducts()
  placeProductsInProducts()
  modal.hide()
}

function saveProduct(){
  let productInput = document.getElementById('productName');
  let familyInput = document.getElementById('familyInput');
  let productName = productInput.value;
  let id = products.length

  let newProduct = {
    id: id + 1,
    name: productInput.value,
    family: familyInput.value,
    qt: 0,
    price: 0
  };

  if(newProduct.name == "" || null){
    alert('Informe o nome do produto!');
    productInput.focus();

    return;
  }

  if (newProduct.family == "none"){
    alert('Informe a família do produto!');
    familyInput.focus();

    return;
  }

  for (let i = 0; i < products.length; i++) {
    if(productName === products[i].name){
      alert('produto já cadastrado!')

      productInput.focus();

      return;
    }
  }

  products.push(newProduct);
  
  saveProducts()
  closeProductModal()
}

function removeProductItem(id) {
  let confirmation = confirm('Deseja Remover o item?')

  if(!confirmation){
    return;
  }

  let newProductsArray = [];

  products.forEach((item) => {
    if (item.id !== id) {
      item.id = newProductsArray.length + 1;
      newProductsArray.push(item);
    }
  });

  products = newProductsArray;
  saveProducts();
  alert('Produto removido com sucesso');
  closeProductModal()
}

function modalEditProduct(id){
  let modalBody = document.getElementById('modal-content')
  let productToEdit

  for (let i = 0; i < products.length; i++) {
    if(products[i].id === id){
      productToEdit = products[i]
    }
  }

  modalBody.innerHTML = `    
  <div class="modal-header">
  <h1
    class="modal-title fs-5"
    id="newProductLabel">
    Editar produto
  </h1>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"></button>
</div>
<div class="modal-body">
  <div class="form-floating mb-3">
    <input
      value="${productToEdit.name}"
      type="text"
      class="form-control"
      id="productName"/>
    <label for="productName">Nome do Produto</label>
  </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal">
    Cancelar
  </button>
  <button
    type="button"
    class="btn btn-primary"
    onclick="saveProductEdit(${id})">
    Salvar
  </button>
</div>`

modal.show()
}

function saveProductEdit(id){
  let nameIpt = document.getElementById('productName')

  for (let i = 0; i < products.length; i++) {
    if(products[i].id === id){
      products[i].name = nameIpt.value

      saveProducts();
      closeProductModal();
    }        
  }
}