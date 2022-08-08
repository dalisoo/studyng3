import { bermudas } from "./bermudas.js";
let tudoModal = document.querySelector('.dinamico')
let modelo
let bermu = document.querySelector('.bermudas .box1')
let viewBermudas


document.body.addEventListener('click',(z)=>{
  let tudoEvents = z.target // Captura se clicou na tela 

  /*Verificar se foi clicado no Close modal, se sim apaga os perimetros com InnerHTML=""
  */
 if(tudoEvents.classList.contains('close-modal')){
  tudoModal.innerHTML=""
 }

 /* Verifica se clicou no botão de contatar, se sim é rederecionado pro wpp */

 if(tudoEvents.classList.contains('contact')){
  window.open(`https://api.whatsapp.com/send/?phone=5581984636009&text=Olá Darlan, queria fazer um pedido de um ${modelo}`)
 }
  
 //55818463600

 // Pega os IDS dos produtos
 let numberKey =  +z.target.dataset.key
 let productos = bermudas.filter(e=>e.id == numberKey)
//--------------------------------------------------

 //gera o modal dinamicamente 

let viewModal = productos.map(item=>{

  console.log(productos)
  tudoModal.innerHTML =`
  
  <div id="fade" class=""></div>
  <div id="modal" class="modal">
      <div class="modal-header">
          <h2>${item.modelo}</h2>
      </div>
      <div class="modal-body">
      <img src="${item.imagem}" />
          <p>${item.descricao}</p>
          <p>
              Consulte os tamanhos no whatsapp entrando em contato conosco abaixo. 
          </p>
      </div>
      <button  class="contact">Fazer Pedido</button>
      <button id="close-modal" class="close-modal">Fechar</button>
  </div>
 `
 modelo = item.modelo // pega o modelo no memento que clica no botao abrir
})
})

// aqui gera a lista dos  tenis dinamicamente 

viewBermudas += bermudas.map(item=>{
  bermu.innerHTML += `
  <div id="q1">
  <h2 id="res1">${item.modelo}</h2>
  <div  style="background-image: url(${item.imagem})  ;"  id="perso1Img" class="foto-1"></div>
  <button data-key="${item.id}" class="open-modal">Abrir</button>
  </div>
  `
})