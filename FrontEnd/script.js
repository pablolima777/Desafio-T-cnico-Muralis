const formulario = document.querySelector("#formulario");
const Inome = document.querySelector("#nome");
const Icpf = document.querySelector("#cpf");
const IDataNascimento = document.querySelector("#data_nascimento");
const Iendereco = document.querySelector("#endereco");
const Itipo = document.querySelector("#tipo");
const Ivalor = document.querySelector("#valor");
const Iobservacao = document.querySelector("#observacao");
const Iid = document.querySelector("#id");
const btnCadastrar = document.querySelector("#btnCadastrar");

const urlAPI = "http://localhost:8080/clientes";

//busca e lista clientes
function listarClientes() {
    fetch(urlAPI)
        .then(response => response.json())
        .then(clientes => {
            const tabela = document.querySelector("#tabelaUsuarios");
            tabela.innerHTML = "";
            clientes.forEach(cliente => {
                tabela.innerHTML += `
                    <tr>
                        <td>${cliente.nome}</td>
                        <td>${cliente.cpf}</td>
                        <td>${cliente.contatos[0]?.valor || 'N/A'}</td>
                        <td>
                            <button class="editar" onclick="editarCliente(${cliente.id})">Editar</button>
                            <button class="excluir" onclick="excluirCliente(${cliente.id})">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error("Erro ao buscar clientes:", error));
}

//cadastrar cliente e contato
function cadastrarCliente() {
    const cliente = {
        nome: Inome.value,
        cpf: Icpf.value,
        dataNascimento: IDataNascimento.value,
        endereco: Iendereco.value,
        contatos: [{
            tipo: Itipo.value,
            valor: Ivalor.value,
            observacao: Iobservacao.value
        }]
    };

    console.log("Cliente a ser cadastrado:", cliente); 

    fetch(urlAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cliente cadastrado:', data);
        listarClientes(); 
        limparFormulario(); 
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
    });
}

//editar cliente
function editarCliente(id) {
    //buscando o cliente na API
    fetch(`${urlAPI}/${id}`)
        .then(response => response.json())
        .then(cliente => {
            //aqui prenche o formulário com os dados do cliente
            Iid.value = cliente.id;
            Inome.value = cliente.nome;
            Icpf.value = cliente.cpf;
            IDataNascimento.value = cliente.dataNascimento;
            Iendereco.value = cliente.endereco;

            //(apenas o primeiro contato)
            Itipo.value = cliente.contatos[0]?.tipo || '';
            Ivalor.value = cliente.contatos[0]?.valor || '';
            Iobservacao.value = cliente.contatos[0]?.observacao || '';

        
            btnCadastrar.textContent = "Atualizar";

            //att evento de troca dos botoes
            btnCadastrar.onclick = function() {
                atualizarCliente(cliente.id); // Passa o ID do cliente para atualizar
            };
        })
        .catch(error => console.error("Erro ao carregar cliente:", error));
}

//atualizar cliente
function atualizarCliente(id) {
    const cliente = {
        nome: Inome.value,
        cpf: Icpf.value,
        dataNascimento: IDataNascimento.value,
        endereco: Iendereco.value,
        contatos: [{
            tipo: Itipo.value,
            valor: Ivalor.value,
            observacao: Iobservacao.value
        }]
    };

    fetch(`${urlAPI}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar cliente');
        }
        return response.json();
    })
    .then(data => {
        console.log('Cliente atualizado:', data);
        listarClientes(); // Atualiza a lista após a atualização
        limparFormulario(); // Limpa o formulário após a atualização
    })
    .catch(error => {
        console.error('Erro ao atualizar:', error);
    });
}

//excluir cliente
function excluirCliente(id) {
    fetch(`${urlAPI}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        listarClientes();
    })
    .catch(error => {
        console.error("Erro ao excluir:", error);
        alert("Ocorreu um erro ao excluir o cliente.");
    });
}

//limpar formulário
function limparFormulario() {
    Iid.value = "";
    Inome.value = "";
    Icpf.value = "";
    IDataNascimento.value = "";
    Iendereco.value = "";
    Itipo.value = "";
    Ivalor.value = "";
    Iobservacao.value = "";
    btnCadastrar.textContent = "Cadastrar";

    // Volta o botão a chamar a função de cadastro
    btnCadastrar.onclick = function() {
        cadastrarCliente();
    };
}

//Troca de Botoes
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = Iid.value; // Verifica se o cliente tem um ID (indica edição)
    
    if (id) {
        // Se houver ID, realiza a edição
        atualizarCliente(id);  // Atualiza o cliente
    } else {
        // Se não houver ID, realiza o cadastro
        cadastrarCliente();
    }
});

listarClientes();



