CREATE DATABASE cdc;

use cdc;

CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo  VARCHAR(255) DEFAULT NULL,
    descricao  TEXT,
    preco  DECIMAL(10,2) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO livros(titulo,descricao,preco) VALUES('Comecando com nodejs','Livro introdutorio sobre nodejs', 39.90);

INSERT INTO livros(titulo,descricao,preco) VALUES('Comecando com javascript','Livro introdutorio sobre javascript', 39.90);
 
INSERT INTO livros(titulo,descricao,preco) VALUES('Comecando com express','Livro introdutorio sobre express',39.90);