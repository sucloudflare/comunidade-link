// Verifica se o usuário está logado no navegador
if (localStorage.getItem('nome') && localStorage.getItem('instagram')) {
    const nome = localStorage.getItem('nome');
    const instagram = localStorage.getItem('instagram');
    
    // Exibe o nome do usuário e o Instagram no topo
    document.getElementById('user-name').textContent = `Olá, ${nome}`;
    document.getElementById('user-instagram').textContent = instagram;
  
    // Exibe a informação do usuário logado e o botão de sair
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('cadastro').style.display = 'none'; // Esconde o formulário de cadastro
  } else {
    // Esconde a informação de usuário se não houver dados de login
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block'; // Exibe o formulário de cadastro
  }
  
  // Função para cadastrar o usuário
  document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const instagram = document.getElementById('instagram').value;
    
    // Armazena os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('instagram', instagram);
    
    // Atualiza o nome e Instagram no topo da página
    document.getElementById('user-name').textContent = `Olá, ${nome}`;
    document.getElementById('user-instagram').textContent = instagram;
    
    // Esconde o formulário de cadastro
    document.getElementById('cadastro').style.display = 'none';
    
    // Exibe as informações do usuário logado
    document.getElementById('user-info').style.display = 'block';
  });
  
  // Função para sair (logout) e limpar os dados
  function logout() {
    // Remove os dados de login do localStorage
    localStorage.removeItem('nome');
    localStorage.removeItem('telefone');
    localStorage.removeItem('instagram');
    
    // Esconde as informações do usuário logado e exibe o formulário de cadastro novamente
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('cadastro').style.display = 'block';
  }
  