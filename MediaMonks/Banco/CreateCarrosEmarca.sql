CREATE TABLE Marcas (
    id_marca INTEGER PRIMARY KEY,
    nome_marca TEXT NOT NULL
);


CREATE TABLE Carros (
    data TEXT NOT NULL,
    id_marca INTEGER,
    vendas INTEGER,
    valor INTEGER,
    nome TEXT NOT NULL,
    FOREIGN KEY (id_marca) REFERENCES Marcas(id_marca)
);

