
var items = [] 
var nomeproduto = document.querySelector('input[type=text]'); 
var valor = document.querySelector('input[type=number]');
var botao = document.querySelector('#submit');
var listaprodutos = document.querySelector('.lista-produtos');
var somaTotal = 0 ;
var total = document.querySelector('.soma-produto');



botao.addEventListener('click', function(){

  

  items.push({
    nome: nomeproduto.value,
    valor: valor.value
  })

  console.log(items);


  listaprodutos.innerHTML += `
  <div class="lista-produto-single"> 
   <p class="produto">${nomeproduto.value}</p>
   <p class="preco">${valor.value.replace(".", ",")}</p>
  </div> 
   `;

  somaTotal += parseFloat(valor.value);
  //ssomaTotal = somaTotal.toFixed(2)
  total.innerHTML = `<h1>R\$${somaTotal.toFixed(2)}</h1>`;

  nomeproduto.value = ""
  valor.value = ""
   
})

var limpar = document.querySelector("#clean")
console.log(limpar)
limpar.addEventListener('click', () =>{
  var items = [] 
  listaprodutos.innerHTML = "";
  somaTotal = 0;
  total.innerHTML = `<h1>R$0,00</h1>`;
})





