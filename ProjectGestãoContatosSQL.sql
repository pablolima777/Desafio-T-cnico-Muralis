CREATE DATABASE banco_de_usuarios;
USE banco_de_usuarios;
CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    endereco VARCHAR(255)
);


CREATE TABLE contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    tipo ENUM('Telefone', 'E-mail') NOT NULL,
    valor VARCHAR(100) NOT NULL,
    observacao VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id) ON DELETE CASCADE
);
select * from cliente;
select * from contato;

