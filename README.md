# Desafio-Técnico-Muralis
# Gestão de Contatos (Comércio S.A)

## Descrição  
Este projeto é uma aplicação para a gestão de contatos utilizando **Java com Spring Boot** no back-end e **HTML, CSS e JavaScript** no front-end.  

O sistema permite:  
✅ Cadastro de clientes e seus contatos (telefone e e-mail)  
✅ Atualização e edição de clientes  
✅ Exclusão de clientes e seus contatos  
✅ Listagem de clientes e contatos em uma interface interativa  

A comunicação entre frontend e backend é feita por meio de uma **API REST**.  

---

## 📌 Funcionalidades  
- **Cadastro de Clientes e Contatos**: Nome, CPF, data de nascimento, endereço e contatos (tipo e valor).  
- **Edição de Clientes**: Atualização de informações do cliente e seus contatos.  
- **Exclusão de Clientes**: Remoção de um cliente e seus contatos.  
- **Listagem de Clientes**: Exibição de todos os clientes cadastrados e seus contatos.  

---

## 📁 Estrutura do Projeto  

### **Frontend (HTML, CSS, JavaScript)**  
📄 `index.html` - Página principal contendo o formulário de cadastro e a lista de contatos.  
🎨 `style.css` - Estilos para melhorar a interface.  
📝 `script.js` - Código para interagir com a API (cadastrar, editar, excluir e listar clientes).  

### **Backend (Java Spring Boot)**  
📌 `Cliente.java` e `Contato.java` - Classes modelo mapeadas para o banco de dados.  
📌 `ClienteController.java` - Controlador que lida com requisições API (GET, POST, PUT, DELETE).  
📌 `ICliente.java` - Interface que estende `CrudRepository` para manipulação de dados no banco.  

---

### 🚀 Como Rodar o Projeto  

#### 1️⃣ Backend:  
- Certifique-se de ter **Java 11+** instalado.  
- Clone o repositório, descompacte o `.zip` e abra em seu **Eclipse** ou outra IDE.  
- Configure a conexão com o banco em `src/main/resources/application.properties`.  
- Execute o **Spring Boot**.  

#### 2️⃣ Frontend:  
- Abra a pasta do frontend no **VS Code** ou outra IDE.  
- Abra o arquivo `index.html` no navegador.  

#### 3️⃣ Banco de Dados MySQL:  
- Configure o **MySQL**.  
- Execute o **DDL** anexado no repositório.  

