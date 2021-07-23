console.log('Teste rodando js')

//--------------- Menu Mobile
const headerLinks = document.getElementById('header__links');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-toggle-close');
const menuLinks = document.getElementById('header-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.add('menu--active');
    menuClose.classList.remove('hiden');
    menuLinks.classList.remove('hide');

  })
}

if (menuClose) {
  menuClose.addEventListener('click', () => {
    menuToggle.classList.remove('menu--active');
    menuClose.classList.add('hiden');
    menuLinks.classList.add('hide');
  })
}

//--------------- Modal Cliente
const bttnCliente = document.getElementById('bttn-cliente');
const modalCliente = document.getElementById('modal-cliente');

if (bttnCliente) {
  bttnCliente.addEventListener('click', () => {
    modalCliente.classList.add("visible");
  })
}

const closeModalCliente = document.getElementById('close-modal-cliente');
if (closeModalCliente) {
  closeModalCliente.addEventListener('click', () => {
    modalCliente.classList.remove("visible");
  })
}


//--------------- Modal Produto
const bttnProduto = document.getElementById('bttn-produto');
const modalProduto = document.getElementById('modal-produto')

if (bttnProduto) {
  bttnProduto.addEventListener('click', () => {
    modalProduto.classList.add("visible");
  })
}

const closeModalProduto = document.getElementById('close-modal-produto');
if (closeModalProduto) {
  closeModalProduto.addEventListener('click', () => {
    modalProduto.classList.remove("visible");
  })
}


//--------------- Cadastro Clientes
const cadastrarCliente = document.getElementById('cadastrarCliente');
let bdClientes = [];

cadastrarCliente.addEventListener('click', () => {
  let nome = document.getElementById('primeiroNome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let dataNascimento = document.getElementById('dataNascimento').value;
  let cpf = document.getElementById('cpf').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let rua = document.getElementById('rua').value;
  let numero = document.getElementById('numero').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade');
  let cep = document.getElementById('cep').value;
  let uf = document.getElementById('uf').value;

  let cliente = {
    nome,
    sobrenome,
    dataNascimento,
    cpf,
    email,
    telefone,
    rua,
    numero,
    bairro,
    cidade,
    cep,
    uf
  }

  bdClientes.push(cliente);
  localStorage.setItem('Dados Clientes', JSON.stringify(bdClientes))

  // document.getElementById('messageCliente').add.classList('visible');
  alert(`Cliente cadastrado com sucesso!`);
  modalCliente.classList.remove("visible");
  document.querySelector('#formCliente').reset();
})


//--------------- Cadastro Produtos
const cadastrarProduto = document.getElementById('cadastrarProduto');
let bdProduto = [];

cadastrarProduto.addEventListener('click', () => {
  let codigo = document.getElementById('codigo').value;
  let quantidade = document.getElementById('quantidade').value;
  let categoria = document.getElementById('categoria').value;
  let imagemProduto = document.getElementById('imagemProduto').value;
  let preco = document.getElementById('preco').value;
  let descricao = document.getElementById('descricao').value;

  let produto = {
    codigo,
    quantidade,
    categoria,
    imagemProduto,
    preco,
    descricao
  }

  bdProduto.push(produto);
  localStorage.setItem('Dados Produto', JSON.stringify(bdProduto));

  alert(`Cliente cadastrado com sucesso!`);
  modalProduto.classList.remove("visible");
  document.querySelector('#formProduto').reset();

});





